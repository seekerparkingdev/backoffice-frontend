import React from "react";
import ModalEditar from "../../components/ModalEditar";
import { useState } from "react";
import ModalDelete from "../../components/ModalDelete";
import DatosEditar from "../../components/DatosEditar/DatosEditar";
import AlertaCorta from "../../components/AlertaCorta";

function Botones({ selectedItems }) {
  const [toastWarningOpen, setToastWarningOpen] = useState(true);
  const [modalEditarOpen, setModalEditarlOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  return (
    <>
      <div className={`${selectedItems.length < 1 && "hidden"}`}>
        <div className="flex items-center">
          <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap">
            <span>{selectedItems.length}</span> Usuarios seleccionado
          </div>
          {/* Contenido modal borrar  */}
          <div className="m-1.5">
            {/* Start */}
            <button
              className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500"
              aria-controls="modal-delete"
              onClick={(e) => {
                e.stopPropagation();
                setDeleteModalOpen(true);
              }}
            >
              Borrar
            </button>
            <ModalDelete
              id="modal-delete"
              modalOpen={deleteModalOpen}
              setModalOpen={setDeleteModalOpen}
            >
              <div className="p-5 flex space-x-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-100 dark:bg-gray-700">
                  <svg
                    className="shrink-0 fill-current text-red-500"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm1-3H7V4h2v5z" />
                  </svg>
                </div>
                {/* Content */}
                <div>
                  {/* Modal header */}
                  <div className="mb-2">
                    <div className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                      Borrar {selectedItems.length} Usuario/s
                    </div>
                  </div>
                  {/* Modal content */}
                  <div className="text-sm mb-10">
                    <div className="space-y-2">
                      <p>
                        Esta acción eliminará permanentemente a{" "}
                        {selectedItems.length} usuario/s. Una vez confirmada, no
                        podrás revertirla.
                      </p>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex flex-wrap justify-end space-x-2">
                    <button
                      className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteModalOpen(false);
                      }}
                    >
                      Cancelar
                    </button>
                    <button className="btn-sm bg-red-500 hover:bg-red-600 text-white">
                      Si, eliminar
                    </button>
                  </div>
                </div>
              </div>
            </ModalDelete>
            {/* End */}
          </div>
          {/* cierre modal borrar  */}
          {/* Contenido del modal  editar */}
          {/* Iniciamos modal  */}
          <button
            className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-orange-500"
            aria-controls="modal-editar"
            onClick={(e) => {
              if (selectedItems.length > 1) {
                setToastWarningOpen(true);
                return;
              }

              e.stopPropagation();
              setModalEditarlOpen(true);
            }}
          >
            Editar
          </button>
          <ModalEditar
            id="modal-editar"
            modalOpen={modalEditarOpen}
            setModalOpen={setModalEditarlOpen}
            title="Modal editar"
          >
            <div className="px-5 pt-4 pb-1">
              <DatosEditar
                modalOpen={modalEditarOpen}
                setModalOpen={setModalEditarlOpen}
              />
            </div>
            {/* Modal footer */}
            <div className="px-5 py-4">
              <div className="flex flex-wrap justify-end space-x-2">
                <button
                  className="btn-sm border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-800 dark:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalEditarlOpen(false);
                  }}
                >
                  Close
                </button>
                <button className="btn-sm bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white">
                  I Understand
                </button>
              </div>
            </div>
          </ModalEditar>
          {/* cierre del contenido modal   editar*/}
          <button className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-blue-500">
            Duplicar
          </button>
          <button className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-gray-500">
            Desactivar
          </button>
        </div>
      </div>

      <AlertaCorta open={toastWarningOpen} setOpen={setToastWarningOpen}>
        Solo puedes editar un usuario a la vez
      </AlertaCorta>
    </>
  );
}

export default Botones;
