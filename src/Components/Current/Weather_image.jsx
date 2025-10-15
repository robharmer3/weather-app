import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import { weatherCodes } from "../../assets/weather_code";
import Error from "../Error";
import Loading from "../Loading";

function WeatherImage({ latitude, longitude }) {
  const { isLoading, isError, data } = useFetchApi(
    getWeather,
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
          src={weatherCodes[data.current.weather_code].day.image}
          alt="weather image"
        />
        <img
          src={weatherCodes[data.current.weather_code].day.image}
          alt="weather image"
        />
        <img
          src={weatherCodes[data.current.weather_code].day.image}
          alt="weather image"
        />

        <h2 className="weather">
          {weatherCodes[data.current.weather_code].day.description}
        </h2>
      </>
    );
  }
}

export default WeatherImage;
