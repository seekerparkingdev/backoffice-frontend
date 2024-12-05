import React from "react";
import lan from "../../language/es.js";
import DataTable from "react-data-table-component";
import { Titulo } from "../../components/Titulo";
import { NavLink } from "react-router-dom";
// Configuración de columnas
import { VenueConfigtable } from "../../components/venues/VenueConfigtable";
// Dato ficticio
import { datavenue } from "../../utils/venues/datavenue";



const TablaEventoPage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <Titulo titulo={lan.eventos.title} />
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          
          <NavLink to={`/evento/new`} className="p-2">
          {lan.eventos.subtitleNewEvent}
          </NavLink>
          </button>
        </div>

        <DataTable
          columns={VenueConfigtable}
          data={datavenue}
          pagination
          highlightOnHover
          responsive
          subHeader
          subHeaderComponent={
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full p-2 border border-gray-300 rounded-md"
              onChange={(e) =>
                console.log("Implementar filtro de búsqueda", e.target.value)
              }
            />
          }
        />
      </div>
    </div>
  );
};

export { TablaEventoPage };
