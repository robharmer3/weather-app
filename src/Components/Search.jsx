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
      <form onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleInput}
        />
        <input className="button" type="submit" value="Submit" />
      </form>
    </>
  );
}

export default Search;
