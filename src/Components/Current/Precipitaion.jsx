import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Error from "../Error";
import Loading from "../Loading";

function Precipitation({ latitude, longitude }) {
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
        <h4>Precipitation 🌧️</h4>
        <p>
          {data.current.precipitation}
          {data.current_units.precipitation}
        </p>
      </div>
    );
  }
}

export default Precipitation;
