import { Link, Outlet } from "react-router-dom";
import MoonImage from "./assets/moon.webp";

export default function LoginPage() {
  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center bg-fixed h-screen justify-between"
      style={{ backgroundImage: `url("${MoonImage}")` }}
    >
      <header class="flex m-3 bold text-white text-lg">
        Jessicas Väder App
      </header>
      <form action="name">
        <label htmlFor="username">Användarnamn:</label>
        <input type="text" id="username" name="username" />
      </form>
      <Link to="/app">
        <button className="bg-purple-50">Knapp</button>
      </Link>
      <Outlet />
    </div>
  );
}
