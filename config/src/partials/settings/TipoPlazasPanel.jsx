import { useState } from "react";
import PlazasTabla from "../abm_plazas/PlazasTabla";
import SearchForm from "../actions/SearchForm";
import PaginationClassic from "../../components/PaginationClassic";
import BotonesPlaza from "../actions/BotonesPlaza";
import ModalBlank from "../../components/ModalBlank";
import UserNew from "../../components/DatosUsers/UserNew";
import PlazaNew from "../../components/DatosPlazas/PlazaNew";

const TiposPlazasPanel = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [infoModalOpen, setInfoModalOpen] = useState(false);
  const handleSelectedItems = (selectedItems) => {
    setSelectedItems([...selectedItems]);
  };

  return (
    <div className="flex h-[100dvh] overflow-hidden w-full">
      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full   mx-auto">
            {/* Page header */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Title */}
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
                  Tipos de Plazas
                </h1>
              </div>
              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Delete button */}
                <BotonesPlaza selectedItems={selectedItems} />
                {/* Nuevo Plaza button */}
                <div className="m-1.5">
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
                    <span className="max-xs:sr-only">Nueva Plaza</span>
                  </button>
                  <ModalBlank
                    id="info-modal"
                    modalOpen={infoModalOpen}
                    setModalOpen={setInfoModalOpen}
                  >
                    <div className="p-5 flex space-x-4">
                      <PlazaNew
                        modalOpen={infoModalOpen}
                        setModalOpen={setInfoModalOpen}
                      />
                    </div>
                  </ModalBlank>
                </div>
              </div>
            </div>
            {/* Search Form */}
            <SearchForm />

            {/* Table */}
            <PlazasTabla selectedItems={handleSelectedItems} />

            {/* Pagination */}
            <div className="mt-8">
              <PaginationClassic />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TiposPlazasPanel;
