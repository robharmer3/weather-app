import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Error from "../Error";
import Loading from "../Loading";

function Temperature({ latitude, longitude }) {
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
        <h2 className="temp">
          {data.current.temperature_2m}
          {data.current_units.temperature_2m}
        </h2>
        <h3>
          Feels Like: {data.current.apparent_temperature}
          {data.current_units.temperature_2m}
        </h3>
      </>
    );
  }
}

export default Temperature;
