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

const apiArchive = axios.create({
  baseURL: "https://archive-api.open-meteo.com/v1/archive",
});

export function getArchiveWeather(date) {
  return apiArchive
    .get(
      `/?latitude=53.4809&longitude=-2.2374&start_date=${date}&end_date=${date}&daily=weather_code,temperature_2m_max,temperature_2m_mean,temperature_2m_min,precipitation_sum`
    )
    .then(({ data }) => {
      return data;
    });
}
