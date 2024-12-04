import { IoMdAddCircle } from "react-icons/io";
const Recomendado = () => {
  return (
    <div className="mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-bl-lg">
      <form action="onSubmit" className="space-y-6">
        <div className="grid grid-cols-4 gap-4 items-end">
          <div className="col-span-3">
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium"
            >
              Estacionamiento
            </label>

            <input
              type="text"
              id="direccion"
              name="direccion"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="col-span-1">
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
