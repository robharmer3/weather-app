function Sunset({ sunset }) {
  return (
    <div className="data">
      <h4>Sunset 🌝</h4>
      <p>{sunset.slice(11)}</p>
    </div>
  );
}

export default Sunset;
