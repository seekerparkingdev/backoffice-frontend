import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORTACIÓN DE VISTAS
import Eventos from "./views/eventos/Eventos";
import { ViewVenues } from "./views/venues/ViewVenues";
import { ViewVenueCrud } from "./views/venues/ViewVenueCrud";
import { ViewEventosNew } from "./views/eventos/ViewEventosNew";

function App() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Routes>
          <Route path="/venues" element={<ViewVenues />} />
          <Route path="/venues/:id/:view?" element={<ViewVenueCrud />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/eventos/new" element={<ViewEventosNew />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
