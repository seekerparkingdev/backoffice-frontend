import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
// IMPORTACIÓN DE VISTAS
import Eventos from "./views/eventos/Eventos";
import { ViewEventoFuncional } from "./views/eventos/ViewEventoFuncional";
import { ViewVenues } from "./views/venues/ViewVenues";
import { ViewVenueCrud } from "./views/venues/ViewVenueCrud";
import { ViewEventosNew } from "./views/eventos/ViewEventosNew";
import { ViewEstacionamiento } from "./views/estacionamiento/ViewEstacionamiento";
import { ViewEstacionamientoNew } from "./views/estacionamiento/ViewEstacionamientoNew";
import { ViewEstacionamientoEdit } from "./views/estacionamiento/ViewEstacionaminetoEdit";
import { ViewHome } from "./views/ViewHome";

// IMPORTAMOS EL PROVIDER DEL CONTEXTO
import { ParkingProvider } from "./utils/eventos/ParkingContext";
import { EstacionamientoProvider } from "./utils/estacionamiento/EstacionamientoContext";

function App() {
  return (
    <ParkingProvider>
      <EstacionamientoProvider>
        <div className="flex">
          <div className="flex-1">
            <HashRouter>
              <Routes>
                <Route path="/" element={<ViewHome />} />
                <Route path="/venues" element={<ViewVenues />} />
                <Route path="/venues/:id/:view?" element={<ViewVenueCrud />} />
                <Route path="/eventos" element={<Eventos />} />
                <Route path="/eventos/new" element={<ViewEventosNew />} />
                <Route path="/eventos/:id" element={<ViewEventoFuncional />} />
                <Route
                  path="/estacionamiento"
                  element={<ViewEstacionamiento />}
                />
                <Route
                  path="/estacionamiento/new"
                  element={<ViewEstacionamientoNew />}
                />
                <Route
                  path="/estacionamiento/:id"
                  element={<ViewEstacionamientoEdit />}
                />
              </Routes>
            </HashRouter>
          </div>
        </div>
      </EstacionamientoProvider>
    </ParkingProvider>
  );
}

export default App;
