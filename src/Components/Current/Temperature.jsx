function Temperature({ temperature, units, feelsLike }) {
  return (
    <>
      <h2 className="temp">
        {temperature}
        {units}
      </h2>
      <h3>
        Feels Like: {feelsLike}
        {units}
      </h3>
    </>
  );
}

export default Temperature;
