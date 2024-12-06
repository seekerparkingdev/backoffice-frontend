import React, { useState } from "react";
import Swal from "sweetalert2";

const EventosFiltroForm = () => {
  const [nombreEvento, setNombreEvento] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [venue, setVenue] = useState("");

  const handleFiltrar = () => {
    Swal.fire({
      title: "Filtros Aplicados",
      html: `
        <p><strong>Nombre:</strong> ${nombreEvento || "No especificado"}</p>
        <p><strong>Fecha Desde:</strong> ${fechaDesde || "No especificada"}</p>
        <p><strong>Fecha Hasta:</strong> ${fechaHasta || "No especificada"}</p>
        <p><strong>Venue:</strong> ${venue || "No especificado"}</p>
      `,
      icon: "info",
      confirmButtonText: "Aceptar",
    });
  };

  return (
    <div className="flex flex-wrap items-end gap-4 p-4     max-w-full">
      {/* Nombre del evento */}
      <div className="flex flex-col">
        <label
          htmlFor="eventNombre"
          className="block text-sm font-medium text-gray-700"
        >
          Nombre
        </label>
        <input
          type="text"
          id="eventNombre"
          value={nombreEvento}
          onChange={(e) => setNombreEvento(e.target.value)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Fecha desde */}
      <div className="flex flex-col">
        <label
          htmlFor="fechaDesde"
          className="block text-sm font-medium text-gray-700"
        >
          Fecha desde
        </label>
        <input
          type="date"
          id="fechaDesde"
          value={fechaDesde}
          onChange={(e) => setFechaDesde(e.target.value)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Fecha hasta */}
      <div className="flex flex-col">
        <label
          htmlFor="fechaHasta"
          className="block text-sm font-medium text-gray-700"
        >
          Fecha hasta
        </label>
        <input
          type="date"
          id="fechaHasta"
          value={fechaHasta}
          onChange={(e) => setFechaHasta(e.target.value)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      {/* Venue */}
      <div className="flex flex-col">
        <label
          htmlFor="venue"
          className="block text-sm font-medium text-gray-700"
        >
          Venue
        </label>
        <select
          id="venue"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="mt-1 block w-48 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Seleccionar un venue</option>
          <option value="Venue A">Venue A</option>
          <option value="Venue B">Venue B</option>
          <option value="Venue C">Venue C</option>
        </select>
      </div>

      {/* Botón Filtrar */}
      <div className="flex flex-col">
        <button
          onClick={handleFiltrar}
          className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Filtrar
        </button>
      </div>
    </div>
  );
};

export default EventosFiltroForm;
