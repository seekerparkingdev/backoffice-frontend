import React, { useState } from "react";

const NewPerfil = ({ modalOpen, setModalOpen }) => {
  const [activeTab, setActiveTab] = useState("datos-usuario");

  const renderContent = () => {
    switch (activeTab) {
      case "datos":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"
              />
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
          <h2 className="text-lg font-medium">Editar Perfil</h2>
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
                activeTab === "datos"
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("datos")}
            >
              Datos de plaza
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

export default NewPerfil;
