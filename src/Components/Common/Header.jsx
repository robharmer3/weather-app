import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="title">
      <Link to="/">
        <h1>TEMPEST</h1>
        <p>Here for all you weather needs</p>
      </Link>
    </div>
  );
}

export default Header;
