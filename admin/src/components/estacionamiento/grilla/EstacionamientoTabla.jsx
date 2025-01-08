import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { getEstacionamiento } from "../../../services/ServiceEstacionamiento";
import { FaLocationDot } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";

const EstacionamientoTabla = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [estadoActivacion, setEstadoActivacion] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerEstacionamientos = async () => {
      try {
        setIsLoading(true);
        const response = await getEstacionamiento();
        setData(response);
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

  const columns = [
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
      sortable: true,
      cell: (row) => (
        <div
          className={`${
            estadoActivacion[row.id] && row.activo !== false
              ? "text-red-500"
              : "text-gray-800"
          }`}
        >
          {row.nombre}
        </div>
      ),
    },
    {
      name: "DIRECCION",
      selector: (row) => row.direccion,
      sortable: true,
      cell: (row) => (
        <div
          className={`${
            estadoActivacion[row.id] && row.activo !== false
              ? "text-red-500"
              : "text-gray-800"
          }`}
        >
          {row.direccion}
        </div>
      ),
    },
    {
      name: "CÓDIGO",
      selector: (row) => row.codigo,
      sortable: true,
      cell: (row) => (
        <div
          className={`${
            estadoActivacion[row.id] && row.activo !== false
              ? "text-red-500"
              : "text-gray-800"
          }`}
        >
          {row.codigo}
        </div>
      ),
    },
    {
      name: "ACTIVO",
      selector: (row) => (row.activo ? "Sí" : "No"),
      sortable: true,
      cell: (row) => (
        <div
          className={`${
            estadoActivacion[row.id] ? "text-red-500" : "text-gray-800"
          }`}
        >
          {row.activo ? "Sí" : "No"}
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => {
        const toggleActivOdisable = () => {
          setEstadoActivacion((prevState) => ({
            ...prevState,
            [row.id]: !prevState[row.id],
          }));
        };

        return (
          <div className="flex items-center gap-2">
            {/* Botón para Activar/Desactivar */}
            <button
              onClick={toggleActivOdisable}
              className={`${
                estadoActivacion[row.id]
                  ? "text-red-500 hover:text-red-600"
                  : "text-green-500 hover:text-green-600"
              }`}
            >
              {estadoActivacion[row.id] ? (
                <MdDesktopAccessDisabled size={20} />
              ) : (
                <MdOutlineDesktopWindows size={20} />
              )}
            </button>

            {/* Botón Eliminar */}
            <button
              onClick={() => console.log("Eliminar registro:", row)}
              className="text-red-500 hover:text-red-600"
            >
              <LuDelete size={20} />
            </button>

            {/* Botón Ubicación */}
            <a
              href={row.url_ubicacion}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <FaLocationDot size={20} />
            </a>
          </div>
        );
      },
    },
  ];

  const handleRowClick = (row) => {
    navigate(`/estacionamiento/${row.id}`);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="p-6 min-h-screen w-full">
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
