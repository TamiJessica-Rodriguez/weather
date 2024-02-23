import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MiddleImage from "./assets/activities.webp";

interface WeatherData {
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

export default function Main() {
  const location = useLocation();
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const { username } = location.state || {};

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=is_day,rain,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=sunset,daylight_duration&models=best_match"
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <main className="h-screen flex flex-col gap-4">
      <div
        className="flex border border-bottom w-full h-60 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url("${MiddleImage}")` }}
      >
        <div className="flex-1"></div>
        <div className="flex-1 flex items-center justify-center">
          <form className="flex-1 flex justify-center items-center m-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 p-2 mr-2 rounded-2xl w-4/5"
            />
          </form>
        </div>
        <div className="flex-1">
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex flex-row">
        {/* ASIDE */}
        <aside className="p-2 flex flex-col border border-gray-300 w-1/5 gap-2 bg-white opacity-70">
          <div
            className="flex items-center h-20 border border-b-2 border-gray-400 pl-2"
            onClick={() => {
              setIsMainVisible(!isMainVisible);
              setIsWeatherVisible(false);
            }}
          >
            Översikt Väder
          </div>
          <Link to="/Activities">
            <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
              Activities
            </div>
          </Link>
          <Link to="/Adventures">
            <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
              Adventures
            </div>
          </Link>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Radar och satteliter
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Observationer
          </div>
          <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
            Mark och vatten
          </div>
        </aside>

        {/* Main */}
        {isMainVisible && (
          <div className="flex flex-1 flex-col border border-gray-300 w-4/5 gap-2 p-2">
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
        )}
        {!isMainVisible && <div className="flex-1"></div>}
        <div className="flex-1">
          {isWeatherVisible && weatherData && (
            <div>
              <h2>Dagens väder:</h2>
              <p>Temperature: {weatherData.current.temperature_2m} °C</p>
              <p>Weather: {weatherData.current.weather_code}</p>
              {/* Add more weather data fields as needed */}
            </div>
          )}
        </div>
      </div>
      {username && <h1>Välkommen, {username}!</h1>}
      {/* Placera bildspelet här
      <Slideshow /> */}
    </main>
  );
}
