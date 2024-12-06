import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORTACION DE VISTAS
import Eventos from "./views/eventos/Eventos";
import {ViewVenues} from "./views/venues/ViewVenues";
import {ViewVenueCrud} from "./views/venues/ViewVenueCrud";

function App() {
  return (
    <Routes>
      <Route path="/venues" element={<ViewVenues />} />
      <Route path="/venues/:id/:view?" element={<ViewVenueCrud />} />
      <Route path="/eventos" element={<Eventos />} />
    </Routes>
  );
}

export default App;
