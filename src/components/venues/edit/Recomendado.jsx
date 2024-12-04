import { IoMdAddCircle } from "react-icons/io";
import { useState } from "react";
const Recomendado = () => {
const [recomendado, setRecomendado] = useState({
  estacionamiento:""
});
 const handleInputChange = (event) => {
  const {name, value} = event.target
    setRecomendado({...recomendado, [name]: value});
  };
  console.log(recomendado)
  return (
    <div className="mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-bl-lg">
      <form action="onSubmit" className="space-y-6">
        {/* Grid responsivo: 1 columna en móviles, 2 columnas en pantallas medianas y 4 columnas en grandes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="col-span-1 sm:col-span-3">
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium"
            >
              Estacionamiento
            </label>

            <input
              type="text"
              id="estacionamiento"
              onChange={handleInputChange}
              name="estacionamiento"
              value={recomendado.estacionamiento}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1 sm:col-span-1 flex justify-start sm:justify-center">
            <button
              type="button"
              className="flex items-center justify-center gap-2 px-20 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <IoMdAddCircle size={20} />
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export { Recomendado };
