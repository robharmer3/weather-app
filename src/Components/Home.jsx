import { Link } from "react-router-dom";
import Search from "./Search";
import { useState } from "react";

function Home() {
  const [searchLocaton, setSearchLocaton] = useState("");

  return (
    <>
      <Search setSearchLocaton={setSearchLocaton} />
    </>
  );
}

export default Home;
