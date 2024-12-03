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
import ViewnewVenue from "./views/venues/ViewnewVenue";
// IMPORTACION DE LAS VIEW PARA LAS RUTAS
 
function App() {
  return (
     
      <Routes>
        <Route path="/venues" element={<Venue />} />
        <Route path="/venues/:id" element={<VenueEdit />} />
        <Route path="/venues/new" element={<ViewnewVenue />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/evento/:id" element={<Evento />} />

      </Routes>
    
  );
}

export default App;
