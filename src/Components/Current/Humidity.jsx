function Humidity({ humidity, units }) {
  return (
    <div className="data">
      <h4>Humidity 💧</h4>
      <p>
        {humidity}
        {units}
      </p>
    </div>
  );
}

export default Humidity;
