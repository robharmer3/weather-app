import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LocationContext } from "../Context/Location";

function Search({}) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const { location, setLocation } = useContext(LocationContext);

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setLocation(searchInput);
    navigate(`/current`);
  }

  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location" className="label">
            <h3>Please enter your town or city for current weather:</h3>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={handleInput}
          />
          <br />
          <input className="button" type="submit" value="Submit" />
        </form>
      </main>
    </>
  );
}

export default Search;
