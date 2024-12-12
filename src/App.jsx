import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORTACIÓN DE VISTAS
import Eventos from "./views/eventos/Eventos";
import { ViewEventoFuncional } from "./views/eventos/ViewEventoFuncional";
import { ViewVenues } from "./views/venues/ViewVenues";
import { ViewVenueCrud } from "./views/venues/ViewVenueCrud";
import { ViewEventosNew } from "./views/eventos/ViewEventosNew";
import { ViewEstacionamiento } from "./views/estacionamiento/ViewEstacionamiento";

// IMPORTAMOS EL PROVIDER DEL CONTEXTO
import { ParkingProvider } from "./utils/eventos/ParkingContext";

function App() {
  return (
    <ParkingProvider>
      <div className="flex">
        <div className="flex-1">
          <Routes>
            <Route path="/venues" element={<ViewVenues />} />
            <Route path="/venues/:id/:view?" element={<ViewVenueCrud />} />
            <Route path="/eventos" element={<Eventos />} />
            <Route path="/eventos/new" element={<ViewEventosNew />} />
            <Route path="/eventos/:id" element={<ViewEventoFuncional />} />
            <Route path="/estacionamiento" element={<ViewEstacionamiento />} />
          </Routes>
        </div>
      </div>
    </ParkingProvider>
  );
}

export default App;
