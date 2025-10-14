function Wind({ speed, speedUnits, direction, dirUnits }) {
  return (
    <div className="box">
      <h2>Wind 🌀</h2>
      <p>
        {speed}
        {speedUnits}
      </p>
      <p>{direction}º</p>
    </div>
  );
}

export default Wind;
