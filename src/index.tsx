import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Activities from "./Activities.tsx";
import Adventures from "./Adventures.tsx";
import DashboardLayout from "./DashboardLayout.tsx";
import Booking from "./Booking.tsx";
import LoginPage from "./LoginPage.tsx";
import Weather from "./WeatherPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index Component={LoginPage} />
      <Route path="dashboard" Component={DashboardLayout}>
        <Route path="weather" Component={Weather} />
        <Route path="activities" Component={Activities} />
        <Route path="adventures" Component={Adventures} />
        <Route path="booking" Component={Booking} />
        <Route path="*" element={<span>Sidan finns inte...</span>} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
