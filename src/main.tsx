import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./layouts/navbar/Index.tsx";
import Homepage from "./pages/home/Index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Homepage />
  </React.StrictMode>
);
