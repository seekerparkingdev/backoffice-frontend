import { useState } from "react";
import { TituloParrafo } from "../../components/TituloParrafo";
import { GeneralEdit } from "../../components/estacionamiento/form/GeneralEdit";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
const EstacionamientoEditPage = () => {
    
      const [visibility, setVisibility] = useState({
        generalEdit: false,
        redes: false,
        recomendado: false,
        VenueEventos: false,
      });
    
      const handleToggleVisibility = (section) => {
        setVisibility((prevState) => ({
          ...prevState,
          [section]: !prevState[section],
        }));
      };
    return (
        <div>
                  <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Nombre, capacidad máxima, dirección y fotos"
            />
            <button
              onClick={() => handleToggleVisibility("generalEdit")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.InfoGeneral ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.generalEdit && <GeneralEdit  />}
        </div>
        </div>
    )
}

export {EstacionamientoEditPage}