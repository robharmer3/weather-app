function WeatherLocation({ latitude, longitude, elevation }) {
  return (
    <>
      <p>
        {latitude}°N {longitude}°E {elevation}m above sea level
      </p>
    </>
  );
}

export default WeatherLocation;
