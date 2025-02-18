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
  console.log(filteredData);
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
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#F3F3F3",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center",
        borderBottom: "2px solid #E0E0E0",
      },
    },
    headCells: {
      style: {
        textAlign: "center",
        color: "#333",
        fontWeight: "bold",
        padding: "16px",
      },
    },
    cells: {
      style: {
        padding: "16px",
        borderBottom: "1px solid #E0E0E0",
      },
    },
    rows: {
      style: {
        backgroundColor: "white",
        "&:not(:last-of-type)": {
          borderBottom: "1px solid #E0E0E0",
        },
      },
      stripedStyle: {
        backgroundColor: "#F8F9FA",
      },
    },
    table: {
      style: {
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
      },
    },
  };
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="w-full">
        <div className=" mt-2  mb-4 border-b-2  border-[#9CA3AF] ">
          <h1 className="text-3xl font-bold mb-6">Venues</h1>
        </div>
        <div className="  border border-gray-300 rounded-lg p-6 bg-white shadow-sm">
          <div className="flex justify-end items-center mb-10 ">
            <NavLink to="/venues/new">
              <button className="px-6 py-2 bg-[#61B4CE] text-white rounded-lg  font-semibold ">
                + Nuevo venue
              </button>
            </NavLink>
          </div>
          <div>
            <input
              type="search"
              placeholder="Buscar por nombre o dirección..."
              className="border border-gray-300 rounded-md w-full p-"
              value={searchQuery}
              onChange={handleSearch}
            />
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
                customStyles={customStyles}
                highlightOnHover
                responsive
                subHeader
                className="rounded-lg"
              />
            )}

            {error && <div className="text-center text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export { VenueGrilla };
