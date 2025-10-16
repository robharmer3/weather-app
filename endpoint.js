import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://api.open-meteo.com/v1/forecast",
});
export function getWeather(lat, long) {
  return apiClient
    .get(
      `/?latitude=${lat}&longitude=${long}&daily=sunrise,sunset&models=ukmo_seamless&current=temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m,apparent_temperature,rain,showers,snowfall,relative_humidity_2m,cloud_cover&timezone=auto&wind_speed_unit=mph`
    )
    .then(({ data }) => {
      return data;
    });
}

const apiArchive = axios.create({
  baseURL: "https://archive-api.open-meteo.com/v1/archive",
});
export function getArchiveWeather(date, longitude, latitude) {
  return apiArchive
    .get(
      `/?latitude=${latitude}&longitude=${longitude}&start_date=${date}&end_date=${date}&daily=weather_code,temperature_2m_max,temperature_2m_mean,temperature_2m_min,precipitation_sum`
    )
    .then(({ data }) => {
      return data;
    });
}

const apiLocation = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/search",
});
export function getLocation(location) {
  return apiLocation
    .get(`?name=${location}&count=1&language=en&format=json`)
    .then(({ data }) => {
      return data;
    });
}
