function Precipitation({ precipitation, units }) {
  return (
    <div className="box">
      <h2>Precipitation 🌧️</h2>
      <p>
        {precipitation}
        {units}
      </p>
    </div>
  );
}

export default Precipitation;
