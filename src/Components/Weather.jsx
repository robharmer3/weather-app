import { fetchWeatherApi } from 'openmeteo';

function Weather() {

    const params = {
	"latitude": 53.4809,
	"longitude": -2.2374,
	"models": "ukmo_seamless",
	"current": ["temperature_2m", "is_day", "precipitation", "weather_code", "wind_speed_10m", "wind_direction_10m"],
	"timezone": "GMT",
};
const url = "https://api.open-meteo.com/v1/forecast";
const responses = await fetchWeatherApi(url, params);

// Process first location. Add a for-loop for multiple locations or weather models
const response = responses[0];

// Attributes for timezone and location
const latitude = response.latitude();
const longitude = response.longitude();
const elevation = response.elevation();
const timezone = response.timezone();
const timezoneAbbreviation = response.timezoneAbbreviation();
const utcOffsetSeconds = response.utcOffsetSeconds();

console.log(
	`\nCoordinates: ${latitude}°N ${longitude}°E`,
	`\nElevation: ${elevation}m asl`,
	`\nTimezone: ${timezone} ${timezoneAbbreviation}`,
	`\nTimezone difference to GMT+0: ${utcOffsetSeconds}s`,
);

const current = response.current()!;

// Note: The order of weather variables in the URL query and the indices below need to match!
const weatherData = {
	current: {
		time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
		temperature_2m: current.variables(0)!.value(),
		is_day: current.variables(1)!.value(),
		precipitation: current.variables(2)!.value(),
		weather_code: current.variables(3)!.value(),
		wind_speed_10m: current.variables(4)!.value(),
		wind_direction_10m: current.variables(5)!.value(),
	},
};

// 'weatherData' now contains a simple structure with arrays with datetime and weather data
console.log(
	`\nCurrent time: ${weatherData.current.time}`,
	`\nCurrent temperature_2m: ${weatherData.current.temperature_2m}`,
	`\nCurrent is_day: ${weatherData.current.is_day}`,
	`\nCurrent precipitation: ${weatherData.current.precipitation}`,
	`\nCurrent weather_code: ${weatherData.current.weather_code}`,
	`\nCurrent wind_speed_10m: ${weatherData.current.wind_speed_10m}`,
	`\nCurrent wind_direction_10m: ${weatherData.current.wind_direction_10m}`,
);

  return (
    <>
      <p>Hello</p>
    </>
  );
}

export default Weather;
