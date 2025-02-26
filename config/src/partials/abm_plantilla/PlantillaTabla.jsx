import React, { useState, useEffect } from "react";
import ListadoPlantilla from "./ListadoPlantilla";
import EditorPlantilla from "../../components/EditorPlantilla";

function PlantillaTabla({ selectedItems }) {
  const plazas = [
    { id: "0", nombre: "Devolucion Rechazada" },
    { id: "1", nombre: "Devolucion Aceptada" },
    { id: "2", nombre: "Devolucion Rechazada" },
    { id: "3", nombre: "Devolucion Aceptada" },
    { id: "4", nombre: "Devolucion Aceptada" },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);
  const [modalOpen, setModalOpen] = useState(false); // Estado para abrir/cerrar el modal
  const [selectedTemplate, setSelectedTemplate] = useState(null); // Estado para la plantilla seleccionada

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(selectAll ? [] : plazas.map((plaza) => plaza.id));
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  const handleEditTemplate = (plaza) => {
    setSelectedTemplate(plaza); // Asignamos la plantilla seleccionada
    setModalOpen(true); // Abrimos el modal
  };

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Emails
          <span className="text-gray-400 dark:text-gray-500 font-medium">
            {" "}
            ({plazas.length})
          </span>
        </h2>
      </header>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full min-w-[900px] dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
            <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-700/60">
              <tr>
                <th className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <label className="inline-flex">
                      <span className="sr-only">Seleccionado</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label>
                  </div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="font-semibold">Asunto</div>
                </th>
                <th className="px-4 py-3 text-left">
                  <div className="font-semibold">Utilizado en</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {plazas.map((plaza) => (
                <ListadoPlantilla
                  key={plaza.id}
                  id={plaza.id}
                  nombre={plaza.nombre}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(plaza.id)}
                  onEdit={() => handleEditTemplate(plaza)} // Añadimos la función para abrir el modal
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal del editor */}
      {modalOpen && selectedTemplate && (
        <EditorPlantilla
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          template={selectedTemplate} // Pasamos los datos de la plantilla al editor
        />
      )}
    </div>
  );
}

export default PlantillaTabla;
