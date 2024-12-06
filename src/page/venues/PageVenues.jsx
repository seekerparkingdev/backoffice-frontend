import { NavLink } from "react-router-dom";
import { Titulo } from "../../components/Titulo";
import { VenueGrilla } from "../../components/venues/Grillas/VenueGrilla";

const  PageVenues  = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <Titulo titulo="Venues" />
          <NavLink to="/venues/new">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Nuevo
            </button>
          </NavLink>
        </div>
        <VenueGrilla />
      </div>
    </div>
  );
};

export { PageVenues  };
