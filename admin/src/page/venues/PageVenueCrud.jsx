import { useState } from "react";

import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
// COMPONENTES
import { Titulo } from "../../components/Titulo";
import { InfoGeneral} from "../../components/venues/InfoGeneral/InfoGeneral";
import { TituloParrafo } from "../../components/TituloParrafo";
import { Redes } from "../../components/venues/Redes/Redes";
import { Recomendado } from "../../components/venues/Recomendado/Recomendado";
import { VenueSetup } from "../../components/venues/VenueSetup/VenueSetup";
import { VenueEventos} from "../../components/venues/Grillas/VenueEventos";
import { NavLink, useParams } from "react-router-dom";

const PageVenueCrud = ({ id }) => {
  const url = useParams();
  console.log(url);

  const [visibility, setVisibility] = useState({
    InfoGeneral: false,
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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-2/3 px-4">
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
          {visibility.InfoGeneral && <InfoGeneral url={url} />}
        </div>

        {/* SEGUNDO PASO */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Redes Sociales"
              parrafo="Complete la información de las redes sociales y el sitio web"
            />
            <button
              onClick={() => handleToggleVisibility("redes")}
              className="p-2 rounded hover:bg-gray-200"
            >
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
            <button
              onClick={() => handleToggleVisibility("recomendado")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.recomendado ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.recomendado && <Recomendado url={url} />}
        </div>

        {/* CUARTO PASO */}
        {id !== "new" && (
          <div>
            <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
              <TituloParrafo
                titulo="Eventos de Autódromo de la Ciudad de Buenos Aires"
                parrafo="Vea la información de los diferentes eventos"
              />

              <button
                onClick={() => handleToggleVisibility("VenueEventos")}
                className="p-2 rounded hover:bg-gray-200"
              >
                {visibility.VenueEventos ? (
                  <BiSolidArrowToTop size={20} className="text-gray-600" />
                ) : (
                  <BiSolidArrowToBottom size={20} className="text-gray-600" />
                )}
              </button>
            </div>
            {visibility.VenueEventos && <VenueEventos />}
          </div>
        )}

        <div className="relative h-20">
          {id === "new" ? (
            <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
              Crear
            </button>
          ) : url.view === "view" ? (
            <NavLink to="/venues">
              <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
                Atrás
              </button>
            </NavLink>
          ) : (
            <button className="absolute top-4 right-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md">
              Guardar
            </button>
          )}
        </div>

        <div className="mt-6  ">
          <VenueSetup />
        </div>
      </div>
    </div>
  );
};

export { PageVenueCrud  };