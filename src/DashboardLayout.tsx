import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
// import MainBackground from "./assets/activities.webp";
import MiddleImage from "./assets/activities.webp";

function DashboardLayout() {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen"
      // style={{ backgroundImage: `url("${MainBackground}")` }}
    >
      <Header />
      <div className="h-screen flex flex-col">
        <div
          className="flex w-full h-60 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url("${MiddleImage}")` }}
        >
          <div className="flex-1"></div>
          <div className="flex-1 flex items-center justify-center">
            <form className="flex-1 flex justify-center items-center">
              <input
                type="text"
                placeholder="Search"
                className="border border-blue-950 p-2 mr-2 rounded-2xl w-4/5"
              />
            </form>
          </div>
          <div className="flex-1">
            <img src="" alt="" />
          </div>
        </div>
        <div className="flex flex-row">
          {/* ASIDE */}
          <aside className="p-2 flex flex-col w-80 gap-2 bg-white opacity-70 rounded-md">
            <Link to="/dashboard/weather">
              <div className="rounded-md hover:bg-blue-950  border border-blue-950 flex items-center h-20 pl-2">
                Översikt Väder
              </div>
            </Link>
            <Link to="/dashboard/activities">
              <div className="rounded-md hover:bg-blue-950 border border-blue-950 flex items-center h-20 border border-b-2  pl-2">
                Activities
              </div>
            </Link>
            <Link to="/dashboard/adventures">
              <div className="rounded-md hover:bg-blue-950 border border-blue-950 flex items-center h-20 border border-b-2  pl-2">
                Adventures
              </div>
            </Link>
            <div className="rounded-md hover:bg-blue-950 border border-blue-950 flex items-center h-20 border border-b-2  pl-2">
              Radar och satteliter
            </div>
            <div className="rounded-md hover:bg-blue-950 border border-blue-950 flex items-center h-20 border border-b-2  pl-2">
              Observationer
            </div>
            <div className="rounded-md hover:bg-blue-950 border border-blue-950 flex items-center h-20 border border-b-2  pl-2">
              Mark och vatten
            </div>
          </aside>

          {/* Main */}
          <main className="flex-1">
            <Outlet />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
