import { weatherCodes } from "../assets/weather_code";

function WeatherImage({ weatherCode }) {
  return (
    <>
      <img src={weatherCodes[weatherCode].day.image} alt="weather image" />
      <h2 className="weather">{weatherCodes[weatherCode].day.description}</h2>
    </>
  );
}

export default WeatherImage;
