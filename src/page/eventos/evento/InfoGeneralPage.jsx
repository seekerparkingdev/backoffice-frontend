import { useState } from "react";
import { Titulo } from "../../../components/Titulo";
import { InfoForm } from "../../../components/venues/InfoForm/InfoForm";
import { TituloParrafo } from "../../../components/venues/TituloParrafo";
import { BiSolidArrowToBottom } from "react-icons/bi";
import { BiSolidArrowToTop } from "react-icons/bi";
const InfoGeneralPage = ({ id }) => {
  const [isInfoFormVisible, setIsInfoFormVisible] = useState(false);

  const handleToggleClick = (event) => {
    event.preventDefault();
    setIsInfoFormVisible((prevState) => !prevState);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-2/3">
        <div className="mb-4">
          <Titulo titulo="Venues" />
        </div>
        <div>
          <div>
            <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center justify-between">
              <TituloParrafo
                titulo="Información General"
                parrafo="Nombre, capacidad máxima, dirección y fotos"
              />
              <button onClick={handleToggleClick}>
                {isInfoFormVisible ? (
                  <BiSolidArrowToTop size={20} className="text-gray-600" />
                ) : (
                  <BiSolidArrowToBottom size={20} className="text-gray-600" />
                )}
              </button>
            </div>

            {isInfoFormVisible && <InfoForm />}
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Redes Sociales"
              parrafo="Complete la información de las redes sociales y el sitio web"
            />
            <BiSolidArrowToBottom size={20} className="text-gray-600" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Estacionamientos Recomendados"
              parrafo="Ingrese los estacionamientos recomendados para el Venue"
            />
            <BiSolidArrowToBottom size={20} className="text-gray-600" />
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 mb-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Eventos de Autódromo de la Ciudad de Buenos Aires"
              parrafo="Vea la información de los diferentes eventos"
            />
            <BiSolidArrowToBottom size={20} className="text-gray-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { InfoGeneralPage };
