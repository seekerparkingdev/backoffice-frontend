import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { LuDelete } from "react-icons/lu";
import { MdDesktopAccessDisabled } from "react-icons/md";
import { MdOutlineDesktopWindows } from "react-icons/md";

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
      name: "Acciones",
      cell: (row) => {
        const [activOdisable, setActivOdisable] = useState(false);

        const toggleActivOdisable = () => {
          setActivOdisable((prevState) => !prevState);
        };

        return (
          <div className="flex items-center gap-2">
            {/* Botón para Activar/Desactivar */}
            <button
              onClick={() => toggleActivOdisable(row.id)}
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
            {/* Botón Eliminar */}
            <button
              onClick={() => console.log("Eliminar registro:", row)}
              className="text-red-500 hover:text-red-600"
            >
              <LuDelete size={20} />
            </button>
          </div>
        );
      },
    },
  ];

  const [filterText, setFilterText] = useState("");
  const filteredItems = data.filter(
    (item) =>
      item.nombre &&
      item.nombre.toLowerCase().includes(filterText.toLowerCase())
  );

  const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/estacionamiento/${row.id}`);
  };

  return (
    <div className="flex justify-center  min-h-screen">
      <div className="p-6 min-h-screen w-full">
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-5">
            <Titulo titulo={"Estacionamientos"} className="text-xl font-bold" />
            <button
              onClick={() => navigate("/estacionamiento/new")}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Nuevo
            </button>
          </div>

          <div className="mb-6">
            <input
              type="text"
              placeholder="Buscar..."
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="overflow-x-auto">
            <DataTable
              columns={columns}
              data={filteredItems}
              pagination
              highlightOnHover
              onRowClicked={handleRowClick}
              responsive
              customStyles={{
                headCells: {
                  style: {
                    backgroundColor: "#f7fafc",
                    fontWeight: "bold",
                    color: "#4A5568",
                    padding: "12px",
                  },
                },
                cells: {
                  style: {
                    padding: "12px",
                    textAlign: "center",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { EstacionamientoTabla };
