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

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" Component={LoginPage}></Route>
      
      <Route path="/app" Component={App} />
      <Route path="*" element={<span>Sidan finns inte...</span>} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
