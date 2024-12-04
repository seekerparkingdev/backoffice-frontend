import { NavLink } from "react-router-dom";
// Importación de iconos
import { FaRegEye } from "react-icons/fa6";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
import { useState } from "react"; // Importar useState

const Configtable = [
  { name: "Nombre", selector: (row) => row.nombre, sortable: true },
  { name: "Dirección", selector: (row) => row.direccion, sortable: true },
  {
    name: "Capacidad Máxima",
    selector: (row) => row.capacidad,
    sortable: true,
  },
  {
    name: "Acciones",
    selector: (row) => row.accions,
    cell: (row) => {
      const [activOdisable, setActivOdisable] = useState(false); // Crear estado para controlar el icono

      const toggleActivOdisable = () => {
        setActivOdisable((prevState) => !prevState); // Alternar entre true y false hasta que tengamos un endpoint
      };

      return (
        <div className="flex justify-start">
          <button className="p-2">
            <LuDelete size={20} />
          </button>
          <NavLink to={`/venues/${row.id}`} className="p-2">
            <BiEditAlt size={20} />
          </NavLink>
          <button onClick={toggleActivOdisable} className="p-2">
            {activOdisable ? (
              <MdDesktopAccessDisabled size={20} />
            ) : (
              <MdOutlineDesktopWindows size={20} />
            )}
          </button>
          <NavLink to={`/venues/${row.id}/view`} className="p-2">
            <FaRegEye size={20} />
          </NavLink>
        </div>
      );
    },
    headerStyle: {
      textAlign: "center",
    },
  },
];

export { Configtable };
