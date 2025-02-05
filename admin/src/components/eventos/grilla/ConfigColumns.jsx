import { CgMail } from "react-icons/cg";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { LuSendHorizontal } from "react-icons/lu";
import Swal from "sweetalert2";
import {
  deleteEvento,
  toggleSuspendEvent,
} from "../../../services/ServiceEventos";

const ConfigColumns = (setData) => [
  { name: "Fecha del evento", selector: (row) => row.datetime, sortable: true },
  {
    name: "Nombre del evento",
    selector: (row) => row.name,
    sortable: true,
    cell: (row) => <span className="text-black font-medium">{row.name}</span>,
  },
  {
    name: "Vendidas",
    cell: (row) => {
      console.log(row);

      // Verificamos si hay estacionamientos y tipos de spots disponibles
      const totalSpots = row.parkings?.[0]?.spot_quantity || 0;
      const soldSpots =
        row.parkings?.[0]?.spot_types?.reduce(
          (acc, spot) => acc + (spot.quantity || 0),
          0
        ) || 0;

      const percentage = totalSpots > 0 ? (soldSpots / totalSpots) * 100 : 0;

      return (
        <div className="w-32">
          <p className="text-sm font-medium text-gray-700">
            {soldSpots}/{totalSpots}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#76D8FF] h-2 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      );
    },
    sortable: true,
  },

  {
    name: "Venue",
    selector: (row) => row.venue?.name || "Sin información",
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
          <button
            onClick={() => console.log("Enviar email a:", row)}
            className="text-[#191919] "
          >
            <CgMail size={15} />
          </button>
          {/* Botón Marcar como completado */}
          <button className="text-[#191919] ">
            <HiOutlineDuplicate size={15} />
          </button>

          {/* Botón Suspender */}
          {/* Botón Suspender / Habilitar */}
          <button
            onClick={() => handleSuspend(row.id)}
            className={`text-[${row.suspend ? "#D9534F" : "#1849D6"}]`} // Rojo si suspendido, azul si activo
            title={row.suspend ? "Habilitar evento" : "Suspender evento"}
          >
            {row.suspend ? (
              <AiOutlineCheck size={15} />
            ) : (
              <AiOutlineCheck size={15} />
            )}
          </button>

          {/* Botón Encuesta */}
          <button
            onClick={() => console.log("Abrir encuesta para:", row)}
            className="text-[#191919 -rotate-90"
          >
            <LuSendHorizontal size={15} />
          </button>
          {/* Botón Eliminar */}
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-600  "
          >
            <RiDeleteBinLine size={15} />
          </button>
        </div>
      );
    },
  },
];

export { ConfigColumns };
