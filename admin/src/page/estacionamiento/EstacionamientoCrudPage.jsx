import { useState } from "react";
import { Titulo } from "../../components/Titulo";
import { TituloParrafo } from "../../components/TituloParrafo";
import { GeneralCrud } from "../../components/estacionamiento/form/GeneralCrud";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
import { PlazasEstacionamiento } from "../../components/estacionamiento/grilla/PlazasEstacionamiento";
import { useContext } from "react";
import { FormularioContext } from "../../utils/estacionamiento/EstacionamientoContext";

const EstacionamientoCrudPage = () => {
  const { datosFormulario, setDatosFormulario } = useContext(FormularioContext);
   
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
    <div className="  flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-2/3 px-4">
        <div className="mb-4 mt-10">
          <Titulo titulo="Estacionamientos" />
        </div>

        {/* Información General */}
        <div className="mb-10 mt-5">
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Nombre, capacidad máxima, dirección y fotos"
            />
            <button
              onClick={() => handleToggleVisibility("generalEdit")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.generalEdit ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.generalEdit && (
            <div className="bg-white p-6 rounded-b-lg">
              <GeneralCrud />
            </div>
          )}
        </div>

        {/* Precios de las Plazas */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Precios de las Plazas"
              parrafo="Añada los precios para los diferentes tipos de plaza. Seleccione los vehículos que acepta el estacionamiento y en qué orden desea que aparezcan."
            />
            <button
              onClick={() => handleToggleVisibility("precios")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.precios ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.precios && (
            <div className="bg-white p-6 rounded-b-lg">
              <PlazasEstacionamiento />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { EstacionamientoCrudPage };
