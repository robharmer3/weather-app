import useFetchApi from "../../../endpoints Hook";
import { getLocation } from "../../../endpoint";
import WeatherImage from "./Weather_image";
import WeatherLocation from "../Common/Location";
import Temperature from "./Temperature";
import Precipitation from "./Precipitaion";
import Wind from "./Wind";
import Humidity from "./Humidity";
import Sunset from "./Sunset";
import Sunrise from "./Sunrise";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import Update from "./Update";
import { useContext } from "react";
import { LocationContext } from "../../Context/Location";

function Weather() {
  const { location, setLocation } = useContext(LocationContext);
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
