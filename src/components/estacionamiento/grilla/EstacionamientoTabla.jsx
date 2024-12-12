import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
const EstacionamientoTabla = () => {
  const data = [
    {
      id: 1,
      nombre: "Movistar Arena Parking Oficial",
      direccion: "Fitz Roy 386, Villa Crespo",
      duenio: "Administracion Movistar Arena",
      codigo: "MOV",
    },
    {
      id: 2,
      nombre: "Concepción Arenal 3878",
      direccion: "Concepción Arenal 3878, Buenos Aires",
      duenio: "Mariano Silva",
      codigo: "ARENAL3878",
    },
    {
      id: 3,
      nombre: "Thames 539",
      direccion: "Thames 539, Buenos Aires",
      duenio: "Mariano Silva",
      codigo: "THAMES539",
    },
    {
      id: 4,
      nombre: "Av. Córdoba 4341",
      direccion: "Avenida Córdoba 4341, Buenos Aires",
      duenio: "Mariano Silva",
      codigo: "CORDOBA4341",
    },
    {
      id: 5,
      nombre: "Acevedo 468",
      direccion: "Acevedo 468, Buenos Aires",
      duenio: "Adrian Turek",
      codigo: "ACE",
    },
    {
      id: 6,
      nombre: "Parking Camargo 953",
      direccion: "Camargo 953, Buenos Aires",
      duenio: "Christian Kania",
      codigo: "CAMARGO953",
    },
  ];

  const columns = [
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "DIRECCION",
      selector: (row) => row.direccion,
      sortable: true,
    },
    {
      name: "DUEÑO",
      selector: (row) => row.duenio,
      sortable: true,
    },
    {
      name: "CODIGO",
      selector: (row) => row.codigo,
      sortable: true,
    },
    {
      name: "ACCIONES",
      cell: (row) => <ActionMenu row={row} />,
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const [filterText, setFilterText] = useState("");

  const filteredItems = data.filter(
    (item) =>
      item.nombre && item.nombre.toLowerCase().includes(filterText.toLowerCase())
  );
 const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/estacionamiento/${row.id}`);
  };
  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar..."
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <DataTable
        columns={columns}
        data={filteredItems}
        pagination
        highlightOnHover
        onRowClicked={handleRowClick}
        responsive
        customStyles={{
          table: {
            style: {
              border: "1px solid #e5e7eb",
            },
          },
          headCells: {
            style: {
              backgroundColor: "#f3f4f6",
              fontWeight: "bold",
            },
          },
        }}
      />
    </div>
  );
};

const ActionMenu = ({ row }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOption = (option) => {
    setIsOpen(false);
    alert(`Seleccionaste la opción "${option}" para ${row.nombre}`);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-1 text-sm text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Opciones
      </button>
      {isOpen && (
        <div className="absolute right-0 z-10 w-40 mt-2 bg-white border border-gray-200 rounded shadow-lg">
          <ul className="py-1">
            <li
              onClick={() => handleOption("Suspender")}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Suspender
            </li>
            <li
              onClick={() => handleOption("Eliminar")}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Eliminar
            </li>
            <li
              onClick={() => handleOption("Premio")}
              className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
            >
              Premio
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export  {EstacionamientoTabla};
