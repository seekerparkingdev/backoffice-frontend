import React, { useState } from "react";
import Swal from "sweetalert2";

const EventosFiltroForm = ({ onFilterChange }) => {
  const [nombreEvento, setNombreEvento] = useState("");
  const [fechaDesde, setFechaDesde] = useState("");
  const [fechaHasta, setFechaHasta] = useState("");
  const [venue, setVenue] = useState("");

  const handleFiltrar = () => {
    const filtros = {};
    if (nombreEvento.trim()) filtros.name = nombreEvento;
    if (fechaDesde) filtros.date_from = fechaDesde;
    if (fechaHasta) filtros.date_to = fechaHasta;
    if (venue) filtros.venue_id = venue;

    onFilterChange(filtros);

    Swal.fire({
      title: "Filtros Aplicados",
      html: `
        <p><strong>Nombre:</strong> ${nombreEvento || "No especificado"}</p>
        <p><strong>Fecha Desde:</strong> ${fechaDesde || "No especificada"}</p>
        <p><strong>Fecha Hasta:</strong> ${fechaHasta || "No especificada"}</p>
        <p><strong>Venue:</strong> ${venue || "No especificado"}</p>
      `,
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

  const handleLimpiar = () => {
    setNombreEvento("");
    setFechaDesde("");
    setFechaHasta("");
    setVenue("");
    onFilterChange({}); // Resetear los filtros en EventoGrilla
  };

  return (
    <div className="flex flex-wrap items-end gap-4 p-4   rounded-lg">
      {/* Nombre del evento */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Nombre del Evento
        </label>
        <input
          type="text"
          value={nombreEvento}
          onChange={(e) => setNombreEvento(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleFiltrar()}
          className="mt-1 block w-48 px-2 py-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Fecha Desde */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Fecha Desde
        </label>
        <input
          type="date"
          value={fechaDesde}
          onChange={(e) => setFechaDesde(e.target.value)}
          className="mt-1 block w-48 px-2 py-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Fecha Hasta */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Fecha Hasta
        </label>
        <input
          type="date"
          value={fechaHasta}
          onChange={(e) => setFechaHasta(e.target.value)}
          className="mt-1 block w-48 px-2 py-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Venue */}
      <div className="flex flex-col">
        <label className="block text-sm font-medium text-gray-700">
          Venue (ID)
        </label>
        <input
          type="number"
          value={venue}
          onChange={(e) => setVenue(e.target.value)}
          className="mt-1 block w-32 px-2 py-1 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Botones */}
      <div className="flex items-end gap-2">
        <button
          onClick={handleFiltrar}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Filtrar
        </button>
        <button
          onClick={handleLimpiar}
          className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500"
        >
          Limpiar
        </button>
      </div>
    </div>
  );
};

export default EventosFiltroForm;

