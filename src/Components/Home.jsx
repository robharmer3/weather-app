import Search from "./Search";

function Home() {
  return (
    <>
      <header>
        <h2>Welcome to TEMPEST 🌦️</h2>
        {/* <p>
          Before leaving the house, check TEMPEST for the current weather in
          your location or where you are heading.
        </p> */}
        <p>Weather you'll actually want to check</p>
        <br />
        <p>You can also check weather from the past.</p>
      </header>
      <Search />
    </>
  );
}

export default Home;
