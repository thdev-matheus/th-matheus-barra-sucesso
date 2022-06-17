import React from "react";
import ReactDOM from "react-dom/client";
import BarraSucesso from "./BarraSucesso";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <BarraSucesso />
    </BrowserRouter>
  </React.StrictMode>
);
