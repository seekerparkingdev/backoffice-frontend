import { useState } from "react";
import {Titulo} from "../../components/Titulo"
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
    <div className="max-w-screen-lg  mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24 pt-24 sm:pt-32 md:pt-40">  
      <div className="flex flex-col gap-8">
        <Titulo titulo={"Estacionamientos" } />
        {/* Contenedor de "Información General" */}
        <div className="w-full bg-white shadow-md rounded-t-lg p-4 sm:p-6 flex flex-col">
          <div className="flex justify-between items-center gap-4 mb-4">
            <TituloParrafo
              titulo="Información General"
              parrafo="Nombre, capacidad máxima, dirección y fotos"
            />
            <button
              onClick={() => handleToggleVisibility("generalEdit")}
              className="p-2 rounded transition duration-150"
            >
              {visibility.generalEdit ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>

          {visibility.generalEdit && (
            <div className="p-4 sm:p-6 rounded-b-lg overflow-y-auto">
              <GeneralEdit />
            </div>
          )}
        </div>

        {/* Contenedor de "Precios de las Plazas" */}
        <div className="w-full bg-white shadow-md rounded-t-lg p-4 sm:p-6 flex flex-col">
          <div className="flex justify-between items-center gap-4 mb-4">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold text-gray-800">
                Precios de las Plazas
              </h1>
              <p className="text-sm text-gray-500">
                Añada los precios para los diferentes tipos de plaza.
                <br /> Seleccione los vehículos que acepta el estacionamiento y
                en qué orden desea que aparezcan.
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
            <div className="p-4 sm:p-6 rounded-b-lg overflow-y-auto">
              <PlazasEstacionamiento />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { EstacionamientoEditPage };
