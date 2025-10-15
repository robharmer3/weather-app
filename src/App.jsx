import Granim from "granim";
import "./App.css";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Weather from "./Components/Weather";
import { useEffect } from "react";
import ArchiveWeather from "./Components/Archieve/ArchiveWeather";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Search from "./Components/Search";

function App() {
  useEffect(() => {
    const granimInstance = new Granim({
      element: "#canvas",
      direction: "top-bottom",
      isPausedWhenNotInView: true,
      image: {
        blendingMode: "multiply",
      },
      states: {
        "default-state": {
          gradients: [
            ["#29323c", "#485563"],
            ["#80d3fe", "#7ea0c4"],
            ["#f0ab51", "#eceba3"],
          ],
          transitionSpeed: 7000,
        },
      },
    });
  }, []);

  return (
    <>
      <canvas id="canvas"></canvas>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/current" element={<Weather />} />
        <Route path="/archive" element={<ArchiveWeather />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
