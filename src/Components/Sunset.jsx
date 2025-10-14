function Sunset({ sunset }) {
  return (
    <div className="box">
      <h2>Sunset 🌝</h2>
      <p>{sunset.slice(11)}</p>
    </div>
  );
}

export default Sunset;
