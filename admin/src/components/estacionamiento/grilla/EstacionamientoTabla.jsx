import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import {
  getEstacionamiento,
  patchDisabledEnableEstacionamiento,
  deleteEstacionamiento,
} from "../../../services/ServiceEstacionamiento";
import { FaLocationDot } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import {
  MdDesktopAccessDisabled,
  MdOutlineDesktopWindows,
} from "react-icons/md";
import Swal from "sweetalert2";

const EstacionamientoTabla = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const obtenerEstacionamientos = async () => {
      if (data.length > 0) return;
      try {
        setIsLoading(true);
        const response = await getEstacionamiento();
        console.log(response);
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
  }, [isLoading]);
  const handleDelete = async (id) => {
    try {
      const response = await deleteEstacionamiento(id);

      if (response?.status === "success") {
        Swal.fire({
          title: "Eliminado",
          text: "El estacionamiento ha sido eliminado correctamente.",
          icon: "success",
          confirmButtonText: "Aceptar",
        });
      } else if (response?.status === 404) {
        Swal.fire({
          title: "No encontrado",
          text: "El estacionamiento no fue encontrado. Es posible que ya haya sido eliminado.",
          icon: "warning",
          confirmButtonText: "Aceptar",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: `Hubo un error al eliminar el estacionamiento. Código de error: ${
            response?.status || "desconocido"
          }`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }

      const newData = await getEstacionamiento();
      setData(newData);
    } catch (error) {
      console.error("Error al eliminar el estacionamiento:", error);

      Swal.fire({
        title: "Error",
        text: "Ocurrió un error inesperado al intentar eliminar el estacionamiento.",
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };
  const handleDisableEnable = async (row) => {
    try {
      let respuesta;

      if (row.active === 1) {
        respuesta = await patchDisabledEnableEstacionamiento(row.id);
        if (respuesta.status === "success") {
          Swal.fire({
            title: "Desactivado",
            text: "El estacionamiento ha sido desactivado correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        }
      } else {
        respuesta = await patchDisabledEnableEstacionamiento(row.id);
        if (respuesta.status === "success") {
          Swal.fire({
            title: "Activado",
            text: "El estacionamiento ha sido activado correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        }
      }

      const newData = await getEstacionamiento();

      setData(newData);
    } catch (error) {
      console.error("Error al cambiar el estado del estacionamiento:", error);
      Swal.fire({
        title: "Error",
        text: `Ocurrió un error al cambiar el estado del estacionamiento. Detalles: ${error.message}`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
    }
  };

  const columns = [
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
      sortable: true,
      cell: (row) => (
        <div
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
        >
          {row.name}
        </div>
      ),
    },
    {
      name: "DIRECCION",
      selector: (row) => row.address,
      sortable: true,
      cell: (row) => (
        <div
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
        >
          {row.address}
        </div>
      ),
    },
    {
      name: "CÓDIGO",
      selector: (row) => row.code,
      sortable: true,
      cell: (row) => (
        <div
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
        >
          {row.code}
        </div>
      ),
    },
    {
      name: "ACTIVO",
      selector: (row) => (row.active ? "Sí" : "No"),
      sortable: true,
      cell: (row) => (
        <div
          className={`${row.active === 0 ? "text-red-500" : "text-gray-800"}`}
        >
          {row.active ? "Sí" : "No"}
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex items-center gap-2">
          {/* Botón para Activar/Desactivar */}
          <button
            onClick={() => handleDisableEnable(row)}
            className={`${
              row.active === 0
                ? "text-gray-500 hover:gray-red-800"
                : "text-green-500 hover:text-green-600"
            }`}
          >
            {row.active === 1 ? (
              <MdOutlineDesktopWindows size={20} />
            ) : (
              <MdDesktopAccessDisabled size={20} />
            )}
          </button>

          {/* Botón Eliminar */}
          <button
            onClick={() => handleDelete(row.id)}
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
      ),
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
