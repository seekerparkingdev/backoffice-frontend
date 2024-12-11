import React from "react";
import { ConfigColumns } from "./ConfigColumns";
import DataTable from "react-data-table-component";
import EventosFiltroForm from "../form/EventosFiltroForm";
import { NavLink, useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";

const data = [
  {
    id: 1,
    resumen: "Concierto de ROD STEWART en Nueva York",
    nombre: "ROD STEWART",
    fecha: "21:00 04/10/2023",
    venue: "Madison Square Garden, Nueva York",
  },
  {
    id: 2,
    resumen: "Show exclusivo de ULISES BUENO en Buenos Aires",
    nombre: "ULISES BUENO",
    fecha: "20:00 26/01/2024",
    venue: "Luna Park, Buenos Aires",
  },
  {
    id: 3,
    resumen: "COLDPLAY en su gira mundial por Londres",
    nombre: "COLDPLAY",
    fecha: "20:30 15/12/2024",
    venue: "Wembley Stadium, Londres",
  },
  {
    id: 4,
    resumen: "Set especial de NICK WARREN en Colorado",
    nombre: "NICK WARREN",
    fecha: "22:00 10/02/2024",
    venue: "Red Rocks Amphitheatre, Colorado",
  },
  {
    id: 5,
    resumen: "Festival de música en California con artistas top",
    nombre: "BIZARREN FESTIVAL",
    fecha: "20:30 01/03/2024",
    venue: "Coachella Valley, California",
  },
  {
    id: 6,
    resumen: "Techno live de Richie Hawtin en Berlín",
    nombre: "Richie Hawtin",
    fecha: "23:10 04/05/2024",
    venue: "Berghain, Berlín",
  },
];

const EventoGrilla = () => {
  const navigate = useNavigate();
  const handleRowClick = (row) => {
    navigate(`/eventos/${row.id}`);
  };
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="p-6 min-h-screen w-full max-w-7xl">
        <div className="flex items-center justify-between mb-5">
          <Titulo titulo={"Eventos"} className="text-xl font-bold" />
          <NavLink to="/eventos/new">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Nuevo
            </button>
          </NavLink>
        </div>

        <div className="w-full bg-white shadow-md p-4">
          {/* Filtro de eventos */}
          <div className="flex justify-start mb-6">
            <EventosFiltroForm />
          </div>

          {/* Tabla de eventos */}
          <div className="overflow-x-auto">
            <DataTable
              columns={ConfigColumns}
              data={data}
              pagination
              onRowClicked={handleRowClick}
              highlightOnHover
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventoGrilla;
