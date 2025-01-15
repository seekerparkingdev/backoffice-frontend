import { NavLink } from "react-router-dom";
// Importación de iconos
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react";

const VenueConfigtable = [
  { name: "Nombre", selector: (row) => row.nombre, sortable: true },
  { name: "Dirección", selector: (row) => row.direccion, sortable: true },
  {
    name: "Capacidad Máxima",
    selector: (row) => row.capacidad_maxima,
    sortable: true,
  },
  {
    name: "Acciones",
    cell: (row) => {
      const [activOdisable, setActivOdisable] = useState(false);

      const toggleActivOdisable = () => {
        setActivOdisable((prevState) => !prevState);
      };

      return (
        <div className="flex items-center gap-2">
          {/* Botón Eliminar */}
          <button
            onClick={() => console.log("Eliminar registro:", row)}
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
            onClick={toggleActivOdisable}
            className={`${
              activOdisable
                ? "text-gray-500 hover:text-gray-600"
                : "text-green-500 hover:text-green-600"
            }`}
          >
            {activOdisable ? (
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
