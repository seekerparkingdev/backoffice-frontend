import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { MdPhotoCamera, MdDelete } from "react-icons/md";

const InfoGeneral = () => {
  return (
    <div className="p-4 bg-white shadow-lg rounded-b-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Venue */}
          <div>
            <label htmlFor="venue" className="block text-gray-700 font-medium">
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fecha */}
          <div>
            <label htmlFor="fecha" className="block text-gray-700 font-medium">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hora */}
          <div>
            <label htmlFor="hora" className="block text-gray-700 font-medium">
              Hora
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tiempo antes del evento */}
          <div>
            <label
              htmlFor="antesevento"
              className="block text-gray-700 font-medium"
            >
              T. Antes del evento
            </label>
            <input
              type="time"
              id="antesevento"
              name="antesevento"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tiempo después del evento */}
          <div>
            <label
              htmlFor="despuesevento"
              className="block text-gray-700 font-medium"
            >
              T. Después del evento
            </label>
            <input
              type="time"
              id="despuesevento"
              name="despuesevento"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hora límite de compra */}
          <div>
            <label htmlFor="limite" className="block text-gray-700 font-medium">
              Hora límite de compra
            </label>
            <input
              type="datetime-local"
              id="limite"
              name="limite"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Foto de portada */}

          {/* Tipo de evento */}
          <div>
            <label htmlFor="tipo" className="block text-gray-700 font-medium">
              Tipo Evento
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="tipo"
                name="tipo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="p-2 bg-gray-200 text-blue-600 rounded-lg hover:bg-gray-300"
              >
                <AiOutlinePlus size={20} />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="foto" className="block text-gray-700 font-medium">
              Foto de Portada
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
              >
                <MdPhotoCamera size={20} />
              </button>
              <button
                type="button"
                className="p-2 bg-gray-200 text-red-600 rounded-lg hover:bg-gray-300"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export { InfoGeneral };
