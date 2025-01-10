import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import {
  getEstacionamiento,
  patchDisabledEstacionamiento,
  deleteEstacionamiento,
} from "../../../services/ServiceEstacionamiento";
import { FaLocationDot } from "react-icons/fa6";
import { LuDelete } from "react-icons/lu";
import {
  MdDesktopAccessDisabled,
  MdOutlineDesktopWindows,
} from "react-icons/md";

import Swal from "sweetalert2"; // Importa SweetAlert2

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
  const handleDisable = async (row) => {
    try {
      let respuesta;

      if (row.activo === 1) {
        respuesta = await patchDisabledEstacionamiento(row.id);
        if (respuesta.status === 200) {
          // Usando SweetAlert para mostrar la alerta
          Swal.fire({
            title: "Desactivado",
            text: "El estacionamiento ha sido desactivado correctamente.",
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        }
      } else {
        //ACA HAY QUE CREAR UN IF PARA PODER ACTIVARLO SI DESEA NUEVAMENTE
        Swal.fire({
          title: "Error",
          text: `Hubo un error al desactivar el estacionamiento. Código de error: ${respuesta?.status}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }

      const newData = await getEstacionamiento();
      setData(newData);
    } catch (error) {
      console.error("Error al cambiar el estado del estacionamiento:", error);
      Swal.fire({
        title: "Error",
        text: "Ocurrió un error al cambiar el estado del estacionamiento.",
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
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
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
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
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
          className={`${row.activo === 0 ? "text-red-500" : "text-gray-800"}`}
        >
          {row.activo ? "Sí" : "No"}
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <div className="flex items-center gap-2">
          {/* Botón para Activar/Desactivar */}
          <button
            onClick={() => handleDisable(row)}
            className={`${
              row.activo === 0
                ? "text-gray-500 hover:gray-red-800"
                : "text-green-500 hover:text-green-600"
            }`}
          >
            {row.activo === 1 ? (
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
