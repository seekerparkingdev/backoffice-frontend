import { NavLink } from "react-router-dom";
const VenueNav = ({ id }) => {
  return (
    <div>
      {/* Contenedor de pestañas con estilo plano */}
      <div className="flex w-full gap-3">
        {[
          {
            name: "Información general",
            p: "Nombre, capacidad máxima, dirección y fotos.",
            path: `/venues/${id}`,
          },
          {
            name: "Redes sociales",
            p: "Complete la información de las redes sociales y el sitio web.",
            path: `/venues/redes/${id}`,
          },
          {
            name: " Estacionamiento   recomendado",
            p: "Ingresa los estacionamientos recomendados para el Venue",
            path: `/venues/estacionamientos/${id}`,
          },
          {
            name: "Eventos",
            p: "Vea la información de los diferentes eventos",
            path: `/venues/eventos/${id}`,
          },
        ].map((tab) => (
          <NavLink
            key={tab.name}
            to={tab.path}
            className={({ isActive }) =>
              `px-6 py-3 transition duration-200 ${
                isActive
                  ? "text-[#000000] bg-white flex-1 rounded-t-lg border-none"
                  : "text-[#86857D] bg-[#F3F3F3] flex-grow-0 rounded-t-lg text-center border-2 border-white"
              }`
            }
          >
            {({ isActive }) => (
              <div
                className={`flex flex-col ${
                  !isActive ? "items-center justify-center" : "border-b-0"
                }`}
              >
                <h1
                  className={` items-center justify-center  ${
                    isActive ? "text-xl font-bold" : "text-sm font-bold   "
                  }`}
                >
                  {tab.name}
                </h1>
                {isActive && (
                  <p className="text-sm font-normal text-[#9CA3AF] mt-1">
                    {tab.p}
                  </p>
                )}
              </div>
            )}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default VenueNav;
