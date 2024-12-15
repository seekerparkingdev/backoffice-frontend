const EventoNewForm = () => {
  return (
    <div className="flex justify-center bg-gray-100">
      <div className="p-6 min-h-screen w-full lg:w-3/5 max-w-7xl">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl font-bold text-gray-800">Nuevo Evento</h1>
        </div>

        <div className="w-full bg-white border border-gray-300 rounded-lg shadow-sm p-6">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="nombre"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Nombre del evento"
              />
            </div>

            <div>
              <label
                htmlFor="venue"
                className="block text-sm font-medium text-gray-700"
              >
                Venue
              </label>
              <select
                id="venue"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <option value="">Seleccione un Venue</option>
                <option value="1">Venue 1</option>
                <option value="2">Venue 2</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="fecha"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha
              </label>
              <input
                type="date"
                id="fecha"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="hora"
                className="block text-sm font-medium text-gray-700"
              >
                Hora
              </label>
              <input
                type="time"
                id="hora"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="tiempoAntes"
                className="block text-sm font-medium text-gray-700"
              >
                Tiempo Antes del Evento
              </label>
              <input
                type="text"
                id="tiempoAntes"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="02:00"
              />
            </div>

            <div>
              <label
                htmlFor="tiempoDespues"
                className="block text-sm font-medium text-gray-700"
              >
                Tiempo Después del Evento
              </label>
              <input
                type="text"
                id="tiempoDespues"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="04:00"
              />
            </div>

            <div>
              <label
                htmlFor="horaLimite"
                className="block text-sm font-medium text-gray-700"
              >
                Hora Límite de Compra
              </label>
              <input
                type="datetime-local"
                id="horaLimite"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label
                htmlFor="fotoPortada"
                className="block text-sm font-medium text-gray-700"
              >
                Foto de Portada
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="fotoPortada"
                  className="flex-1 mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="URL de la imagen"
                />
                <button className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300">
                  Recortar
                </button>
              </div>
            </div>
            <div>
              <label
                htmlFor="tipoEvento"
                className="block text-sm font-medium text-gray-700"
              >
                Tipo de Evento
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  id="tipoEvento"
                  className="flex-1 mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Tipo de Evento"
                />
                <button className="px-4 py-2 bg-gray-200 rounded-lg shadow hover:bg-gray-300">
                  +
                </button>
              </div>
            </div>
          </form>
          <div className="mt-6 flex justify-end">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EventoNewForm };
