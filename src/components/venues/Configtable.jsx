import { NavLink } from "react-router-dom";
// Importacion de iconos
import { LuDelete } from "react-icons/lu";
import { BiEditAlt } from "react-icons/bi";
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
      cell: (row) => (
        <div className="flex justify-start">
          <button className="p-2">
            <LuDelete size={20} />
          </button>
          <NavLink to={`/venues/${row.id}`} className="p-2">
            <BiEditAlt size={20} />
          </NavLink>
        </div>
      ),
      
      headerStyle: {
        textAlign: "center",  
      },
    },
  ];


  export {Configtable}