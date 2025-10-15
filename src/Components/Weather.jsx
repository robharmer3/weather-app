import useFetchApi from "../../endpoints Hook";
import { getLocation, getWeather } from "../../endpoint";
import WeatherImage from "./Current/Weather_image";
import WeatherLocation from "./Common/Location";
import Temperature from "./Current/Temperature";
import Precipitation from "./Current/Precipitaion";
import Wind from "./Current/Wind";
import Humidity from "./Current/Humidity";
import Sunset from "./Current/Sunset";
import Sunrise from "./Current/Sunrise";
import { Link, useSearchParams } from "react-router-dom";
import Loading from "./Loading";
import Error from "./Error";
import Search from "./Search";
import Update from "./Current/Update";

function Weather() {
  // const { isLoading, isError, data } = useFetchApi(getWeather);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = searchParams.get("location");
  const { isLoading, isError, data } = useFetchApi(getLocation, location);

  const { results } = data;

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (data) {
    return (
      <>
        <header>
          <h2>{results[0].name}</h2>
          <WeatherLocation
            latitude={results[0].latitude}
            longitude={results[0].longitude}
            elevation={results[0].elevation}
          />
        </header>
        <main>
          <WeatherImage
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
          <Temperature
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
        </main>
        <div className="weather-data">
          <Precipitation
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
          <Wind
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
          <Humidity
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
        </div>
        <div className="weather-data">
          <Sunrise
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
          <Sunset
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
        </div>
        <div className="link-box">
          <Link
            to="/archive"
            params={{
              latitude: results[0].latitude,
              longitude: results[0].longitude,
            }}
          >
            <h2>↩ Historic Weather</h2>
          </Link>
        </div>
        <footer>
          <Update
            latitude={results[0].latitude}
            longitude={results[0].longitude}
          />
        </footer>
      </>
    );
  }
}

export default Weather;
