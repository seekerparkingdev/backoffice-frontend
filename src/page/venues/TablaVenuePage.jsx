import React from "react";

import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { Titulo } from "../../components/Titulo";
// Configuración de columnas
import { Configtable } from "../../components/venues/Configtable";
// Dato ficticio
import { datavenue } from "../../utils/venues/datavenue";
const TablaVenuePage = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <Titulo titulo="Venues" />
          <NavLink to="/venues/new">

          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Nuevo
          </button>
          </NavLink>
        </div>

        <DataTable
          columns={Configtable}
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

export { TablaVenuePage };
