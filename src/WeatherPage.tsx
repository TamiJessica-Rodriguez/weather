import { useState } from "react";
import { useLocation } from "react-router-dom";
import MiddleImage from "./assets/activities.webp";

interface WeatherData {
  current: any;
  cloud_cover: number;
  interval: number;
  is_day: number;
  rain: number;
  time: string;
  weather_code: number;
  hourly_units: {
    temperature_2m: string;
  };
}

export default function WeatherPage() {
  const location = useLocation();
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const { username } = location.state || { username: "" };

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div className="flex">
      <div
        className="flex flex-1 flex-col border border-gray-300 w-4/5 gap-2 p-2"
        style={{ backgroundImage: `url("${MiddleImage}")` }}
      >
        {[
          "Måndag",
          "Tisdag",
          "Onsdag",
          "Torsdag",
          "Fredag",
          "Lördag",
          "Söndag",
        ].map((day) => (
          <div
            key={day}
            className="items-center flex border border-gray-400 h-20 p-2"
            onClick={() => {
              setIsWeatherVisible(!isWeatherVisible);
              fetchWeatherData();
            }}
          >
            {day}
          </div>
        ))}
      </div>

      <div className="flex-1">
        {weatherData && (
          <div>
            <h2>Dagens väder:</h2>
            <p>Temperature: {weatherData.current.temperature_2m} °C</p>
            <p className="mr-2">Time: {weatherData.current.time}</p>
            <p>Wind: {weatherData.current.wind_speed_10m}</p>
            {/* Add more weather data fields as needed */}
          </div>
        )}
      </div>
    </div>
  );
}
