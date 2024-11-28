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

// IMPORTACION DE LAS VIEW PARA LAS RUTAS
 
function App() {
  return (
     
      <Routes>
        <Route path="/venues" element={<Venue />} />
        <Route path="/venues/:id" element={<VenueEdit />} />

      </Routes>
    
  );
}

export default App;
