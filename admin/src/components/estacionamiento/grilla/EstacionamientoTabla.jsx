import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { getEstacionamiento } from "../../../services/ServiceEstacionamiento";
 
const EstacionamientoTabla = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerEstacionamientos = async () => {
      try {
        setIsLoading(true);
        const response = await getEstacionamiento();
        setData(response );
        setError(null);
      } catch (error) {
        console.error("Error detallado:", error);
        setError("Error al cargar los estacionamientos");
      } finally {
        setIsLoading(false);
      }
    };
    obtenerEstacionamientos();
  }, []);
  
  console.log(data)

  const columns = [
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "DIRECCION",
      selector: (row) => row.direccion,
      sortable: true,
    },
    {
      name: "CÓDIGO",
      selector: (row) => row.codigo,
      sortable: true,
    },
    {
      name: "ACTIVO",
      selector: (row) => (row.activo ? "Sí" : "No"),
      sortable: true,
    },
    {
      name: "ACCIONES",
      cell: (row) => (
        <div className="flex space-x-2">
          <button
            onClick={() => navigate(`/estacionamiento/${row.id}`)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Ver
          </button>
          <button
            onClick={() => alert("Editar")}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Editar
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      name: "UBICACIÓN",
      cell: (row) => (
        <a
          href={row.url_ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          Ver ubicación
        </a>
      ),
      ignoreRowClick: true,
      button: true,
    },
  ];

  const handleRowClick = (row) => {
    navigate(`/estacionamiento/${row.id}`);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-6 min-h-screen w-full lg:w-3/5 max-w-7xl">
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <Titulo titulo="Estacionamientos" className="text-xl font-bold" />
            <button
              onClick={() => navigate("/estacionamiento/new")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Nuevo
            </button>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar por nombre, dirección o código..."
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={data}
              pagination
              highlightOnHover
              onRowClicked={handleRowClick}
              responsive
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "#f7fafc",
                    fontWeight: "bold",
                    color: "#4A5568",
                    padding: "12px",
                  },
                },
                cells: {
                  style: {
                    padding: "12px",
                    textAlign: "center",
                  },
                },
              }}
              noDataComponent={
                isLoading ? (
                  <div className="p-4">Cargando...</div>
                ) : error ? (
                  <div className="p-4">{error}</div>
                ) : (
                  <div className="p-4">No se encontraron estacionamientos</div>
                )
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { EstacionamientoTabla };
