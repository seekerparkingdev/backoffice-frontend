import React, { useState } from "react";
import { MdLabelOutline } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const EventoCrud = () => {
  const { id } = useParams();
  const isModeEdit = id !== "new";
  const navigate = useNavigate();
  const [showEventTime, setShowEventTime] = useState(false);

  return (
    <div>
      <div className="mb-8 ml-2 mt-4 border-b-2  ">
        <h1 className="text-3xl font-bold mb-4 mt-8  ">
          {" "}
          {isModeEdit ? "Editar Evento" : "Nuevo Evento"}
        </h1>
      </div>
      <form className="max-w-7xl   bg-white p-8">
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
                      type="text"
                      className="w-full px-3 py-2 border rounded bg-[#F0F2F6] focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                      placeholder="La Bomba de Tiempo"
                    />
                  </div>
                  <div className="w-64 ml-5 flex items-center gap-2 mt-6">
                    <span className="transform rotate-[240deg]">
                      <MdLabelOutline />
                    </span>
                    <span>Tipo de evento</span>
                    <span className="ml-8">
                      <FaArrowDown />
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4 mr-72">
                  <div className="flex flex-col">
                    <label className="block text-sm mb-2">
                      Fecha del evento <b className="text-[#FF1010]"> *</b>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border bg-[#F0F2F6] rounded focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                      placeholder="dd/mm/aaaa"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="block text-sm mb-2">
                      Venue <b className="text-[#FF1010]"> *</b>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded bg-[#F0F2F6] focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                    />
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
                        type="date"
                        className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">
                        Hora límite de reserva/compra
                      </label>
                      <input
                        type="date"
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
                type="date"
                className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">
                Hora límite de salida del parking
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border rounded focus:ring-2 bg-[#F0F2F6] focus:ring-blue-200 focus:border-blue-400"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-6">
          {isModeEdit ? (
            <div>
              <NavLink
                to="/eventos/estacionamientos"
                className="px-6 py-2 bg-[#4B6FC7] text-white rounded ml-3"
              >
                Estacionamientos
              </NavLink>
              <NavLink className="px-6 py-2 bg-[#4B6FC7] text-white rounded  ml-3"
                to="/eventos/plazas">
                Plazas
              </NavLink>
              <button className="px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500  ml-3">
                Editar
              </button>
            </div>
          ) : (
            <button className="px-6 py-2 bg-blue-400 text-white rounded hover:bg-blue-500  ml-3">
              Guardar
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export { EventoCrud };
