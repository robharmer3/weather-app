import { useState } from "react";
import useFetchApi from "../../../endpoints Hook";
import { getArchiveWeather } from "../../../endpoint";
import WeatherImage from "../Current/Weather_image";
import WeatherLocation from "../Common/Location";
import ArchiveTemp from "./ArchiveTemp";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Error from "../Error";

function ArchiveWeather({ latitude, longitude }) {
  const [date, setDate] = useState("");
  const { isLoading, isError, data } = useFetchApi(getArchiveWeather, date);
  console.log(latitude);
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
            <p>Only select a date in the past</p>
          </label>
          <input
            type="date"
            id="date"
            name="trip-start"
            max={Date.now()}
            onChange={handleSubmit}
          />
        </header>

        <main>
          <h2>Manchester</h2>
          <WeatherLocation
            latitude={data.latitude}
            longitude={data.longitude}
            elevation={data.elevation}
          />
          <p>Date: {data.daily.time}</p>
        </main>
        <main>
          <WeatherImage weatherCode={data.daily.weather_code} />
          <ArchiveTemp
            maxTemp={data.daily.temperature_2m_max}
            minTemp={data.daily.temperature_2m_min}
            meanTemp={data.daily.temperature_2m_mean}
            units={data.daily_units.temperature_2m_max}
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
