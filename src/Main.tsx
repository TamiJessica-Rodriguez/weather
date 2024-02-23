import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Main() {
  const location = useLocation();
  const [isMainVisible, setIsMainVisible] = useState(false);
  const [isWeatherVisible, setIsWeatherVisible] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const { username } = location.state || {};

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=is_day,rain,weather_code,cloud_cover&hourly=temperature_2m,weather_code&daily=sunset,daylight_duration&models=best_match"
      );
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <main className="h-screen flex flex-col gap-2 text-white">
      <div className="flex flex-row">
        {/* ASIDE */}
        <aside className="p-2 flex flex-col border border-gray-300 w-1/5 gap-2">
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
              Prognoser
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
    </main>
  );
}

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// export default function Main() {
//   const location = useLocation();
//   const [isMainVisible, setIsMainVisible] = useState(false); // Set initial state to false
//   const [isWeatherVisible, setIsWeatherVisible] = useState(false);
//   const { username } = location.state || {};

//   return (
//     <main className="h-screen flex flex-col gap-2">
//       {/* <div className="flex flex-row h-10 bg-gray-600"></div> */}
//       <div className="flex flex-row">
//         {/* ASIDE */}
//         <aside className="p-2 flex flex-col border border-gray-300 w-1/5 gap-2">
//           <div
//             className="flex items-center h-20 border border-b-2 border-gray-400 pl-2"
//             onClick={() => {
//               setIsMainVisible(!isMainVisible);
//               setIsWeatherVisible(false);
//             }}
//           >
//             Översikt Väder
//           </div>

//           <Link to="/Activities">
//             <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
//               Activities
//             </div>
//           </Link>

//           <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
//             Prognoser
//           </div>
//           <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
//             Radar och satteliter
//           </div>
//           <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
//             Observationer
//           </div>
//           <div className="flex items-center h-20 border border-b-2 border-gray-400 pl-2">
//             Mark och vatten
//           </div>
//         </aside>

//         {/* Main */}
//         {isMainVisible && (
//           <div className="flex flex-1 flex-col border border-gray-300 w-4/5 gap-2 p-2">
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Måndag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Tisdag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Onsdag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Torsdag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Fredag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Lördag
//             </div>
//             <div
//               className="items-center flex border border-gray-400 h-20 p-2"
//               onClick={() => {
//                 setIsWeatherVisible(!isWeatherVisible);
//               }}
//             >
//               Söndag
//             </div>
//           </div>
//         )}
//         {!isMainVisible && <div className="flex-1"></div>}
//         <div className="flex-1">
//           {isWeatherVisible && <h2>Dagens väder:</h2>}
//         </div>
//       </div>
//       {username && <h1>Välkommen, {username}!</h1>}
//     </main>
//   );
// }
