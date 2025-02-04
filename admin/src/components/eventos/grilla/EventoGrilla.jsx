import React, { useState, useEffect, useCallback } from "react";
import { ConfigColumns } from "./ConfigColumns";
import DataTable from "react-data-table-component";
import EventosFiltroForm from "../form/EventosFiltroForm";
import { NavLink, useNavigate } from "react-router-dom";
import { Titulo } from "../../Titulo";
import { getEventos } from "../../../services/ServiceEventos";
import { debounce } from "lodash";

const EventoGrilla = () => {
  const [data2, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filtros, setFiltros] = useState({});

  // Función de obtención de eventos con debounce
  const fetchEventos = useCallback(
    debounce(async (filtros) => {
      setLoading(true);
      setError(null);
      try {
        const response = await getEventos(filtros);
        setData(Array.isArray(response) ? response : []);
      } catch (error) {
        setError("Error al obtener los eventos.");
        console.error("Error al obtener los eventos:", error);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );

  // Ejecutar cada vez que los filtros cambian
  useEffect(() => {
    fetchEventos(filtros);
  }, [filtros, fetchEventos]);

  const navigate = useNavigate();

  const handleRowClick = (row) => {
    navigate(`/eventos/${row.id}`);
  };

  return (
    <div className="flex justify-center bg-gray-100">
      <div className="p-6 min-h-screen w-full">
        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-5 border-b-2 border-gray-200 pb-9">
            <Titulo titulo={"Eventos"} className="text-xl font-bold" />
            <NavLink to="/eventos/new">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Nuevo
              </button>
            </NavLink>
          </div>

          {/* Formulario de filtros */}
          <div className="flex justify-start mb-6">
            <EventosFiltroForm onFilterChange={setFiltros} />
          </div>

          {/* Mensajes de estado */}
          {loading ? (
            <p className="text-center text-gray-500">Cargando eventos...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : data2.length === 0 ? (
            <p className="text-center text-gray-500">
              No hay eventos disponibles.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <DataTable
                columns={ConfigColumns(setData)}
                data={data2}
                pagination
                onRowClicked={handleRowClick}
                highlightOnHover
                className="rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EventoGrilla;

