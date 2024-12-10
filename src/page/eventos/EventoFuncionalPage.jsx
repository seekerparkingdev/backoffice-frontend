import { useState } from "react";
import { BiSolidArrowToTop, BiSolidArrowToBottom } from "react-icons/bi";
import { Titulo } from "../../components/Titulo";
import { TituloParrafo } from "../../components/TituloParrafo";
import { InfoGeneral } from "../../components/eventos/form/InfoGeneral";
import { ParkingInfo } from "../../components/eventos/form/ParkingInfo";

const EventoFuncionalPage = () => {
  const [visibility, setVisibility] = useState({
    InfoGeneral: false,
    Estacionamiento: false,
    Plazas: false,
  });

  const handleToggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-2/3 px-4">
        <div className="mb-4">
          <Titulo titulo="Nombre del Venue" />
        </div>

        <div className="mb-10">
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Datos generales del evento"
            />
            <button
              onClick={() => handleToggleVisibility("InfoGeneral")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.InfoGeneral ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.InfoGeneral && <InfoGeneral />}
        </div>

        <div className="mb-10 "> 
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Plazas"
              parrafo="Administre las plazas para el evento."
            />
            <button
              onClick={() => handleToggleVisibility("Plazas")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.Plazas ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.Plazas && <ParkingInfo />}
        </div>
      </div>
    </div>
  );
};

export { EventoFuncionalPage };
