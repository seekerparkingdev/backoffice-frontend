const Redes = () => {
  return (
    <div className="mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-bl">
      <form action="onSubmit" className="space-y-6">
        <div className="grid grid-cols-4 gap-4 items-end">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium">
              Faceboock:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="capacidad"
              className="block text-gray-700 font-medium"
            >
              Instagram
            </label>
            <input
              type="number"
              id="capacidad"
              name="capacidad"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium"
            >
              Twitter:
            </label>

            <input
              type="text"
              id="direccion"
              name="direccion"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium"
            >
              Sitio web:
            </label>

            <input
              type="text"
              id="direccion"
              name="direccion"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { Redes };
