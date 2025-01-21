import { IoMdAddCircle } from "react-icons/io";
import MapComponent from "../MapComponent";
import { useState } from "react";
import { VenueSetup } from "../VenueSetup/VenueSetup";

const CrudVenue = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816]);
  const [estacionamientos, setEstacionamientos] = useState([]);

  const handleAddEstacionamiento = () => {
    setEstacionamientos([
      ...estacionamientos,
      { nombre: "", distancia: "", acuerdoPorcentaje: "", acuerdoSumaFija: "" },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updated = estacionamientos.map((item, i) =>
      i === index ? { ...item, [field]: value } : item
    );
    setEstacionamientos(updated);
  };
  const TextAreaField = ({ label, ...props }) => (
    <div className="relative space-y-1.5">
      <label className="block text-sm font-medium text-gray-700 tracking-wide">
        {label}
      </label>
      <textarea
        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[100px]"
        {...props}
      />
    </div>
  );
  const InputField = ({ label, type = "text", ...props }) => (
    <div className="relative space-y-1.5">
      <label className="block text-sm font-medium text-gray-700 tracking-wide">
        {label}
      </label>
      <input
        type={type}
        className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm"
        {...props}
      />
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-10">
      {/* Header Section */}
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Gestión de Venue
        </h1>
      </div>

      {/* Main Form */}
      <form className="space-y-12">
        {/* Información General */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Información General
            </h3>
            <p className="text-gray-600 mt-1">
              Complete los datos básicos del venue
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField label="Nombre" placeholder="Ingrese el nombre" />
            <InputField
              label="Capacidad Máxima"
              type="number"
              placeholder="Ej: 1000"
            />
            <InputField label="Dominio" placeholder="ejemplo.com" />
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 tracking-wide">
                Barra de búsqueda en home
              </label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800">
                <option value="">Seleccione una opción</option>
                <option value="1">Habilitar</option>
                <option value="0">Deshabilitar</option>
              </select>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-600">
              Textos  
            </h4>
            <TextAreaField
              label="Texto de Inicio"
              placeholder="Ej: Reservá tu parking seguro, llegá tranquilo."
              defaultValue="Ej:Reservá tu parking seguro, llegá tranquilo."
            />

            <TextAreaField
              label="Texto de Dirección"
              placeholder="Ingrese la dirección completa"
              defaultValue="Ej:Av. Coronel Roca 6902, Ciudad de Buenos Aires"
            />

            <TextAreaField
              label="Texto de Head"
              
              defaultValue="Ej:Av. Coronel Roca 6902, Ciudad de Buenos Aires"
            />
          </div>
        </section>

        {/* Ubicación */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Ubicación</h3>
            <p className="text-gray-600 mt-1">
              Establezca la ubicación del venue
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Ingrese la dirección"
                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
              <button
                type="button"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                Actualizar Mapa
              </button>
            </div>

            <div className="h-[300px] rounded-lg overflow-hidden border border-gray-200">
              <MapComponent position={position} setPosition={setPosition} />
            </div>
          </div>
        </section>

        {/* Estacionamientos */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Estacionamientos Recomendados
            </h3>
            <p className="text-gray-600 mt-1">
              Gestione los estacionamientos asociados
            </p>
          </div>

          <div className="flex gap-4">
            <select className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
              <option value="">Seleccione un estacionamiento</option>
            </select>
            <button
              type="button"
              onClick={handleAddEstacionamiento}
              className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              <IoMdAddCircle size={20} />
              Añadir
            </button>
          </div>

          <div className="space-y-6">
            {estacionamientos.map((est, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-lg"
              >
                <InputField
                  value={est.nombre}
                  label="Nombre"
                  onChange={(e) =>
                    handleInputChange(index, "nombre", e.target.value)
                  }
                />
                <InputField
                  value={est.distancia}
                  label="Distancia (mts)"
                  type="number"
                  onChange={(e) =>
                    handleInputChange(index, "distancia", e.target.value)
                  }
                />
                <InputField
                  value={est.acuerdoPorcentaje}
                  label="Acuerdo %"
                  type="number"
                  onChange={(e) =>
                    handleInputChange(
                      index,
                      "acuerdoPorcentaje",
                      e.target.value
                    )
                  }
                />
                <InputField
                  value={est.acuerdoSumaFija}
                  label="Acuerdo Suma Fija"
                  type="number"
                  onChange={(e) =>
                    handleInputChange(index, "acuerdoSumaFija", e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </section>

        {/* Redes Sociales */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Redes Sociales
            </h3>
            <p className="text-gray-600 mt-1">
              Configure los enlaces a redes sociales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <InputField label="Facebook" placeholder="URL de Facebook" />
            <InputField label="Instagram" placeholder="URL de Instagram" />
            <InputField label="Twitter" placeholder="URL de Twitter" />
            <InputField label="Sitio web" placeholder="URL del sitio web" />
          </div>
        </section>

        {/* Eventos Table */}
        <section className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">Eventos</h3>
            <p className="text-gray-600 mt-1">
              Vea la información de los diferentes eventos
            </p>
            {/* <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <IoMdAddCircle className="mr-2" />
            Nuevo Evento
          </button> */}
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-700">
                    Evento
                  </th>
                  <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-700">
                    Fecha
                  </th>
                  <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-700">
                    Descripción
                  </th>
                  <th className="px-6 py-3.5 text-left text-sm font-semibold text-gray-700">
                    Opciones
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition-colors duration-200">
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Carrera Nacional
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    15/02/2025
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">
                    Evento principal del mes.
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200">
                      Ver detalles
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Submit Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            Guardar Cambios
          </button>
        </div>

        {/* Venue Setup */}
        <section className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Configuración del Venue
            </h3>
            {/* <p className="text-gray-600 mt-1">Configure los parámetros adicionales del venue</p> */}
          </div>

          <VenueSetup />
        </section>
      </form>
    </div>
  );
};

export default CrudVenue;
