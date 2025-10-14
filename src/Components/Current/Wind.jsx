function Wind({ speed, speedUnits, direction, dirUnits }) {
  return (
    <div className="data">
      <h4>Wind 🌀</h4>
      <p>
        {speed}
        {speedUnits}
      </p>
      <p>{direction}º</p>
    </div>
  );
}

export default Wind;
