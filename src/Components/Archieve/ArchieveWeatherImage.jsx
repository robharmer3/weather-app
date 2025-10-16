import { getArchiveWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import { weatherCodes } from "../../assets/weather_code";
import Error from "../Error";
import Loading from "../Loading";

function ArchieveWeatherImage({ latitude, longitude, date }) {
  const { isLoading, isError, data } = useFetchApi(
    getArchiveWeather,
    date,
    latitude,
    longitude
  );

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  if (data) {
    return (
      <>
        <img
          src={weatherCodes[data.daily.weather_code].day.image}
          alt="weather image"
        />
        <img
          src={weatherCodes[data.daily.weather_code].day.image}
          alt="weather image"
        />
        <img
          src={weatherCodes[data.daily.weather_code].day.image}
          alt="weather image"
        />

        <h2 className="weather">
          {weatherCodes[data.daily.weather_code].day.description}
        </h2>
      </>
    );
  }
}

export default ArchieveWeatherImage;
