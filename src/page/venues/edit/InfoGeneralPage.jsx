import { useState } from "react";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
// COMPONENTES
import { Titulo } from "../../../components/Titulo";
import { InfoForm } from "../../../components/venues/edit/InfoForm";
import { TituloParrafo } from "../../../components/venues/edit/TituloParrafo";
import { Redes } from "../../../components/venues/edit/Redes";
import { Recomendado } from "../../../components/venues/edit/Recomendado";
import { VenueSetup } from "../../../components/venues/VenueTable";

const InfoGeneralPage = ({ id }) => {
  const [visibility, setVisibility] = useState({
    infoForm: false,
    redes: false,
    recomendado: false,
  });

  const handleToggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-2/3">
        <div className="mb-4">
          <Titulo titulo="Venues" />
        </div>

        {/* PRIMER PASO */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Nombre, capacidad máxima, dirección y fotos"
            />
            <button onClick={() => handleToggleVisibility("infoForm")}>
              {visibility.infoForm ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.infoForm && <InfoForm />}
        </div>

        {/* SEGUNDO PASO */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Redes Sociales"
              parrafo="Complete la información de las redes sociales y el sitio web"
            />
            <button onClick={() => handleToggleVisibility("redes")}>
              {visibility.redes ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.redes && <Redes />}
        </div>

        {/* TERCER PASO */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Estacionamientos Recomendados"
              parrafo="Ingrese los estacionamientos recomendados para el Venue"
            />
            <button onClick={() => handleToggleVisibility("recomendado")}>
              {visibility.recomendado ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.recomendado && <Recomendado />}
        </div>

        {/* CUARTO PASO */}
        {id !== "new" && (
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Eventos de Autódromo de la Ciudad de Buenos Aires"
              parrafo="Vea la información de los diferentes eventos"
            />
            <BiSolidArrowToBottom size={20} className="text-gray-600" />
          </div>
        )}
        <div className="mt-6">
          <VenueSetup />
        </div>
      </div>
    </div>
  );
};

export { InfoGeneralPage };
