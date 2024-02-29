import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "./assets/globe-solo.png";
import LoginImage from "./assets/loginPage.webp";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const isUsernameValid = username.length >= 5;

  return (
    <div
      className="flex flex-col items-center justify-center bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: `url("${LoginImage}")` }}
    >
      <header className="flex bold text-white text-lg h-20 w-full px-4 md:px-0">
        <div
          className="flex items-center justify-center flex-1"
          style={{ fontFamily: "Merriweather, sans-serif" }}
        >
          EARTH-MINGLE
        </div>
      </header>

      <div className="flex flex-col items-center justify-center w-full px-4 md:w-1/3 md:h-1/5">
        <img
          src={LogoImage}
          alt=""
          className="h-24 border border-gray-300 rounded-full mb-4"
        />

        <form className="flex flex-col items-center gap-3 w-full md:w-auto">
          <input
            placeholder="Enter your name"
            className="h-10 rounded-md p-2 w-64" // Fixed width for all screens
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div className="flex items-center justify-center w-full mt-5 px-4 md:w-1/3">
        <Link to={{ pathname: "/dashboard" }}>
          <button
            className={`bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-800 w-full md:w-auto ${
              isUsernameValid ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!isUsernameValid}
          >
            Enter
          </button>
        </Link>
      </div>
    </div>
  );
}
