import { useEffect, useState } from "react";
import LogoImage from "./assets/weather.webp";
interface WeatherData {
  current: {
    temperature_2m: number;
    time: number;
    wind_speed_10m: number;
  };
}

export default function WeatherPage() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  // Funktionen som hämtar väderdata
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m"
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  // Hämta väderdata när komponenten monteras
  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="flex">
      <div className="s gap-2 p-2 text-blue-950 h-screen">
        {weatherData && (
          <div className="">
            <img
              src={LogoImage}
              alt=""
              className="h-20 border border-slate-400 rounded-full"
            />
            <h2>Dagens väder:</h2>
            <p>Temperatur: {weatherData.current.temperature_2m} °C</p>
            <p>Tid: {weatherData.current.time}</p>
            <p>Vind: {weatherData.current.wind_speed_10m} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}
