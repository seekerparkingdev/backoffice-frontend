import DataTable from "react-data-table-component";
import { MdOutlineNoteAdd } from "react-icons/md";
import { useParams } from "react-router-dom";
import VenueNav from "../VenueNav";
const EventVenues = () => {
  const { id } = useParams();
  // Datos de la tabla
  const data = [
    { id: 1, estado: "Finalizado", nombre: "Carl Cox - Hybrid Set", fecha: "10/03/2024 - 18:00" },
    { id: 2, estado: "Finalizado", nombre: "Campeonato Argentino de TC2000", fecha: "10/03/2024 - 18:00" },
    { id: 3, estado: "Finalizado", nombre: "New Balance 15k Buenos Aires", fecha: "10/03/2024 - 18:00" },
    { id: 4, estado: "Finalizado", nombre: "X - Future", fecha: "10/03/2024 - 18:00" },
    { id: 5, estado: "Próximo", nombre: "Six Sex", fecha: "10/03/2024 - 18:00" },
    { id: 6, estado: "Próximo", nombre: "The Chemical Brothers", fecha: "10/03/2024 - 18:00" },
    { id: 7, estado: "Próximo", nombre: "John Digweed & Sasha", fecha: "10/03/2024 - 18:00" },
    { id: 8, estado: "Próximo", nombre: "Monolink", fecha: "10/03/2024 - 18:00" },
    { id: 9, estado: "Próximo", nombre: "Nwo by Mathame", fecha: "10/03/2024 - 18:00" },
  ];

  // Definición de columnas
  const columns = [
    {
      name: "Estado",
      selector: (row) => row.estado,
      cell: (row) => (
        <span className={`px-3 py-1 rounded-full  text-sm font-medium ${row.estado === "Finalizado" ? "bg-red-200 text-red-600"  : "bg-yellow-200 text-yellow-600"}`}>
          {row.estado}
        </span>
      ),
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Fecha y Hora",
      selector: (row) => row.fecha,
      sortable: true,
    },
    {
      name: "Opciones",
      cell: () => (
        <button className="font-medium transition-colors duration-200 flex items-center gap-2">
          <MdOutlineNoteAdd size={30} />
          <span>Información Adicional</span>
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headRow: { style: { backgroundColor: "#F3F3F3", fontWeight: "bold", fontSize: "16px", textAlign: "center", borderBottom: "2px solid #9CA3AF" } },
    headCells: { style: { textAlign: "center", color: "#4A5456", fontWeight: "bold", padding: "16px" } },
    cells: { style: { padding: "16px", borderBottom: "1px solid #9CA3AF" } },
    rows: { style: { backgroundColor: "white", "&:not(:last-of-type)": { borderBottom: "1px solid #E0E0E0" } } , stripedStyle: { backgroundColor: "#F8F9FA" } },
    table: { style: { border: "1px solid #9CA3AF", borderRadius: "8px" } },
  };

  return (
    <div className="mt-10 max-w-9xl mx-auto">
      <div className="border-b-2 mb-4">
        <h1 className="mb-5 font-bold text-2xl">Venues</h1>
      </div>
      <VenueNav id={id}/>
      <div className="bg-white p-10">
         
        <DataTable customStyles={customStyles} columns={columns} data={data} pagination highlightOnHover responsive striped />
      </div>
    </div>
  );
};

export { EventVenues };
