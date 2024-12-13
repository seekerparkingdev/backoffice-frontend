import { useState } from "react";
import { BiSolidArrowToTop, BiSolidArrowToBottom } from "react-icons/bi";
import { Titulo } from "../../components/Titulo";
import { TituloParrafo } from "../../components/TituloParrafo";
import { InfoGeneral } from "../../components/eventos/form/InfoGeneral/InfoGeneral";
import { ParkingInfo } from "../../components/eventos/form/ParkingInfo/ParkingInfo";
import { EstacionamientoGrilla } from "../../components/eventos/grilla/Estacionamiento/EstacionamientoGrilla";

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
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6 max-w-7xl mx-auto">
        <div className="mb-6">
          <Titulo titulo="Nombre del Venue" />
        </div>

        <div className="mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
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

        <div className="mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Estacionamiento"
              parrafo="Ingrese los estacionamientos para el evento."
            />
            <button
              onClick={() => handleToggleVisibility("Estacionamiento")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.Estacionamiento ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.Estacionamiento && <EstacionamientoGrilla />}
        </div>

        <div className="mb-10">
          <div className="bg-white shadow-md rounded-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Datos generales del evento."
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
      </div>
    </div>
  );
};

export { EventoFuncionalPage };
