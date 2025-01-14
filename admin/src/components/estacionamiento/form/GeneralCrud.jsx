import React, {useEffect } from "react";
import { useContext } from "react";
import { FormularioContext } from "../../../utils/estacionamiento/EstacionamientoContext";
import { useParams } from "react-router-dom";
import MapComponent from "../../venues/InfoGeneral/MapComponent";
import { getEstacionamiento } from "../../../services/ServiceEstacionamiento";

const GeneralCrud = () => {
  const { id } = useParams();
  const isEditing = id !== "new";
  const { datosFormulario, setDatosFormulario } = useContext(FormularioContext);

  useEffect(() => {
    const renderizado = async () => {
      try {
        if (isEditing) {
          const response = await getEstacionamiento();
          const parking = response.find(
            (estacionamiento) => estacionamiento.id === parseInt(id, 10)
          );
            console.log(parking)
          if (parking) {
            setDatosFormulario((prev) => ({
              ...prev,
              nombre: parking.nombre || "",
              propietario: parking.id_propietario || "",
              email: parking.email || "",
              descripcion: parking.texto || "",
              codigoLugar: parking.codigo || "",
              direccion: parking.direccion || "",
              ubicacion: parking.url_ubicacion || "",
              posicion: [
                parseFloat(parking.latitud) || -34.6037,
                parseFloat(parking.longitud) || -58.3816,
              ],
              portada: parking.path || null,
              recomendar: !!parking.recomendado,
              obligatorioLlaves: !!parking.requiere_dejar_llave,
              incluirServiceCharge: !!parking.incluir_service_charge,
              porcentajeServiceCharge: parseFloat(parking.porcentaje) || 12.0,
              horarioEspecial: parking.salida_especial || "00:00",
            }));
          } else {
            console.log("Estacionamiento no encontrado.");
          }
        }
      } catch (error) {
        console.error("Error al obtener el estacionamiento:", error);
      }
    };

    renderizado();
  }, [id, isEditing ]);

  const handleCambioInput = (e) => {
    const { name, value, type, checked } = e.target;
    setDatosFormulario({
      ...datosFormulario,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleActualizarMapa = (posicion) => {
    setDatosFormulario({ ...datosFormulario, posicion });
  };

  const handleArchivoSubido = (e) => {
    const file = e.target.files[0];
    setDatosFormulario({ ...datosFormulario, portada: file });
  };
  return (
    <div className="p-8 bg-white max-w-4xl mx-auto">
      <form className="space-y-8">
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
              name="nombre"
              value={datosFormulario.nombre}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              name="propietario"
              value={datosFormulario.propietario}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Mariano Silva">Mariano Silva</option>
            </select>
          </div>
        </div>

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
              name="email"
              value={datosFormulario.email}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              name="descripcion"
              value={datosFormulario.descripcion}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

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
              name="codigoLugar"
              value={datosFormulario.codigoLugar}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium mb-2"
            >
              Dirección (Ej: Humboldt 450, Villa Crespo):
            </label>
            <div className="flex items-center space-x-3">
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={datosFormulario.direccion}
                onChange={handleCambioInput}
                className="flex-grow px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => handleActualizarMapa(datosFormulario.posicion)}
                className="bg-blue-500 text-white py-3 px-6 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Actualizar Mapa
              </button>
            </div>
          </div>
        </div>

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
            name="ubicacion"
            value={datosFormulario.ubicacion}
            onChange={handleCambioInput}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

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
            name="portada"
            accept="image/*"
            onChange={handleArchivoSubido}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Seleccione la posición donde se encuentre el Venue o actualice el
            mapa mediante la dirección por coordenadas.
          </label>
          <div className="mt-6">
            <MapComponent
              position={datosFormulario.posicion}
              setPosition={handleActualizarMapa}
            />
          </div>
        </div>

        <div className="space-y-6 mt-8">
          <div className="flex items-center space-x-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="recomendar"
                name="recomendar"
                checked={datosFormulario.recomendar}
                onChange={handleCambioInput}
                className="h-5 w-5 text-blue-500"
              />
              <label htmlFor="recomendar" className="text-gray-700 font-medium">
                Recomendar
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="obligatorioLlaves"
                name="obligatorioLlaves"
                checked={datosFormulario.obligatorioLlaves}
                onChange={handleCambioInput}
                className="h-5 w-5 text-blue-500"
              />
              <label
                htmlFor="obligatorioLlaves"
                className="text-gray-700 font-medium"
              >
                Obligatorio dejar llaves
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="incluirServiceCharge"
                name="incluirServiceCharge"
                checked={datosFormulario.incluirServiceCharge}
                onChange={handleCambioInput}
                className="h-5 w-5 text-blue-500"
              />
              <label
                htmlFor="incluirServiceCharge"
                className="text-gray-700 font-medium"
              >
                Incluir Service Charge dentro del precio
              </label>
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
              value={datosFormulario.porcentajeServiceCharge}
              onChange={handleCambioInput}
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
              value={datosFormulario.horarioEspecial}
              onChange={handleCambioInput}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export { GeneralCrud };
