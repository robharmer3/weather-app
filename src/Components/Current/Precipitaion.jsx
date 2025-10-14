function Precipitation({ precipitation, units }) {
  return (
    <div className="data">
      <h4>Precipitation 🌧️</h4>
      <p>
        {precipitation}
        {units}
      </p>
    </div>
  );
}

export default Precipitation;
