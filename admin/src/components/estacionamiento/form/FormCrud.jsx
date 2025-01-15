import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../../venues/InfoGeneral/MapComponent";
import { validarCampos } from "../../../utils/estacionamiento/Validacion";
// Servicios
import {
  getByIdEstacionamiento,
  editEstacionamiento,
  postEstacionamiento,
} from "../../../services/ServiceEstacionamiento";
const EstacionamientosForm = () => {
  const { id } = useParams();
  const isEditMode = id !== "new";

  const [formData, setFormData] = useState({
    text: "",
    name: "",
    owner_id: "",
    owners: "",
    email: "",
    address: "",
    code: "",
    location_url: "",
    path: "",
    recommended: 0,
    special_exit: 0,
    requires_key_drop: 0,
    include_service_charge: 0,
    service_charge: "",
    percentage: "70",
    usarHorarioEspecial: 0,
    horarioEspecial: "00:00",
  });
  useEffect(() => {
    const estacionamiento = async () => {
      if (isEditMode) {
        const response = await getByIdEstacionamiento(id);
        console.log("Data estacionamiento ", response.data);
        setFormData({
          name: response.data.nombre,
          owner_id: response.data.id_propietario,
          email: response.data.email,
          text: response.data.texto,
          percentage: response.data.porcentaje,
          code: response.data.codigo,
          address: response.data.direccion,
          location_url: response.data.url_ubicacion,
          service_charge: response.data.service_charge,
          recommended: response.data.recomendado,
          path: response.data.path,
          special_exit: response.data.estacionar_culata,
          requires_key_drop: response.data.requiere_dejar_llave,
          include_service_charge: response.data.incluir_service_charge,
          usarHorarioEspecial: response.data.salida_especial !== "00:00:00",
          horarioEspecial: response.data.salida_especial,
        });
        const plazasData = response.data.precios.map((precio) => ({
          plaza_type: getTipoPlaza(precio.id_tipo_plaza),
          quantity: precio.cantidad || 1,
          price: parseFloat(precio.precio),
          minimum: precio.minimo || 0,
          order: precio.orden_vista || 1,
          show_vehicle: precio.mostrar_vehiculo === 1,
        }));

        if (response.data.precios.length > 0) {
          setPlazas(plazasData);
        }
        setPosition([
          parseFloat(response?.data?.latitud),
          parseFloat(response?.data?.longitud),
        ]);
      }
    };

    estacionamiento();
  }, [id]);

  const getTipoPlaza = (id) => {
    switch (id) {
      case 1:
        return "Moto";
      case 2:
        return "Auto";
      case 3:
        return "Pickup";
      case 4:
        return "Bicicleta";
      case 5:
        return "SUV";
      case 6:
        return "Traffic";
      default:
        return "Desconocido";
    }
  };

  const [position, setPosition] = useState([-34.603722, -58.381592]);
  const [plazas, setPlazas] = useState([
    {
      plaza_type: "Moto",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 1,
      show_vehicle: 0,
    },
    {
      plaza_type: "Auto",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 2,
      show_vehicle: 0,
    },
    {
      plaza_type: "Pickup",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 3,
      show_vehicle: 0,
    },
    {
      plaza_type: "Bicicleta",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 4,
      show_vehicle: 0,
    },
    {
      plaza_type: "SUV",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 5,
      show_vehicle: 0,
    },
    {
      plaza_type: "Traffic",
      quantity: 1,
      price: 0,
      minimum: 0,
      order: 6,
      show_vehicle: 0,
    },
  ]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      path: e.target.type[0],
    });
  };

  const handlePlazaChange = (index, field, value) => {
    const updatedPlazas = [...plazas];

    if (field === "show_vehicle") {
      updatedPlazas[index][field] = value.target.checked;
    } else {
      updatedPlazas[index][field] = value;
    }

    setPlazas(updatedPlazas);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditMode) {
      const payload = {
        ...formData,
        latitude: position[0],
        longitude: position[1],
        prices: plazas.map((plaza, index) => ({
          plaza_type_id: index + 1,
          price: plaza.price,
          minimum: plaza.minimum,
          quantity: plaza.quantity,
          order: plaza.order,
          show_vehicle: plaza.show_vehicle,
        })),
      };
      // Validar los campos antes de proceder
      if (!validarCampos(payload)) {
        return; // Si la validación falla, no continuamos
      }

      try {
        const response = await editEstacionamiento(id, payload);

        // Verificar estado de respuesta
        if (response.status === 200) {
          // Mostrar alerta de éxito
          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "El estacionamiento ha sido editado correctamente.",
          });
        } else {
          // Mostrar alerta de fallo
          Swal.fire({
            icon: "warning",
            title: "Algo salió mal",
            text: `No se pudo editar el estacionamiento. Código de respuesta: ${response.status}`,
          });
        }
      } catch (error) {
        // Mostrar alerta de error
        Swal.fire({
          icon: "error",
          title: "Error",
          text: `Ocurrió un error al editar el estacionamiento: ${error.message}`,
        });
        console.error("Error detallado:", error);
      }
    } else {
      const payload = {
        ...formData,
        latitude: position[0],
        longitude: position[1],
        prices: plazas.map((plaza, index) => ({
        plaza_type_id: index + 1,
        price: plaza.price,
        minimum: plaza.minimum,
        quantity: plaza.quantity,
        order: plaza.order,
        show_vehicle: plaza.show_vehicle,
        })),
      };
      console.log(payload);
      // Validar los campos antes de proceder
      if (!validarCampos(payload)) {
        return; // Si la validación falla, no continuamos
      }

      try {
        const response = await postEstacionamiento(payload);

        if (response.status === 200) {
          console.log("creado correctamente", response);
        } else {
          console.log("creado mal", response);
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-center mb-6">
        {isEditMode ? "Editar Estacionamiento" : "Crear Estacionamiento"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" max-w-9xl mx-auto bg-white shadow-md rounded-lg p-8 space-y-6"
      >
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Información General
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">Nombre</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600">Propietario</label>
              <select
                name="owners"
                value={formData.owners}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              >
                <option value="">Seleccione</option>
                <option value="1">Opción 1</option>
                <option value="2">Opción 2</option>
                <option value="3">Opción 3</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-600">
                Email para Notificaciones
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600">Texto Descriptivo</label>
              <input
                type="text"
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-600">
                Código para generación de plazas
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-gray-600">Dirección</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">URL de Ubicación</label>
            <input
              type="text"
              name="location_url"
              value={formData.location_url}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mt-5">
            <MapComponent position={position} setPosition={setPosition} />
          </div>
          <div className="mt-4">
            <label className="block text-gray-600">Foto de Portada</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="recommended"
                checked={formData.recommended == 1 ? true : false}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label className="ml-2 text-gray-600">Recomendar</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="requires_key_drop"
                checked={formData.requires_key_drop == 1 ? true : false}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label className="ml-2 text-gray-600">
                Obligatorio Dejar Llaves
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="special_exit"
                checked={formData.special_exit == 1 ? true : false}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label className="ml-2 text-gray-600">Estacionar de Culata</label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                name="include_service_charge"
                checked={formData.include_service_charge == 1 ? true : false}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label className="ml-2 text-gray-600">
                Incluir Service Charge dentro del precio
              </label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">Service Charge (%)</label>
            <input
              type="number"
              name="service_charge"
              value={formData.service_charge}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>

          <div className="mt-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="usarHorarioEspecial"
                checked={formData.usarHorarioEspecial == 1 ? true : false}
                onChange={handleInputChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
              />
              <label className="ml-2 text-gray-600">
                Usar Horario Especial de Salida
              </label>
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-gray-600">
              Horario Especial de Salida
            </label>
            <input
              type="time"
              name="horarioEspecial"
              value={formData.horarioEspecial}
              onChange={handleInputChange}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Precios de las Plazas
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Añada los precios para los diferentes tipos de plaza.
          </p>
          <table className="w-full border-collapse border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2">
                  Tipo de Plaza
                </th>
                <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                <th className="border border-gray-300 px-4 py-2">Precio</th>
                <th className="border border-gray-300 px-4 py-2">Mínimo</th>
                <th className="border border-gray-300 px-4 py-2">Orden</th>
                <th className="border border-gray-300 px-4 py-2">Activo</th>
              </tr>
            </thead>
            <tbody>
              {plazas.map((plaza, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">
                    {plaza.plaza_type}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={plaza.quantity}
                      onChange={(e) =>
                        handlePlazaChange(
                          index,
                          "quantity",
                          Number(e.target.value)
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={plaza.price}
                      onChange={(e) =>
                        handlePlazaChange(
                          index,
                          "price",
                          Number(e.target.value)
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={plaza.minimum}
                      onChange={(e) =>
                        handlePlazaChange(
                          index,
                          "minimum",
                          Number(e.target.value)
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <input
                      type="number"
                      value={plaza.order}
                      onChange={(e) =>
                        handlePlazaChange(
                          index,
                          "order",
                          Number(e.target.value)
                        )
                      }
                      className="w-full p-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                    />
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <input
                      type="checkbox"
                      checked={plaza.show_vehicle}
                      onChange={(e) =>
                        handlePlazaChange(index, "show_vehicle", e)
                      }
                      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <button
          type="submit"
          className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
        >
          {isEditMode ? "Guardar Cambios" : "Crear Estacionamiento"}
        </button>
      </form>
    </div>
  );
};
export default EstacionamientosForm;
