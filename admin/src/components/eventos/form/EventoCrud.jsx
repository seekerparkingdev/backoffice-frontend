import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { MdLabelOutline } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
// Servicios
import {
  eventbyid,
  updateEvent,
  postEvento,
} from "../../../services/ServiceEventos";
import { getVenues } from "../../../services/ServiceVenues";
const EventoCrud = () => {
  const [data, setData] = useState({
    name: "",
    date: "",
    hour: "",
    venue_id: "",
    purchace_limit_date: "",
    id_event_type: "",
    enabled_before: "",
    enabled_after: "",
    path: "",
  });

  const [venues, setVenues] = useState({});
  const { id } = useParams();
  const isModeEdit = id !== "new";
  const [showEventTime, setShowEventTime] = useState(false);
  useEffect(() => {
    const venues = async () => {
      try {
        const response = await getVenues();

        if (response.status === "success") {
          setVenues(response.data.data);
        } else {
          Swal.fire({
            icon: "error",
            title: "No se puede crear el evento",
            text: "En este momento no es posible crear un evento. Inténtalo más tarde.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "No se puede crear el evento",
          text: "En este momento no es posible crear un evento. Inténtalo más tarde.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        });
      }
    };
    const getEventId = async () => {
      try {
        const response = await eventbyid(id);

        if (response.status === "success" && response.data) {
          const eventData = response.data; //

          setData({
            name: eventData.name || "",
            date: eventData.date || "",
            hour: eventData.time || "",
            venue_id: eventData.venue_id || "",
            purchace_limit_date: eventData.purchase_deadline || "",
            id_event_type:
              eventData.event_types.length > 0
                ? eventData.event_types[0]?.id
                : "",
            enabled_before: eventData.enabled_after || "",
            enabled_after: eventData.enabled_before || "",
            path: "",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "No se puede cargar el evento",
            text: "Inténtalo más tarde.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al cargar el evento",
          text: `Código de error: ${error.message || error}`,
          confirmButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        });
      }
    };
    if (isModeEdit) getEventId();
    venues();
  }, []);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!isModeEdit) {
       console.log("Nos vamos a siguiente")
    } else {
      try {
        const response = await updateEvent(id, data);
        if (response.status === "success") {
          Swal.fire({
            title: "¡Éxito!",
            text: `El evento "${response.data.name}" ha sido editado correctamente.`,
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al editar el evento. Por favor, intenta de nuevo.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Ocurrió un error: ${error.message || "Error desconocido"}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    localStorage.setItem(
      "eventData",
      JSON.stringify({ ...data, [name]: value })
    );
  };
  return (
    <div>
      <div className="mb-8 ml-2 mt-4 border-b-2  ">
        <h1 className="text-3xl font-bold mb-4 mt-8  ">
          {" "}
          {isModeEdit ? "Editar Evento" : "Nuevo Evento"}
        </h1>
      </div>
      <form className="max-w-7xl   bg-white p-8" onSubmit={handleOnSubmit}>
        {/* Encabezado */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold">Información general</h3>
          <p className="text-sm text-gray-400">Datos generales del evento</p>
          <div className="border-t mt-2"></div>
        </div>

        <div className="space-y-4">
          {/* Sección de Datos Principales */}
          <div className="relative">
            {/* Título con borde */}
            <div className="relative border border-gray-400 rounded-md py-4 px-4">
              <div className="absolute -top-3 left-8  bg-white px-4">
                <span className="text-sm  font-semibold">
                  Datos principales del Evento
                </span>
              </div>

              {/* Contenido del formulario */}
              <div className="space-y-6 mt-4">
                <div className="flex justify-between gap-4">
                  <div className="flex-1 mt-1">
                    <label className="block text-sm mb-2">
                      Nombre del evento <b className="text-[#FF1010]"> *</b>
                    </label>
                    <input
                      onChange={handleChange}
                      name="name"
                      value={data.name}
                      type="text"
                      className="w-full px-3 py-2 border rounded bg-[#F0F2F6] focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                      placeholder="La Bomba de Tiempo"
                    />
                  </div>
                  <div className="w-64 ml-5 flex items-center gap-2 mt-6 relative">
                    {/* Icono de etiqueta rotado */}
                    <span className="transform rotate-[240deg] text-gray-700">
                      <MdLabelOutline />
                    </span>

                    {/* Contenedor del select estilizado */}
                    <div className="relative w-full cursor-pointer  appearance-none  outline-none">
                      <select
                        name="id_event_type"
                        onChange={handleChange}
                        value={data.id_event_type}
                        className="appearance-none  bg-transparent border-none outline-none text-gray-700 w-full pr-6 cursor-pointer"
                      >
                        <option value={1}>Tipo de evento</option>
                        <option value={2}>Conferencia</option>
                        <option value={3}>Taller</option>
                        <option value={4}>Webinar</option>
                      </select>

                      {/* Flecha personalizada  
                      <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-700 pointer-events-none">
                        <FaArrowDown />
                      </span>
                      */}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 mr-72">
                  <div className="flex flex-col">
                    <label className="block text-sm mb-2">
                      Fecha del evento <b className="text-[#FF1010]"> *</b>
                    </label>
                    <input
                      onChange={handleChange}
                      type="date"
                      name="date"
                      value={data.date}
                      className="w-full px-3 py-2 border bg-[#F0F2F6] rounded focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm mb-2">
                      Venue <b className="text-[#FF1010]"> *</b>
                    </label>
                    <select
                      onChange={handleChange}
                      value={data.venue_id}
                      name="venue_id"
                      className="w-full px-3 py-2 border rounded bg-[#F0F2F6] focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    >
                      <option value="" disabled>
                        Selecciona un venue
                      </option>

                      {venues.length > 0 &&
                        venues.map((venue) => (
                          <option key={venue.id} value={venue.id}>
                            {venue.name}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={showEventTime}
                      onChange={(e) => setShowEventTime(e.target.checked)}
                      className="w-4 h-4 bg-[#F0F2F6] border-gray-300 rounded"
                    />
                    <span className="text-sm">
                      A este evento le falta horario a definir
                    </span>
                  </label>
                </div>

                {!showEventTime && (
                  <div className="grid grid-cols-2 gap-4 mt-4 mr-72">
                    <div>
                      <label className="block text-sm mb-2">
                        Hora del evento
                      </label>
                      <input
                        onChange={handleChange}
                        name="hour"
                        value={data.hour}
                        type="time"
                        className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Hora límite de reserva/compra
                      </label>
                      <input
                        onChange={handleChange}
                        name="purchace_limit_date"
                        value={data.purchace_limit_date}
                        type="datetime-local"
                        className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
                      />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm mb-2">
                    Imagen de evento{" "}
                    <span className="text-gray-500">
                      (La imagen debe tener un tamaño de 240×240){" "}
                      <b className="text-[#FF1010]"> *</b>
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      onChange={handleChange}
                      name="path"
                      value={data.path}
                      type="file"
                      className="px-4 py-2 border-none    bg-white text-sm hover:bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col text-sm ">
                    <button className="px-4 py-2 text-[#1849D6]   rounded   flex items-center  gap-1">
                      <MdOutlineEdit /> Editar foto de portada
                    </button>
                    <button className="px-4 py-2 text-[#1849D6]   rounded  flex items-center  gap-1 ">
                      <RiDeleteBinLine /> Eliminar
                    </button>
                  </div>
                </div>

                <div>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border-gray-300 rounded"
                    />
                    <span className="text-sm">
                      Este evento es destacado{" "}
                      <span className="text-gray-500">
                        (La imagen debe tener un tamaño de 487×220){" "}
                        <b className="text-[#FF1010]"> *</b>
                      </span>
                    </span>
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="file"
                      className="px-4 py-2 border-none   bg-white text-sm hover:bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col text-sm ">
                    <button className="px-4 py-2 text-[#1849D6]   rounded   flex items-center  gap-1  ">
                      <MdOutlineEdit /> Editar foto de portada
                    </button>
                    <button className="px-4 py-2 text-[#1849D6]   rounded  flex items-center  gap-1 ">
                      <RiDeleteBinLine /> Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative border mt-5 border-gray-400 rounded-md py-4 px-4">
          <div className="absolute -top-3 left-8  bg-white px-4">
            <span className="text-sm  font-semibold">
              Detalles de acceso al parking
            </span>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4 mr-72">
            <div>
              <label className="block text-sm mb-2">
                Hora permitida de ingreso al parking
              </label>
              <input
                onChange={handleChange}
                value={data.enabled_before}
                name="enabled_before"
                type="time"
                className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">
                Hora límite de salida del parking
              </label>
              <input
                onChange={handleChange}
                value={data.enabled_after}
                name="enabled_after"
                type="time"
                className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          {isModeEdit ? (
            <div>
              <NavLink
                to={{
                  pathname: `/eventos/estacionamientos/${id}`,
                }}
                className="px-6 py-2 bg-[#4B6FC7] text-white rounded ml-3"
              >
                Estacionamientos
              </NavLink>
              <NavLink
                className="px-6 py-2 bg-[#4B6FC7] text-white rounded  ml-3"
                to="/eventos/plazas"
              >
                Plazas
              </NavLink>
              <button className="px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500  ml-3">
                Editar
              </button>
            </div>
          ) : (
            <NavLink
              to={{
                pathname: "/eventos/estacionamientos",
              }}
              className="px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500  ml-3"
            >
              Siguiente
            </NavLink>
          )}
        </div>
      </form>
    </div>
  );
};

export { EventoCrud };
