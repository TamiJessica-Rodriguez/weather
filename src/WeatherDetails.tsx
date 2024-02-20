// WeatherDetails.tsx
// import axios from "axios";
// import React, { useEffect, useState } from "react";

// interface WeatherData {
//   main: {
//     temp: number;
//   };
//   weather: {
//     description: string;
//   }[];
// }

// interface WeatherDetailsProps {
//   apiKey: string;
//   cityName: string;
// }

// const WeatherDetails: React.FC<WeatherDetailsProps> = ({
//   apiKey,
//   cityName,
// }) => {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get<WeatherData>(
//           `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
//         );
//         setWeather(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching weather data");
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [apiKey, cityName]);

//   return (
//     <div className="weather-details">
//       <h2>Dagens väder:</h2>
//       {loading ? (
//         <p>Laddar...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : weather ? (
//         <div>
//           <p>Temperatur: {weather.main.temp}°C</p>
//           <p>Väder: {weather.weather[0].description}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// export default WeatherDetails;

// import axios from "axios";
// import PropTypes from "prop-types";
// import React, { useEffect, useState } from "react";

// interface WeatherData {
//   main: {
//     temp: number;
//   };
//   weather: {
//     description: string;
//   }[];
// }

// interface WeatherDetailsProps {
//   apiKey: string;
//   cityName: string;
// }

// const WeatherDetails: React.FC<WeatherDetailsProps> = ({
//   apiKey,
//   cityName,
// }) => {
//   const [weather, setWeather] = useState<WeatherData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await axios.get<WeatherData>(
//           `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
//         );
//         setWeather(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError("Error fetching weather data");
//         setLoading(false);
//       }
//     };

//     fetchWeather();
//   }, [apiKey, cityName]);

//   return (
//     <div className="weather">
//       <h2>Dagens väder:</h2>
//       {loading ? (
//         <p>Laddar...</p>
//       ) : error ? (
//         <p>{error}</p>
//       ) : weather ? (
//         <div>
//           <p>Temperatur: {weather.main.temp}°C</p>
//           <p>Väder: {weather.weather[0].description}</p>
//         </div>
//       ) : null}
//     </div>
//   );
// };

// WeatherDetails.propTypes = {
//   apiKey: PropTypes.string.isRequired,
//   cityName: PropTypes.string.isRequired,
// };

// export default WeatherDetails;
