function Temperature({ temperature, units, feelsLike }) {
  return (
    <>
      <h2 className="temp">
        {temperature}
        {units}
      </h2>
      <h2>
        Feels Like: {feelsLike}
        {units}
      </h2>
    </>
  );
}

export default Temperature;
