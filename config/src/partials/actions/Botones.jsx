import React from "react";
import Swal from "sweetalert2";
import ModalEditar from "../../components/ModalEditar";
import { useState } from "react";
import ModalDelete from "../../components/ModalDelete";
import DatosEditar from "../../components/DatosUsers/DatosEditar";
import ModalDesactivar from "../../components/ModalDesactivar";
import ModalDuplicar from "../../components/ModalDuplicar";

function Botones({ selectedItems }) {
  const [modalDuplicarOpen, setModalDuplicarlOpen] = useState(false);
  const [modalEditarOpen, setModalEditarlOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [desactivarModalOpen, setDesactivarModalOpen] = useState(false);
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
          </div>

          <button
            className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-orange-500"
            aria-controls="modal-editar"
            onClick={(e) => {
              if (selectedItems.length > 1) {
                Swal.fire({
                  title: "¡Atención!",
                  text: "No se puede editar mas de un usuario a la vez",
                  icon: "warning",
                  confirmButtonText: "Entendido",
                  customClass: {
                    popup: "bg-gray-800 text-white rounded-lg shadow-lg",
                    title: "text-blue-400 text-xl font-bold",
                    htmlContainer: "text-gray-300 text-sm",
                    confirmButton:
                      "bg-blue-500 hover:bg-blue-600 text-gray-900 font-semibold px-4 py-2 rounded-md",
                  },
                  backdrop: "bg-black/50",
                });
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
          </ModalEditar>
          {/* cierre del contenido modal   editar*/}

          <div className="m-1.5">
            {/* Start */}
            <button
              className="btn  dark:bg-blue-700 border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 text-blue-500"
              aria-controls="modal-duplicar"
              onClick={(e) => {
                e.stopPropagation();
                setModalDuplicarlOpen(true);
              }}
            >
              Duplicar
            </button>
            <ModalDuplicar
              id="modal-duplicar"
              modalOpen={modalDuplicarOpen}
              setModalOpen={setModalDuplicarlOpen}
            >
              <div className="p-5 flex space-x-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-blue-200 dark:bg-blue-600">
                  <svg
                    className="shrink-0 fill-current text-blue-500"
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
                    <div className="text-lg font-semibold text-blue-800 dark:text-blue-100">
                      Duplicar {selectedItems.length} Usuario/s
                    </div>
                  </div>
                  {/* Modal content */}
                  <div className="text-sm mb-10">
                    <div className="space-y-2">
                      <p>
                        Esta acción duplicará a {selectedItems.length}{" "}
                        usuario/s. Podrás realizar modificaciones si lo
                        necesitas.
                      </p>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex flex-wrap justify-end space-x-2">
                    <button
                      className="btn-sm border-blue-300 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-500 text-blue-600 dark:text-blue-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        setModalDuplicarlOpen(false);
                      }}
                    >
                      Cancelar
                    </button>
                    <button className="btn-sm bg-blue-500 hover:bg-blue-600 text-white">
                      Confirmar Duplicación
                    </button>
                  </div>
                </div>
              </div>
            </ModalDuplicar>
          </div>

          <div className="m-1.5">
            {/* Start */}
            <button
              className="btn   dark:bg-gray-700 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-500"
              aria-controls="modal-desactivar"
              onClick={(e) => {
                e.stopPropagation();
                setDesactivarModalOpen(true);
              }}
            >
              Desactivar
            </button>
            <ModalDesactivar
              id="modal-desactivar"
              modalOpen={desactivarModalOpen}
              setModalOpen={setDesactivarModalOpen}
            >
              <div className="p-5 flex space-x-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-gray-200 dark:bg-gray-600">
                  <svg
                    className="shrink-0 fill-current text-gray-500"
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
                      Desactivar {selectedItems.length} Usuario/s
                    </div>
                  </div>
                  {/* Modal content */}
                  <div className="text-sm mb-10">
                    <div className="space-y-2">
                      <p>
                        Esta acción desactivará a {selectedItems.length}{" "}
                        usuario/s. Podrás revertirla más tarde si lo deseas.
                      </p>
                    </div>
                  </div>
                  {/* Modal footer */}
                  <div className="flex flex-wrap justify-end space-x-2">
                    <button
                      className="btn-sm border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-600 dark:text-gray-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        setDesactivarModalOpen(false);
                      }}
                    >
                      Cancelar
                    </button>
                    <button className="btn-sm bg-gray-500 hover:bg-gray-600 text-white">
                      Confirmar Desactivación
                    </button>
                  </div>
                </div>
              </div>
            </ModalDesactivar>
          </div>
        </div>
      </div>
    </>
  );
}

export default Botones;
