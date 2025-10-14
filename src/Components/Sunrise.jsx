function Sunrise({ sunrise }) {
  return (
    <div className="box">
      <h2>Sunrise 🌞</h2>
      <p>{sunrise.slice(11)}</p>
    </div>
  );
}

export default Sunrise;
