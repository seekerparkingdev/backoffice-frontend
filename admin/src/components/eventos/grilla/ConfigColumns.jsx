import { CgMail } from "react-icons/cg";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineCheck } from "react-icons/ai";
import { LuSendHorizontal } from "react-icons/lu";

const ConfigColumns = [
  { name: "Fecha del evento", selector: (row) => row.fecha, sortable: true },
  {
    name: "Nombre del evento",
    selector: (row) => row.nombre,
    sortable: true,
    cell: (row) => <span className="text-black font-medium">{row.nombre}</span>,
  },
  {
    name: "Vendidas",
    cell: (row) => (
      <div className="w-32">
        <p className="text-sm font-medium text-gray-700  ">
          {row.plazas.vendidas}/{row.plazas.total}
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#76D8FF] h-2 rounded-full"
            style={{
              width: `${(row.plazas.vendidas / row.plazas.total) * 100}%`,
            }}
          ></div>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "Venue",
    selector: (row) => row.venue,
    sortable: true,
  },
  {
    name: "Acciones",
    cell: (row) => (
      <div className="flex items-center gap-2">
        {/*Boton de duplicar */}
        <button className="text-[#191919] ">
          <HiOutlineDuplicate size={15} />
        </button>

        {/* Botón Email */}
        <button
          onClick={() => console.log("Enviar email a:", row)}
          className="text-[#191919] "
        >
          <CgMail size={15} />
        </button>

        {/* Botón Tilde */}
        <button
          onClick={() => console.log("Marcar como completado:", row)}
          className="text-[#1849D6] "
        >
          <AiOutlineCheck size={15} />
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
          onClick={() => console.log("Eliminar registro:", row)}
          className="text-red-600  "
        >
          <RiDeleteBinLine size={15} />
        </button>
      </div>
    ),
  },
];

export { ConfigColumns };
