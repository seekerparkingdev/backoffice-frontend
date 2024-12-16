import React, { useState } from "react";
const Redes = () => {
  const [redes, setRedes] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    website: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRedes({ ...redes, [name]: value });
  };

  return (
    <div className="mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-bl">
      <form action="onSubmit" className="space-y-6">
        {/* Responsividad con Tailwind */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          <div>
            <label
              htmlFor="facebook"
              className="block text-gray-700 font-medium"
            >
              Facebook:
            </label>
            <input
              type="text"
              id="facebook"
              name="facebook"
              onChange={handleInputChange}
              value={redes.facebook}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="instagram"
              className="block text-gray-700 font-medium"
            >
              Instagram:
            </label>
            <input
              type="text"
              id="instagram"
              name="instagram"
              onChange={handleInputChange}
              value={redes.instagram}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="twitter"
              className="block text-gray-700 font-medium"
            >
              Twitter:
            </label>
            <input
              type="text"
              id="twitter"
              value={redes.twitter}
              onChange={handleInputChange}
              name="twitter"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="website"
              className="block text-gray-700 font-medium"
            >
              Sitio web:
            </label>
            <input
              type="text"
              id="website"
              onChange={handleInputChange}
              value={redes.website}
              name="website"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { Redes };
