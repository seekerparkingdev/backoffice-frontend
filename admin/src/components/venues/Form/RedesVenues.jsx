import { useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import VenueNav from "../VenueNav";
const RedesVenues = () => {
  const { id } = useParams();
  const [venueData, setVenueData] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    website: "",
  });

  const handleChange = (e) => {
    setVenueData({
      ...venueData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Redes Sociales */}
      <section className=" ">
        <div className="border-b-2 mt-3 mb-10">
          <h1 className="font-bold text-3xl mb-5">Venues</h1>
        </div>
        <VenueNav id={id}/>
        <div className="bg-white p-16 rounded-b-lg  mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: "facebook", label: "Facebook" },
              { id: "instagram", label: "Instagram" },
              { id: "twitter", label: "x" },
              { id: "website", label: "Web" },
            ].map(({ id, label }) => (
              <div key={id} className="relative space-y-1.5 mt-10">
                <input
                  id={id}
                  name={id}
                  placeholder={`${label}`}
                  value={venueData[id]}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[20px]"
                />
              </div>
            ))}
          </div>
          <div className=" flex justify-end items-end mt-8 ">
            <button className="px-6 py-2 bg-[#61B4CE] text-white rounded-xl">
              Guardar
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export { RedesVenues };
