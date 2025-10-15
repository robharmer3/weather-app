import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Error from "../Error";
import Loading from "../Loading";

function Sunset({ latitude, longitude }) {
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
      <div className="data">
        <h4>Sunset 🌝</h4>
        <p>{data.daily.sunset[0].slice(11)}</p>
      </div>
    );
  }
}

export default Sunset;
