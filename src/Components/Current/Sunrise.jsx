function Sunrise({ sunrise }) {
  return (
    <div className="data">
      <h4>Sunrise 🌞</h4>
      <p>{sunrise.slice(11)}</p>
    </div>
  );
}

export default Sunrise;
