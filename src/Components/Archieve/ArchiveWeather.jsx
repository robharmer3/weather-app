import { useState } from "react";
import useFetchApi from "../../../endpoints Hook";
import { getArchiveWeather } from "../../../endpoint";
import WeatherImage from "../Current/Weather_image";
import WeatherLocation from "../Common/Location";
import ArchiveTemp from "./ArchiveTemp";

function ArchiveWeather() {
  const [date, setDate] = useState("");
  const { isLoading, isError, data } = useFetchApi(getArchiveWeather, date);

  function handleSubmit(event) {
    setDate(() => {
      return event.target.value;
    });
  }
  if (isLoading) {
    return <p>...hold fast...</p>;
  }

  if (isError) {
    return <p>...OOPS!..something went wrong!...</p>;
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
      </>
    );
  }
}

export default ArchiveWeather;
