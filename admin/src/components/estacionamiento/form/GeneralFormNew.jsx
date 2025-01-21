import MapComponent from "../../venues/MapComponent";
import { useEstacionamiento } from "../../../utils/estacionamiento/EstacionamientoContext";
const GeneralFormNew = () => {
  const { formState, handleInputChange, handlePositionChange } =
    useEstacionamiento();

  return (
    <div className="p-8 bg-white max-w-4xl mx-auto">
      <form className="space-y-8">
        {/* Información básica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="nombre"
              className="block text-gray-700 font-medium mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              value={formState.nombre}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="propietario"
              className="block text-gray-700 font-medium mb-2"
            >
              Propietario:
            </label>
            <select
              id="propietario"
              value={formState.propietario}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            >
              <option value="">Seleccione...</option>
              {/* Agrega más opciones de propietario */}
            </select>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email para Notificaciones:
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="descripcion"
              className="block text-gray-700 font-medium mb-2"
            >
              Texto descriptivo:
            </label>
            <input
              type="text"
              id="descripcion"
              value={formState.descripcion}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        {/* Información de ubicación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="codigoLugar"
              className="block text-gray-700 font-medium mb-2"
            >
              Código para generación de plazas:
            </label>
            <input
              type="text"
              id="codigoLugar"
              value={formState.codigoLugar}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium mb-2"
            >
              Dirección:
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                id="direccion"
                value={formState.direccion}
                onChange={handleInputChange}
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg"
              />
              <button
                type="button"
                className="bg-blue-500 text-white py-3 px-6 rounded-r-lg hover:bg-blue-600"
              >
                Actualizar Mapa
              </button>
            </div>
          </div>
        </div>

        {/* URL de Ubicación */}
        <div>
          <label
            htmlFor="ubicacion"
            className="block text-gray-700 font-medium mb-2"
          >
            URL de Ubicación:
          </label>
          <input
            type="text"
            id="ubicacion"
            value={formState.ubicacion}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Foto de portada */}
        <div>
          <label
            htmlFor="portada"
            className="block text-gray-700 font-medium mb-2"
          >
            Foto de Portada:
          </label>
          <input
            type="file"
            id="portada"
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Mapa */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Seleccione la posición en el mapa:
          </label>
          <MapComponent
            position={formState.position}
            setPosition={handlePositionChange}
          />
        </div>

        {/* Opciones */}
        <div className="space-y-6 mt-8">
          <div className="flex items-center space-x-6">
            {Object.keys(formState.opciones).map((key) => (
              <div className="flex items-center" key={key}>
                <input
                  type="checkbox"
                  id={key}
                  checked={formState.opciones[key]}
                  onChange={handleInputChange}
                  className="h-5 w-5"
                />
                <label htmlFor={key} className="ml-2 text-gray-700">
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div>
          <label
            htmlFor="porcentajeServiceCharge"
            className="block text-gray-700 font-medium mb-2"
          >
            Service Charge (%):
          </label>
          <input
            type="number"
            id="porcentajeServiceCharge"
            name="porcentajeServiceCharge"
            value={formState.porcentajeServiceCharge}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="horarioEspecial"
            className="block text-gray-700 font-medium mb-2"
          >
            Horario Especial de Salida:
          </label>
          <input
            type="time"
            id="horarioEspecial"
            name="horarioEspecial"
            value={formState.horarioEspecial}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </form>
    </div>
  );
};

export { GeneralFormNew };
