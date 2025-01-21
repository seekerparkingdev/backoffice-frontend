import DataTable from "react-data-table-component";
import { NavLink } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { VenueConfigtable } from "./VenueConfigtable";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVenues } from "../../../services/ServiceVenues";

const VenueGrilla = () => {
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/venues/${row.id}`);
  };

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const venue = async () => {
      try {
        const response = await getVenues();
        if (response.status === "success") {
          setData(response.data.data);
          setFilteredData(response.data.data);
          setLoading(false);
        } else {
          setError("Hubo un problema con la respuesta del servidor.");
          setLoading(false);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    venue();
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query === "") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (venue) =>
          venue.nombre.toLowerCase().includes(query) ||
          venue.direccion.toLowerCase().includes(query)
      );
      setFilteredData(filtered);
    }
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <Titulo titulo="Venues" />
          <NavLink to="/venues/new">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Nuevo
            </button>
          </NavLink>
        </div>
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center p-4">Cargando venues...</div>
          ) : (
            <DataTable
              onRowClicked={handleRowClick}
              columns={VenueConfigtable(setData, setFilteredData)}
              data={filteredData}
              pagination
              highlightOnHover
              responsive
              subHeader
              subHeaderComponent={
                <input
                  type="text"
                  placeholder="Buscar por nombre o dirección..."
                  className="w-full p-2 border border-gray-300 rounded-md mt-0 mb-5"
                  value={searchQuery}
                  onChange={handleSearch}
                />
              }
              className="rounded-lg"
            />
          )}

          {error && <div className="text-center text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export { VenueGrilla };
