import React, { useState } from "react";

const DatosEditar = ({ modalOpen, setModalOpen }) => {
  const [activeTab, setActiveTab] = useState("datos-usuario");

  const renderContent = () => {
    switch (activeTab) {
      case "datos-usuario":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Perfil
              </label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                <option>Lector de QR</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Perfil Especial
              </label>
              <select className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2">
                <option>Sin Perfil</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Trabaja desde
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Trabaja hasta
                </label>
                <input
                  type="time"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Escriba aquí para cambiar la contraseña"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Repetir contraseña
              </label>
              <input
                type="password"
                placeholder="Escriba nuevamente la contraseña anterior"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
        );
      case "datos-personales":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Celular
                </label>
                <input
                  type="tel"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Foto
              </label>
              <div className="mt-1 flex items-center">
                <input
                  type="text"
                  className="block w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <button className="ml-2 px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md">
                  Recortar
                </button>
              </div>
            </div>
          </div>
        );
      case "estacionamientos":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <select className="block w-64 rounded-md border border-gray-300 px-3 py-2">
                <option>Seleccione un estacionamiento</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                + Agregar
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">
                ESTACIONAMIENTO
              </h3>
              <div className="space-y-2">
                {[
                  "Armenia Parking",
                  "Armenia Parking (Sacre)",
                  "Sinclair Parking",
                  "Armenia Parking Bordland",
                ].map((parking) => (
                  <div
                    key={parking}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-blue-600">{parking}</span>
                    <button className="p-1 border border-gray-300 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case "venues":
        return (
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <select className="block w-64 rounded-md border border-gray-300 px-3 py-2">
                <option>Seleccione un venue</option>
              </select>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
                + Agregar
              </button>
            </div>
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">VENUES</h3>
              <div className="space-y-2">
                {[
                  "Autódromo de la Ciudad de Buenos Aires",
                  "Ciudad Universitaria",
                  "Club de Corredores",
                  "I Love Run",
                ].map((venue) => (
                  <div
                    key={venue}
                    className="flex justify-between items-center py-2"
                  >
                    <span className="text-blue-600">{venue}</span>
                    <button className="p-1 border border-gray-300 rounded">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-medium">Editar usuario</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={(e) => {
              e.stopPropagation();
              setModalOpen(false);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="border-b">
          <nav className="flex">
            <button
              className={`px-6 py-3 ${
                activeTab === "datos-usuario"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("datos-usuario")}
            >
              Datos de usuario
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "datos-personales"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("datos-personales")}
            >
              Datos personales
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "estacionamientos"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("estacionamientos")}
            >
              Estacionamientos
            </button>
            <button
              className={`px-6 py-3 ${
                activeTab === "venues"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("venues")}
            >
              Venues
            </button>
          </nav>
        </div>

        <div className="p-6">{renderContent()}</div>

        <div className="flex justify-end p-4 border-t">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatosEditar;
