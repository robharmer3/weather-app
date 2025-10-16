import { getArchiveWeather } from "../../../endpoint";
import useFetchApi from "../../../endpoints Hook";
import Error from "../Error";
import Loading from "../Loading";

function ArchiveTemp({ latitude, longitude, date }) {
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
        <h2 className="temp">
          Average Temperature: {data.daily.temperature_2m_mean}
          {data.daily_units.temperature_2m_mean}
        </h2>
        <h3>
          Maximum Temperature: {data.daily.temperature_2m_max}
          {data.daily_units.temperature_2m_max}
        </h3>
        <h3>
          Minimum Temperature: {data.daily.temperature_2m_min}
          {data.daily_units.temperature_2m_min}
        </h3>
      </>
    );
  }
}

export default ArchiveTemp;
