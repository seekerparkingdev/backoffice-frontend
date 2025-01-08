import React, { useState, useEffect } from "react";
import MapComponent from "../../venues/InfoGeneral/MapComponent";

const GeneralFormNew = () => {
  return (
    <div className="p-8 bg-white max-w-4xl mx-auto">
      <form className="space-y-8">
        {/* Información básica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="propietario"
              className="block text-gray-700 font-medium mb-2"
            >
              Propietario:
            </label>
            <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="Mariano Silva">Mariano Silva</option>
              {/* Agrega más opciones de propietario según sea necesario */}
            </select>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email para Notificaciones:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="descripcion"
              className="block text-gray-700 font-medium mb-2"
            >
              Texto descriptivo:
            </label>
            <input
              type="text"
              id="descripcion"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Información de ubicación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="codigoLugar"
              className="block text-gray-700 font-medium mb-2"
            >
              Código para generación de plazas:
            </label>
            <input
              type="text"
              id="codigoLugar"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium mb-2"
            >
              Dirección (Ej: Humboldt 450, Villa Crespo):
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                id="direccion"
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-6 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Actualizar Mapa
              </button>
            </div>
          </div>
        </div>

        {/* URL de Ubicación */}
        <div>
          <label
            htmlFor="ubicacion"
            className="block text-gray-700 font-medium mb-2"
          >
            URL de Ubicación:
          </label>
          <input
            type="text"
            id="ubicacion"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Foto de portada */}
        <div>
          <label
            htmlFor="portada"
            className="block text-gray-700 font-medium mb-2"
          >
            Foto de Portada:
          </label>
          <input
            type="file"
            accept="image/*"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mapa */}
        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Seleccione la posición donde se encuentre el Venue o actualice el
            mapa mediante la dirección por coordenadas.
          </label>
          <div className="mt-6">
            {/* <MapComponent /> */}
          </div>
        </div>

        {/* Opciones relacionadas con el lugar */}
        <div className="space-y-6 mt-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input type="checkbox" className="h-5 w-5 text-blue-500" />
              <label htmlFor="recomendar" className="text-gray-700 font-medium">
                Recomendar
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="h-5 w-5 text-blue-500" />
              <label
                htmlFor="obligatorioLlaves"
                className="text-gray-700 font-medium"
              >
                Obligatorio dejar llaves
              </label>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="h-5 w-5 text-blue-500" />
              <label
                htmlFor="incluirServiceCharge"
                className="text-gray-700 font-medium"
              >
                Incluir Service Charge dentro del precio
              </label>
            </div>
          </div>

          <div>
            <label
              htmlFor="porcentajeServiceCharge"
              className="block text-gray-700 font-medium mb-2"
            >
              Service Charge (%):
            </label>
            <input
              type="number"
              id="porcentajeServiceCharge"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="horarioEspecial"
              className="block text-gray-700 font-medium mb-2"
            >
              Horario Especial de Salida:
            </label>
            <input
              type="time"
              id="horarioEspecial"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Botón para guardar */}
        <div className="mt-8 text-center">
          <button
            type="submit"
            className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  );
};

export { GeneralFormNew };
