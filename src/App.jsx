import "./css/style.css";
import "./charts/ChartjsConfig";
import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
// IMPORTACION DE VISTAS 
import Venue from "./views/venues/venue";
import VenueEdit from "./views/venues/venueEdit";
import Eventos from "./views/eventos/Eventos";
import Evento from "./views/eventos/Evento";
 
// IMPORTACION DE LAS VIEW PARA LAS RUTAS
 
function App() {
  return (
     
      <Routes>
        <Route path="/venues" element={<Venue />} />
        <Route path="/venues/:id/:view?" element={<VenueEdit />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/evento/:id" element={<Evento />} />

      </Routes>
    
  );
}

export default App;
