import "./css/style.css";
import "./charts/ChartjsConfig";
import React from "react";
import { Routes, Route } from "react-router-dom";
// IMPORTACION DE VISTAS
import Venue from "./views/venues/venue";
import VenueEdit from "./views/venues/venueEdit";

function App() {
  return (
    <Routes>
      <Route path="/venues" element={<Venue />} />
      <Route path="/venues/:id/:view?" element={<VenueEdit />} />
    </Routes>
  );
}

export default App;
