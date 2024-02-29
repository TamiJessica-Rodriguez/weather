import { Link, Outlet, useLocation } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Maindashboard from "./MainDashboard";

function DashboardLayout() {
  const location = useLocation();

  // Kontrollerar om användaren är på dashboardens startsida
  const isDashboardHome = location.pathname === "/dashboard";

  return (
    <div className="bg-cover bg-center bg-fixed bg-slate-200">
      <Header />
      <div className="flex flex-col md:flex-row">
        {/* ASIDE */}
        <aside className="p-2 flex flex-col md:w-80 border-r border-blue-950">
          <Link to="/dashboard/weather">
            <div className="rounded-sm hover:bg-slate-300 border flex items-center h-20 pl-2 text-blue-950 font-semibold">
              Weather overview
            </div>
          </Link>
          <Link to="/dashboard/activities">
            <div className="rounded-sm hover:bg-slate-300 border flex items-center h-20 border-b-2 pl-2 text-blue-950 font-semibold">
              Activities
            </div>
          </Link>
          <Link to="/dashboard/adventures">
            <div className="rounded-sm hover:bg-slate-300 border flex items-center h-20 border-b-2 pl-2 text-blue-950 font-semibold">
              Adventures
            </div>
          </Link>
        </aside>

        {/* Main */}
        <main className="flex-1 p-3">
          {isDashboardHome && <Maindashboard />}
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
