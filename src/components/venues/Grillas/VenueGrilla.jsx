import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { VenueConfigtable } from "./VenueConfigtable";
import { datavenue } from "../../../utils/venues/datavenue";
const VenueGrilla = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="p-6 min-h-screen w-full max-w-7xl">
        <div className="flex justify-between items-center mb-4">
          <Titulo titulo="Venues" />
          <NavLink to="/venues/new">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Nuevo
            </button>
          </NavLink>
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
              className="w-full p-2 border border-gray-300 rounded-md mt-10 mb-5"
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

export { VenueGrilla };
