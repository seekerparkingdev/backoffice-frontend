import React from "react";
import { ConfigColumns } from "./ConfigColumns";
import DataTable from "react-data-table-component";
import EventosFiltroForm from "./EventosFiltroForm";
import { Titulo } from "../../Titulo";

const data = [
  {
    resumen: "Concierto de ROD STEWART en Nueva York",
    nombre: "ROD STEWART",
    fecha: "21:00 04/10/2023",
    venue: "Madison Square Garden, Nueva York",
  },
  {
    resumen: "Show exclusivo de ULISES BUENO en Buenos Aires",
    nombre: "ULISES BUENO",
    fecha: "20:00 26/01/2024",
    venue: "Luna Park, Buenos Aires",
  },
  {
    resumen: "COLDPLAY en su gira mundial por Londres",
    nombre: "COLDPLAY",
    fecha: "20:30 15/12/2024",
    venue: "Wembley Stadium, Londres",
  },
  {
    resumen: "Set especial de NICK WARREN en Colorado",
    nombre: "NICK WARREN",
    fecha: "22:00 10/02/2024",
    venue: "Red Rocks Amphitheatre, Colorado",
  },
  {
    resumen: "Festival de música en California con artistas top",
    nombre: "BIZARREN FESTIVAL",
    fecha: "20:30 01/03/2024",
    venue: "Coachella Valley, California",
  },
  {
    resumen: "Techno live de Richie Hawtin en Berlín",
    nombre: "Richie Hawtin",
    fecha: "23:10 04/05/2024",
    venue: "Berghain, Berlín",
  },
];

const EventoGrilla = () => (
  <div className=" flex justify-center  bg-gray-100">
    <div className="p-6  min-h-screen justify-center">
      {/* Título de la sección alineado a la izquierda */}
      <div className="mb-6">
        <Titulo titulo={"Eventos"} />
      </div>

      <div className="w-full max-w-7xl bg-white shadow-md p-4">
        {/* Filtro de eventos */}
        <div className="flex justify-start mb-6">
          <EventosFiltroForm />
        </div>

        {/* Tabla de eventos */}
        <DataTable columns={ConfigColumns} data={data} pagination />
      </div>
    </div>
  </div>
);

export default EventoGrilla;
