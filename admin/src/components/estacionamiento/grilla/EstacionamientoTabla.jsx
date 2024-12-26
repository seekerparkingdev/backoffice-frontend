import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { getEstacionamiento } from "../../../services/ServiceEstacionamiento";

const EstacionamientoTabla = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterText, setFilterText] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const obtenerEstacionamientos = async () => {
      try {
        setIsLoading(true);
        const response = await getEstacionamiento();

        setData(response || []);
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
      cell: (row) => <ActionMenu row={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];
  console.log(data);
  const filteredItems = data?.filter((item) => {
    const searchText = filterText.toLowerCase();
    return (
      (item.nombre?.toLowerCase().includes(searchText) ?? false) ||
      (item.direccion?.toLowerCase().includes(searchText) ?? false) ||
      (item.codigo?.toLowerCase().includes(searchText) ?? false)
    );
  });

  const handleRowClick = (row) => {
    navigate(`/estacionamiento/${row.id}`);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg">Cargando estacionamientos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

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
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={filteredItems}
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
                <div className="p-4">No se encontraron estacionamientos</div>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ActionMenu = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (option) => {
    setIsOpen(false);
    // Aquí puedes implementar la lógica real para cada acción
    switch (option) {
      case "Suspender":
        console.log("Suspender estacionamiento:", row.id);
        break;
      case "Eliminar":
        console.log("Eliminar estacionamiento:", row.id);
        break;
      case "Premio":
        console.log("Premio para estacionamiento:", row.id);
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative">
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300"
      >
        Opciones
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
          <ul className="py-1">
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleOption("Suspender");
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Suspender
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleOption("Eliminar");
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Eliminar
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                handleOption("Premio");
              }}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Premio
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export { EstacionamientoTabla };
