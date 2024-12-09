import DataTable from "react-data-table-component";
import { VenueConfigtable } from "./VenueConfigtable";
import { datavenue } from "../../../utils/venues/datavenue";
const VenueGrilla = () => {
  return (
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
  );
};

export { VenueGrilla };
