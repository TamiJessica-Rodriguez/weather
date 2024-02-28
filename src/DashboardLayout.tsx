import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import MainImage from "./assets/activities.webp"; // Tar bort MiddleImage-importen då den inte längre behövs

function DashboardLayout() {
  return (
    <div
      className="bg-cover bg-center bg-fixed h-screen text-slate-200"
      style={{ backgroundImage: `url("${MainImage}")` }}
    >
      <Header />
      <div className="h-screen flex flex-col">
        <div className="flex flex-row">
          {/* ASIDE */}
          <aside className="p-2 flex flex-col w-80 gap-3 rounded-md text-slate-200 border border-slate-400">
            <Link to="/dashboard/weather">
              <div className="rounded-sm hover:bg-blue-950  border flex items-center h-20 pl-2">
                Översikt Väder
              </div>
            </Link>
            <Link to="/dashboard/activities">
              <div className="rounded-sm hover:bg-blue-950 border  flex items-center h-20 border border-b-2 pl-2">
                Activities
              </div>
            </Link>
            <Link to="/dashboard/adventures">
              <div className="rounded-sm hover:bg-blue-950 border  flex items-center h-20 border border-b-2 pl-2">
                Adventures
              </div>
            </Link>
            <div className="rounded-sm hover:bg-blue-950 border  flex items-center h-20 border border-b-2 pl-2">
              Radar och satelliter
            </div>
            <div className="rounded-sm hover:bg-blue-950 border flex items-center h-20 border border-b-2 pl-2">
              Observationer
            </div>
            <div className="rounded-sm hover:bg-blue-950 border  flex items-center h-20 border border-b-2 pl-2">
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
