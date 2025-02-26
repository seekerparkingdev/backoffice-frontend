import React, { useState } from "react";
import ModalBlank from "../../components/ModalBlank";
import PaginationClassic from "../../components/PaginationClassic";
import BotonesEmail from "../actions/BotonesEmail";
import PerfilesTabla from "../abm_perfiles/PerfilesTabla";
import NewPerfil from "../../components/NewPerfil";
 

function PerfilesPanel() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [infoModalOpen, setInfoModalOpen] = useState(false);

  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex overflow-hidden max-w-9xl w-full">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Perfiles
                </h1>
                <p>
                  Administrar las acciones que puede realizar cada perfil de
                  usuario.
                </p>
              </div>
              {/* Right: Actions */}
              <div className="grid grid-flow-col justify-start gap-2">
                <BotonesEmail selectedItems={selectedItems} />
              </div>
            </div>

            <div className="flex items-center mb-4 justify-end">
              <div className="ml-2">
                <button
                  className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white"
                  aria-controls="info-modal"
                  onClick={(e) => {
                    e.stopPropagation();
                    setInfoModalOpen(true);
                  }}
                >
                  <svg
                    className="fill-current shrink-0 xs:hidden"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="max-xs:sr-only">Nuevo </span>
                </button>
                <ModalBlank
                  id="info-modal"
                  modalOpen={infoModalOpen}
                  setModalOpen={setInfoModalOpen}
                >
                  <div className="p-5 flex space-x-4">
                    <NewPerfil
                      modalOpen={infoModalOpen}
                      setModalOpen={setInfoModalOpen}
                    />
                  </div>
                </ModalBlank>
              </div>
            </div>

            {/* Table */}
            <PerfilesTabla selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default PerfilesPanel;
