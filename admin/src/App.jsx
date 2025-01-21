import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
// IMPORTACIÓN DE VISTAS
import Eventos from "./views/eventos/Eventos";
import { ViewEventoFuncional } from "./views/eventos/ViewEventoFuncional";
import { ViewVenues } from "./views/venues/ViewVenues";
import { ViewEventosNew } from "./views/eventos/ViewEventosNew";
import { ViewEstacionamiento } from "./views/estacionamiento/ViewEstacionamiento";
import { ViewEstacionamientoCrud } from "./views/estacionamiento/ViewEstacionaminetoCrud";
import { ViewHome } from "./views/ViewHome";

// IMPORTAMOS EL PROVIDER DEL CONTEXTO
 
import { ViewVenueCrud } from "./views/venues/ViewVenueCrud";

function App() {
  return (
    
          <div className="flex">
            <div className="flex-1">
              <HashRouter>
                <Routes>
                  <Route path="/" element={<ViewHome />} />
                  <Route path="/venues" element={<ViewVenues />} />
                  <Route
                    path="/venues/:id"
                    element={<ViewVenueCrud />}
                  />
                  <Route path="/eventos" element={<Eventos />} />
                  <Route path="/eventos/new" element={<ViewEventosNew />} />
                  <Route
                    path="/eventos/:id"
                    element={<ViewEventoFuncional />}
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
            </div>
          </div>
        
  );
}

export default App;
