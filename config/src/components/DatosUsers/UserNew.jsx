import React, { useState } from "react";
import ModalBlank from "../ModalBlank";

const UserNew = ({ modalOpen, setModalOpen }) => {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("datos-usuario");
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "datos-usuario":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="correo@ejemplo.com"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Perfil
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                <option value="">Seleccione un perfil</option>
                <option value="qr">Lector de QR</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Perfil Especial
              </label>
              <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                <option value="">Seleccione un perfil especial</option>
                <option value="none">Sin Perfil</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Trabaja desde
                </label>
                <input
                  type="time"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Trabaja hasta
                </label>
                <input
                  type="time"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="Escriba aquí para cambiar la contraseña"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Repetir contraseña
              </label>
              <input
                type="password"
                placeholder="Escriba nuevamente la contraseña anterior"
                className="w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
        );

      case "datos-personales":
        return (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  DNI
                </label>
                <input
                  type="text"
                  placeholder="Ingrese DNI"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Dirección
                </label>
                <input
                  type="text"
                  placeholder="Ingrese dirección"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono
                </label>
                <input
                  type="tel"
                  placeholder="Teléfono fijo"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Celular
                </label>
                <input
                  type="tel"
                  placeholder="Teléfono móvil"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Foto
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="URL de la foto"
                  className="w-full rounded-md border border-gray-300 px-3 py-2"
                />
                <button className="px-4 py-2 bg-gray-100 text-gray-700 border border-gray-300 rounded-md">
                  Recortar
                </button>
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
          <h2 className="text-lg font-medium">Nuevo Usuario</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setModalOpen(false)}
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
          </nav>
        </div>

        <div className="p-6">{renderContent()}</div>

        <div className="flex justify-end p-4 border-t">
          <div className="m-1.5">
            {/* Start */}
            <button
              className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
              aria-controls="info-modal"
              onClick={(e) => {
                e.stopPropagation();
                setInfoModalOpen(true);
              }}
            >
              Crear
            </button>
            <ModalBlank
              id="info-modal"
              modalOpen={infoModalOpen}
              setModalOpen={setInfoModalOpen}
            >
              <div className="p-5 flex space-x-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 dark:bg-gray-700">
                  <svg
                    className="shrink-0 fill-current text-violet-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm1 12H7V7h2v5zM8 6c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" />
                  </svg>
                </div>
                {/* Content */}
                <div>
                  {/* Modal header */}
                  <div className="mb-2">
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      ¿Crear nuevo Usuario?
                    </div>
                  </div>
                  {/* Modal content */}
                  <div className="text-sm mb-10">
                    <div className="space-y-2">
                      <p>
                        Esta acción creará un nuevo usuario. Una vez confirmada,
                        no podrás revertirla.
                      </p>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex flex-wrap justify-end space-x-2">
                    <button
                      className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setInfoModalOpen(false);
                      }}
                    >
                      Cancelar
                    </button>
                    <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                      Si, crear usuario
                    </button>
                  </div>
                </div>
              </div>
            </ModalBlank>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserNew;
