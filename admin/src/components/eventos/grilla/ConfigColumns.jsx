import { MdEmail } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";
import { RiSurveyLine } from "react-icons/ri";

const ConfigColumns = [
  {
    name: "Resumen",
    selector: (row) => row.resumen,
    sortable: true,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
    sortable: true,
  },
  {
    name: "Fecha",
    selector: (row) => row.fecha,
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
        {/* Botón Email */}
        <button
          onClick={() => console.log("Enviar email a:", row)}
          className="text-blue-500 hover:text-blue-700"
        >
          <MdEmail size={20} />
        </button>

        {/* Botón Tilde */}
        <button
          onClick={() => console.log("Marcar como completado:", row)}
          className="text-green-500 hover:text-green-700"
        >
          <AiOutlineCheck size={20} />
        </button>

        {/* Botón Encuesta */}
        <button
          onClick={() => console.log("Abrir encuesta para:", row)}
          className="text-yellow-500 hover:text-yellow-700"
        >
          <RiSurveyLine size={20} />
        </button>

        {/* Botón Eliminar */}
        <button
          onClick={() => console.log("Eliminar registro:", row)}
          className="text-red-500 hover:text-red-700"
        >
          <TiDelete size={20} />
        </button>
      </div>
    ),
  },
];

export { ConfigColumns };
