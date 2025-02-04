import { MdEmail } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { RiSurveyLine } from "react-icons/ri";
import Swal from "sweetalert2";
import {
  deleteEvento,
  toggleSuspendEvent,
} from "../../../services/ServiceEventos";

const ConfigColumns = (setData) => [
  {
    name: "Resumen",
    selector: (row) => row.resumen,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.date,
    sortable: true,
  },
  {
    name: "Venue",
    selector: (row) => row.venue,
    sortable: true,
  },
  {
    name: "Acciones",
    cell: (row) => {
      const handleSuspend = async (id) => {
        const result = await Swal.fire({
          title: "¿Estás seguro?",
          text: "Esto cambiará el estado del evento.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Sí, cambiar",
          cancelButtonText: "Cancelar",
        });

        if (!result.isConfirmed) return;

        try {
          const response = await toggleSuspendEvent(id);
          setData((prevData) =>
            prevData.map((item) =>
              item.id === id ? { ...item, suspend: item.suspend ? 0 : 1 } : item
            )
          );

          Swal.fire({
            title: "Éxito",
            text: response.data?.message || "Estado del evento actualizado.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al suspender el evento:", error);
          Swal.fire({
            title: "Error",
            text: error?.message || "Error desconocido.",
            icon: "error",
          });
        }
      };

      const handleDelete = async (id) => {
        try {
          const response = await deleteEvento(id);
          if (response?.status === "success") {
            Swal.fire({
              title: "Eliminado",
              text:
                response.data || "El evento ha sido eliminado correctamente.",
              icon: "success",
            });

            // Actualiza la lista de eventos después de la eliminación
            setData((prevData) => prevData.filter((item) => item.id !== id));
          } else {
            Swal.fire({
              title: "Error",
              text: "No se pudo eliminar el evento. Intenta de nuevo.",
              icon: "error",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Error",
            text: error?.message || "Error desconocido al eliminar el evento.",
            icon: "error",
          });
          console.error("Error al eliminar el evento:", error);
        }
      };

      return (
        <div className="flex items-center gap-2">
          {/* Botón Email */}
          <button className="text-blue-500 hover:text-blue-700">
            <MdEmail size={20} />
          </button>

          {/* Botón Tilde */}
          <button
            onClick={() => handleSuspend(row.id)}
            className={`${
              row.suspend === 1
                ? "text-gray-500 hover:text-gray-600"
                : "text-green-500 hover:text-green-600"
            }`}
          >
            {row.suspend === 1 ? (
              <MdDesktopAccessDisabled size={20} />
            ) : (
              <MdOutlineDesktopWindows size={20} />
            )}
          </button>

          {/* Botón Encuesta */}
          <button className="text-yellow-500 hover:text-yellow-700">
            <RiSurveyLine size={20} />
          </button>

          {/* Botón Eliminar */}
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-500 hover:text-red-700"
          >
            <TiDelete size={20} />
          </button>
        </div>
      );
    },
  },
];

export { ConfigColumns };
