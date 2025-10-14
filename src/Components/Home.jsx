import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <nav>
        {/* <Link to="/">
          <h2>Home</h2>
        </Link> */}
        <Link to="/current">
          <h2>Current Weather</h2>
          <h3>(in Manchester)</h3>
        </Link>
        <Link to="/archive">
          <h2>Archive Weather</h2>
          <h3>(in Manchester)</h3>
        </Link>
      </nav>
    </>
  );
}

export default Home;
