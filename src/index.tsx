import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.tsx";
import LoginPage from "./LoginPage.tsx";
import TripOptions from "./TripOptions.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={LoginPage}></Route>
      <Route Component={App}>
        <Route path="/trips" Component={TripOptions} />
        <Route path="*" element={<span>Sidan finns inte...</span>} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
