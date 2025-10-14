import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

export function getWeather() {
  return apiClient
    .get(
      "/?latitude=53.4809&longitude=-2.2374&daily=sunrise,sunset&models=ukmo_seamless&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,apparent_temperature,rain,showers,snowfall,relative_humidity_2m,cloud_cover&timezone=auto&wind_speed_unit=mph"
    )
    .then(({ data }) => {
      return data;
    });
}

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,weather_code,wind_speed_10m
