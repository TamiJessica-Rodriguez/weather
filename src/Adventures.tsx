import { Link } from "react-router-dom";
import { mockedAdventures } from "./Adventures";

export default function Adventures() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-3 p-2 rounded-md text-blue-950">
      {mockedAdventures.map((adventure, index) => (
        <div
          className="flex flex-col gap-1 border border-blue-950 font-medium rounded-md p-4"
          key={index}
        >
          <h2 className="font-extrabold p-3">{adventure.title}</h2>
          <p className="p-3">{adventure.description}</p>
          <div className="bg-black border border-white p-4 h-50">
            <Link to="/Booking">
              <img src={adventure.url} alt={adventure.title} className="" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
