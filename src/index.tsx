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
import App from "./App.tsx";
import LoginPage from "./LoginPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={LoginPage}></Route>
      <Route path="/app" Component={App}></Route>
      <Route path="/activities" Component={Activities}></Route>
      <Route path="/adventures" Component={Adventures}></Route>
      <Route path="*" element={<span>Sidan finns inte...</span>}></Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
