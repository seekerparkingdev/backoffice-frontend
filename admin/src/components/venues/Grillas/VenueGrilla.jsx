import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { VenueConfigtable } from "./VenueConfigtable";
import { datavenue } from "../../../utils/venues/datavenue";

const VenueGrilla = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full    border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <Titulo titulo="Venues" />
          <NavLink to="/venues/new">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Nuevo
            </button>
          </NavLink>
        </div>
        <div className="overflow-x-auto">
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
                className="w-full p-2 border border-gray-300 rounded-md mt-0 mb-5"
                onChange={(e) =>
                  console.log("Implementar filtro de búsqueda", e.target.value)
                }
              />
            }
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export { VenueGrilla };
