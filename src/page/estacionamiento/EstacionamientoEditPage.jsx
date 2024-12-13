import { useState } from "react";
import { TituloParrafo } from "../../components/TituloParrafo";
import { GeneralEdit } from "../../components/estacionamiento/form/GeneralEdit";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
import { PlazasEstacionamiento } from "../../components/estacionamiento/grilla/PlazasEstacionamiento";

const EstacionamientoEditPage = () => {
  const [visibility, setVisibility] = useState({
    generalEdit: false,
    precios: false,
  });

  const handleToggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-36">
      <div>
        <div className="bg-white shadow-md rounded-t-lg p-4 sm:p-6 flex items-center justify-between flex-wrap gap-4">
          <TituloParrafo
            titulo="Información General"
            parrafo="Nombre, capacidad máxima, dirección y fotos"
          />
          <button
            onClick={() => handleToggleVisibility("generalEdit")}
            className="p-2 rounded hover:bg-gray-200 transition duration-150"
          >
            {visibility.generalEdit ? (
              <BiSolidArrowToTop size={20} className="text-gray-600" />
            ) : (
              <BiSolidArrowToBottom size={20} className="text-gray-600" />
            )}
          </button>
        </div>

        {visibility.generalEdit && (
          <div className="bg-gray-50 p-4 sm:p-6 rounded-b-lg shadow-inner">
            <GeneralEdit />
          </div>
        )}
      </div>

      <div>
        <div className="bg-white shadow-md rounded-t-lg p-4 sm:p-6 flex items-center justify-between flex-wrap gap-4 mt-32">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-gray-800">
              Precios de las Plazas
            </h1>
            <p className="text-sm text-gray-500">
              Añada los precios para los diferentes tipos de plaza.
              <br /> Selecciones los vehículos que acepta el estacionamiento y
              en que orden desea que aparezcan.
            </p>
          </div>

          <button
            onClick={() => handleToggleVisibility("precios")}
            className="p-2 rounded hover:bg-gray-200 transition duration-150"
          >
            {visibility.precios ? (
              <BiSolidArrowToTop size={20} className="text-gray-600" />
            ) : (
              <BiSolidArrowToBottom size={20} className="text-gray-600" />
            )}
          </button>
        </div>

        {visibility.precios && (
          <div className="bg-gray-50 p-4 sm:p-6 rounded-b-lg shadow-inner">
            <PlazasEstacionamiento />
          </div>
        )}
      </div>
    </div>
  );
};

export { EstacionamientoEditPage };
