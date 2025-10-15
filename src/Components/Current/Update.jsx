import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Loading from "../Loading";

function Update({ latitude, longitude }) {
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
    return <p>Last Updated: {new Date(data.current.time).toString()}</p>;
  }
}

export default Update;
