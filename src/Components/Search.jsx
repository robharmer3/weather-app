import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search({ setSearchLocaton }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  function handleInput(event) {
    setSearchInput(event.target.value);
  }

  function handleSubmit() {
    setSearchLocaton(searchInput);
    navigate("/current");
  }

  return (
    <>
      <header>
        <h2>Welcome to TEMPEST 🌦️</h2>
        <p>blah blah blah</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location" className="label">
            <h3>Please enter your town or city:</h3>
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
