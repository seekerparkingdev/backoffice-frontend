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
    cell: () => <button>Editar</button>,
  },
];

export  {ConfigColumns}