import { getWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Error from "../Error";
import Loading from "../Loading";

function Wind({ latitude, longitude }) {
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
        <h4>Wind 🌀</h4>
        <p>
          {data.current.wind_speed_10m}
          {data.current_units.wind_speed_10m}
        </p>
        <p>{data.current.wind_direction_10m}º</p>
      </div>
    );
  }
}

export default Wind;
