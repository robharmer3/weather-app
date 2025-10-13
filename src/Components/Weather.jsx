import useFetchApi from "../../endpoints Hook";
import { getWeather } from "../../endpoint";
import WeatherImage from "./Weather_image";

function Weather() {
  const { isLoading, isError, data } = useFetchApi(getWeather);

  if (isLoading) {
    return <p>...hold fast...</p>;
  }

  if (isError) {
    return <p>...something went wrong!...</p>;
  }

  if (data) {
    return (
      <>
        <h1>Current Manchester Weather</h1>
        <p>
          {data.latitude}°N {data.longitude}°E {data.elevation}m above sea level
        </p>
        <WeatherImage weatherCode={data.current.weather_code} />
        <h3>
          Temperature: {data.current.temperature_2m}
          {data.current_units.temperature_2m}
        </h3>
        <h3>
          Precipitation: {data.current.precipitation}
          {data.current_units.precipitation}
        </h3>
        <h3>
          Wind Speed: {data.current.wind_speed_10m}
          {data.current_units.wind_speed_10m}
        </h3>
        <h3>
          Wind Direction: {data.current.wind_direction_10m}
          {data.current_units.wind_direction_10m}
        </h3>
        <p>Updated: {new Date(data.current.time).toString()}</p>
      </>
    );
  }
}

export default Weather;
