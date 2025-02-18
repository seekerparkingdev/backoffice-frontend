import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
// IMPORTACIÓN DE VISTAS
import Eventos from "./views/eventos/Eventos";
import { ViewVenues } from "./views/venues/ViewVenues";
import { ViewEventosNew } from "./views/eventos/ViewEventosNew";
import { ViewEstacionamiento } from "./views/estacionamiento/ViewEstacionamiento";
import { ViewEstacionamientoCrud } from "./views/estacionamiento/ViewEstacionaminetoCrud";
import { ViewEventoPlazas } from "./views/eventos/ViewEventoPlazas";
import { ViewHome } from "./views/ViewHome";

import { EventosPlazas } from "./page/eventos/EventosPlazas";
// importamos el menu
import { Layout } from "./Layout";

import { ViewVenueCrud } from "./views/venues/ViewVenueCrud";
import { ViewEventoEstacionamiento } from "./views/eventos/ViewEventoEstacionamiento";

function App() {
  return (
    <div className="flex">
      <div className="flex-1">
        <Layout>
          <HashRouter>
            <Routes>
              <Route path="/" element={<ViewHome />} />
              <Route path="/venues" element={<ViewVenues />} />
              <Route path="/venues/:id" element={<ViewVenueCrud />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/eventos/:id" element={<ViewEventosNew />} />
              <Route path="/eventos/plazas" element={<ViewEventoPlazas />} />
              <Route
                path="/eventos/estacionamientos/:id?"
                element={<ViewEventoEstacionamiento />}
              />
              <Route
                path="/estacionamiento"
                element={<ViewEstacionamiento />}
              />

              <Route
                path="/estacionamiento/:id"
                element={<ViewEstacionamientoCrud />}
              />
            </Routes>
          </HashRouter>
        </Layout>
      </div>
    </div>
  );
}

export default App;
