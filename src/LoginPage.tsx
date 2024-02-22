import { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "./assets/loginPage.webp";

export default function LoginPage() {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  const isUsernameValid = username.length >= 5;

  return (
    <div
      className="flex flex-col bg-cover bg-center bg-fixed h-screen"
      style={{ backgroundImage: `url("${LoginImage}")` }}
    >
      <header className="flex bold text-white text-lg h-20">
        <div
          className="flex items-center justify-center flex-1"
          style={{ fontFamily: "Merriweather, sans-serif" }}
        >
          EARTH-MINGLE
        </div>
        <div className="flex-1"></div>
        <div className="flex-1"></div>
      </header>

      <div className=" w-1/3 h-1/5">
        {" "}
        <form className="flex flex-col items-center gap-3 mt-8 ">
          <label className="p-3 text-white" htmlFor="username">
            Enter your username
          </label>
          <input
            className="h-10 rounded-md"
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleInputChange}
          />
        </form>
      </div>

      <div className="flex items-center justify-center w-1/3">
        {" "}
        <Link to={{ pathname: "/app", state: { username: username } }}>
          <button
            className={`bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-800 ${
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
