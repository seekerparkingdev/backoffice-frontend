import React, { useState, useEffect } from "react";
import ListadoPlazas from "./ListadoPlazas";

function PlazasTabla({ selectedItems }) {
  const plazas = [
    { id: "0", nombre: "Plaza 1" },
    { id: "1", nombre: "Plaza 2" },
    { id: "2", nombre: "Plaza 3" },
    { id: "3", nombre: "Plaza 4" },
    { id: "4", nombre: "Plaza 5" },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

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

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Tipos de plazas
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
                <th className="px-4 py-3 w-12 text-center">
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
                  <div className="font-semibold">Nombre</div>
                </th>
              </tr>
            </thead>
            <tbody>
              {plazas.map((plaza) => (
                <ListadoPlazas
                  key={plaza.id}
                  id={plaza.id}
                  nombre={plaza.nombre}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(plaza.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PlazasTabla;
