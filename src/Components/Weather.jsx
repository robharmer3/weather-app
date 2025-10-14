import useFetchApi from "../../endpoints Hook";
import { getWeather } from "../../endpoint";
import WeatherImage from "./Weather_image";
import WeatherLocation from "./Location";
import Temperature from "./Temperature";
import Precipitation from "./Precipitaion";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Sunset from "./Sunset";
import Sunrise from "./Sunrise";

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
        <header>
          <h2>Current Manchester Weather</h2>
          <WeatherLocation
            latitude={data.latitude}
            longitude={data.longitude}
            elevation={data.elevation}
          />
        </header>
        <main>
          <WeatherImage weatherCode={data.current.weather_code} />
          <Temperature
            temperature={data.current.temperature_2m}
            units={data.current_units.temperature_2m}
            feelsLike={data.current.apparent_temperature}
          />
        </main>
        <div className="outer-box">
          <Precipitation
            precipitation={data.current.precipitation}
            units={data.current_units.precipitation}
          />
          <Wind
            speed={data.current.wind_speed_10m}
            speedUnits={data.current_units.wind_speed_10m}
            direction={data.current.wind_direction_10m}
            dirUnits={data.current_units.wind_direction_10m}
          />
          <Humidity
            humidity={data.current.relative_humidity_2m}
            units={data.current_units.relative_humidity_2m}
          />
        </div>
        <div className="outer-box">
          <Sunrise sunrise={data.daily.sunrise[0]} />
          <Sunset sunset={data.daily.sunset[0]} />
        </div>
        <footer>
          <p>Last Updated: {new Date(data.current.time).toString()}</p>
        </footer>
      </>
    );
  }
}

export default Weather;
