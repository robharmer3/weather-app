function Humidity({ humidity, units }) {
  return (
    <div className="box">
      <h2>Humidity 💧</h2>
      <p>
        {humidity}
        {units}
      </p>
    </div>
  );
}

export default Humidity;
