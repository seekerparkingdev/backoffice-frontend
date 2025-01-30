import React, { useState } from "react";
import { ConfigColumns } from "./ConfigColumns";
import DataTable from "react-data-table-component";
import { NavLink, useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    plazas: {
      total: 100,
      vendidas: 5,
    },
    nombre: "ROD STEWART",
    fecha: "21:00 04/10/2023",
    venue: "Madison Square Garden, Nueva York",
  },
  {
    id: 2,
    plazas: {
      total: 100,
      vendidas: 52,
    },
    nombre: "ULISES BUENO",
    fecha: "20:00 26/01/2024",
    venue: "Luna Park, Buenos Aires",
  },
  {
    id: 3,
    plazas: {
      total: 100,
      vendidas: 45,
    },
    nombre: "COLDPLAY",
    fecha: "20:30 15/12/2024",
    venue: "Wembley Stadium, Londres",
  },
  {
    id: 4,
    plazas: {
      total: 100,
      vendidas: 25,
    },
    nombre: "NICK WARREN",
    fecha: "22:00 10/02/2024",
    venue: "Red Rocks Amphitheatre, Colorado",
  },
  {
    id: 5,
    plazas: {
      total: 100,
      vendidas: 75,
    },
    nombre: "BIZARREN FESTIVAL",
    fecha: "20:30 01/03/2024",
    venue: "Coachella Valley, California",
  },
  {
    id: 6,
    plazas: {
      total: 100,
      vendidas: 95,
    },
    nombre: "Richie Hawtin",
    fecha: "23:10 04/05/2024",
    venue: "Berghain, Berlín",
  },
];

const EventoGrilla = () => {
  const [nombreEvento, setNombreEvento] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [venue, setVenue] = useState("");
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/eventos/${row.id}`);
  };

  const handleFiltrar = () => {
    Swal.fire({
      title: "Filtros Aplicados",
      html: `
          <p><strong>Nombre:</strong> ${nombreEvento || "No especificado"}</p>
          <p><strong>Fecha Desde:</strong> ${
            fechaDesde || "No especificada"
          }</p>
          <p><strong>Fecha Hasta:</strong> ${
            fechaHasta || "No especificada"
          }</p>
          <p><strong>Venue:</strong> ${venue || "No especificado"}</p>
        `,
      icon: "info",
      confirmButtonText: "Aceptar",
    });
  };

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#F3F3F3",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center",
        borderBottom: "2px solid #E0E0E0",
      },
    },
    headCells: {
      style: {
        textAlign: "center",
        color: "#333",
        fontWeight: "bold",
        padding: "16px",
      },
    },
    cells: {
      style: {
        padding: "16px",
        borderBottom: "1px solid #E0E0E0",
      },
    },
    rows: {
      style: {
        backgroundColor: "white",
        "&:not(:last-of-type)": {
          borderBottom: "1px solid #E0E0E0",
        },
      },
      stripedStyle: {
        backgroundColor: "#F8F9FA",
      },
    },
    table: {
      style: {
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
      },
    },
  };

  return (
    <div className="flex justify-center  bg-gray-100">
      <div className="p-6 min-h-screen w-full  ">
        <div className="mb-6 border-b-2 border-gray-200">
          <h1 className="text-3xl mb-3 mt-3  font-bold py-5">Eventos</h1>
        </div>
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-end ">
            <NavLink to="/eventos/new">
              <button className="px-4 py-2 bg-[#61B4CE] text-white rounded-lg  ">
                + Nuevo evento
              </button>
            </NavLink>
          </div>
          {/* Filtros */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 mb-6 mt-6">
            <div className="flex flex-col">
              <input
                type="text"
                className="p-2 border rounded-lg"
                placeholder="Buscar evento"
                value={nombreEvento}
                onChange={(e) => setNombreEvento(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <input
                type="date"
                className="p-2 border rounded-lg"
                placeholder="Fecha desde"
                value={fechaDesde}
                onChange={(e) => setFechaDesde(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <input
                type="date"
                placeholder="Fecha hasta"
                className="p-2 border rounded-lg"
                value={fechaHasta}
                onChange={(e) => setFechaHasta(e.target.value)}
              />
            </div>

            <div className="flex flex-col">
              <select
                placeholder="Venue"
                className="p-2 border rounded-lg"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              >
                <option value="">Venue</option>
                <option value="Madison Square Garden, Nueva York">
                  Madison Square Garden, Nueva York
                </option>
              </select>
            </div>

            <div className="flex flex-col">
              <select
                className="p-2 border rounded-lg"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
              >
                <option value="">Filtrar por fecha</option>
              </select>
            </div>
          </div>

          <div className="overflow-x-auto">
            <DataTable
              columns={ConfigColumns}
              data={data}
              pagination
              onRowClicked={handleRowClick}
              highlightOnHover
              className="rounded-lg"
              customStyles={customStyles}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoGrilla;
