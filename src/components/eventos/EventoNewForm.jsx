const EventoNewForm = () => {
  return (
    <div className="max-w-4xl mx-auto mt-10 p-6   rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6">Nuevo Evento</h1>

      <div className="border border-gray-300 rounded-lg p-4">
        <h2 className="text-lg font-semibold">Información General</h2>
        <p className="text-sm text-gray-500 mb-4">
          Datos generales del evento.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="flex flex-col">
            <label htmlFor="nombre" className="text-sm font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Nombre del evento"
            />
          </div>

           
          <div className="flex flex-col">
            <label htmlFor="venue" className="text-sm font-medium">
              Venue
            </label>
            <select
              id="venue"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">Seleccione un Venue</option>
              <option value="1">Venue 1</option>
              <option value="2">Venue 2</option>
            </select>
          </div>

         
          <div className="flex flex-col">
            <label htmlFor="fecha" className="text-sm font-medium">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
 
          <div className="flex flex-col">
            <label htmlFor="hora" className="text-sm font-medium">
              Hora
            </label>
            <input
              type="time"
              id="hora"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        
          <div className="flex flex-col">
            <label htmlFor="tiempoAntes" className="text-sm font-medium">
              T. Antes del Evento
            </label>
            <input
              type="text"
              id="tiempoAntes"
              placeholder="02:00"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        
          <div className="flex flex-col">
            <label htmlFor="tiempoDespues" className="text-sm font-medium">
              T. Después del Evento
            </label>
            <input
              type="text"
              id="tiempoDespues"
              placeholder="04:00"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        
          <div className="flex flex-col">
            <label htmlFor="horaLimite" className="text-sm font-medium">
              Hora Límite de Compra
            </label>
            <input
              type="datetime-local"
              id="horaLimite"
              className="mt-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

         
          <div className="flex flex-col">
            <label htmlFor="fotoPortada" className="text-sm font-medium">
              Foto de Portada
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="fotoPortada"
                className="mt-1 flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="URL de la imagen"
              />
              <button className="px-4 py-2 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300">
                Recortar
              </button>
            </div>
          </div>
 
          <div className="flex flex-col">
            <label htmlFor="tipoEvento" className="text-sm font-medium">
              Tipo Evento
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="tipoEvento"
                className="mt-1 flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="Tipo de Evento"
              />
              <button className="px-3 py-2 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300">
                +
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Botón Guardar */}
      <div className="flex justify-end mt-6">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Guardar
        </button>
      </div>
    </div>
  );
};

export { EventoNewForm };
