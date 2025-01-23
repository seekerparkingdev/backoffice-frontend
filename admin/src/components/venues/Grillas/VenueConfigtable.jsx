import { NavLink } from "react-router-dom";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import Swal from "sweetalert2";
import { deleteVenue, toggleSuspend } from "../../../services/ServiceVenues";

const VenueConfigtable = (setData, setFilteredData) => [
  { name: "Nombre", selector: (row) => row.name, sortable: true },
  { name: "Dirección", selector: (row) => row.address, sortable: true },
  {
    name: "Capacidad Máxima",
    selector: (row) => row.max_capacity,
    sortable: true,
  },
  {
    name: "Acciones",
    cell: (row) => {
      const handleSuspend = async (id) => {
        try {
          const response = await toggleSuspend(id);
 
          setFilteredData((prevData) =>
            prevData.map((item) =>
              item.id === id ? { ...item, suspend: item.suspend === 1 ? 0 : 1 } : item
            )
          );

          Swal.fire({
            title: "Éxito",
            text: response.data || "Estado del venue actualizado correctamente.",
            icon: "success",
          });
        } catch (error) {
          console.error("Error al suspender el evento:", error);
          Swal.fire({
            title: "Error",
            text: error?.message || "Error desconocido al suspender el evento.",
            icon: "error",
          });
        }
      };

      const handleDelete = async (id) => {
        try {
          const response = await deleteVenue(id);
          if (response?.status === "deleted") {
            Swal.fire({
              title: "Eliminado",
              text:
                response.data || "El evento ha sido eliminado correctamente.",
              icon: "success",
            });

            // Actualizar el estado local
            setData((prevData) => prevData.filter((item) => item.id !== id));
            setFilteredData((prevFiltered) =>
              prevFiltered.filter((item) => item.id !== id)
            );
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
          {/* Botón Eliminar */}
          <button
            onClick={() => handleDelete(row.id)}
            className="text-red-500 hover:text-red-600"
          >
            <LuDelete size={20} />
          </button>

          {/* Botón Editar */}
          <NavLink
            to={`/venues/${row.id}`}
            className="text-blue-500 hover:text-blue-600"
          >
            <BiEditAlt size={20} />
          </NavLink>

          {/* Botón Activar/Desactivar */}
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
        </div>
      );
    },
  },
];

export { VenueConfigtable };