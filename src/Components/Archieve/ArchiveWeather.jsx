import { useContext, useState } from "react";
import useFetchApi from "../../../endpoints Hook";
import { getArchiveWeather, getLocation } from "../../../endpoint";
import WeatherImage from "../Current/Weather_image";
import WeatherLocation from "../Common/Location";
import ArchiveTemp from "./ArchiveTemp";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";
import { LocationContext } from "../../Context/Location";
import ArchieveWeatherImage from "./ArchieveWeatherImage";

function ArchiveWeather() {
  const { location, setLocation } = useContext(LocationContext);
  const { isLoading, isError, data } = useFetchApi(getLocation, location);
  const { results } = data;
  const [date, setDate] = useState("2025-10-16");

  function handleSubmit(event) {
    setDate(() => {
      return event.target.value;
    });
  }

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
          <label htmlFor="start">
            <h3>Please select a date</h3>
            <p>(Only select a date in the past)</p>
          </label>
          <input
            type="date"
            id="date"
            name="trip-start"
            max={Date.now()}
            value={date}
            onChange={handleSubmit}
          />
        </header>
        <main>
          <h2>{results[0].name}</h2>
          <WeatherLocation
            latitude={results[0].latitude}
            longitude={results[0].longitude}
            elevation={results[0].elevation}
          />
          <p>Date: {date}</p>
        </main>
        <main>
          <ArchieveWeatherImage
            latitude={results[0].latitude}
            longitude={results[0].longitude}
            date={date}
          />
        </main>
        <div className="link-box">
          <Link to="/current">
            <h2>Current Weather ↪</h2>
          </Link>
        </div>
      </>
    );
  }
}

export default ArchiveWeather;
