import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});

export function getWeather() {
  return apiClient
    .get(
      "/?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m"
    )
    .then(({ data }) => {
      return data;
    });
}

// https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,precipitation,weather_code,wind_speed_10m
