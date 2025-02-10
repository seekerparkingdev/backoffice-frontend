import Swal from "sweetalert2";
import { IoMdAddCircle } from "react-icons/io";
import MapComponent from "../MapComponent";
import { useState } from "react";
import { VenueSetup } from "../VenueSetup/VenueSetup";
import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  getVenueById,
  postVenueNew,
  putVenueEdit,
} from "../../../services/ServiceVenues";
const CrudVenue = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816]);
  const [venueData, setVenue] = useState({
    company_id: "",
    address: "",
    address_text: "",
    cover_path: "",
    description_text: "",
    domain: "",
    facebook: "",
    head_text: "",
    id: null,
    instagram: "",
    latitude: "",
    logo_path: "",
    longitude: "",
    max_capacity: "",
    name: "",
    parkings: [],
    search_enabled: 0,
    suspend_at: "",
    suspend_by: null,
    thumbnail_path: "",
    twitter: "",
    website: "",
  });
  console.log(venueData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const isEditMode = id !== "new";

  useEffect(() => {
    const fetchVenueData = async (id) => {
      const venueid = Number(id);
      try {
        setLoading(true);
        const data = await getVenueById(venueid);
        console.log(data);
        if (data.latitude.length > 0 && data.longitude.length > 0) {
          setPosition([Number(data.latitude), Number(data.longitude)]);
        }
        console.log("Esta es la data", data);
        setVenue(data);
      } catch (err) {
        console.error("Error al obtener los datos del venue:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Solo llamamos a la API si estamos en modo de edición
    if (isEditMode && id !== "new") {
      fetchVenueData(id);
    } else {
      // Si es un nuevo venue, no necesitamos cargar datos desde la API
      setLoading(false);
    }
  }, [id, isEditMode]);

  if (loading) {
    return <p>Cargando...</p>; // Muestra el cargando solo cuando estamos en modo de edición
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    setVenue((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };
  const handleParkingChange = (index, e) => {
    const { name, value } = e.target;

    setVenue((prev) => {
      const updatedParkings = [...prev.parkings];
      updatedParkings[index] = { ...updatedParkings[index], [name]: value };
      return { ...prev, parkings: updatedParkings };
    });
  };

  

  const handleSubmit = async (e) => {
    if (isEditMode) {
      try {
        e.preventDefault();

        if (!venueData.id || !venueData.name || !venueData.address) {
          throw new Error(
            "Faltan datos obligatorios para actualizar el venue."
          );
        }

        if (isEditMode) {
          const response = await putVenueEdit(venueData.id, venueData);
          console.log("Venue actualizado:", response);

          Swal.fire({
            icon: "success",
            title: "¡Éxito!",
            text: "Venue actualizado correctamente.",
          });
        }
      } catch (error) {
        console.error("Error al enviar el formulario:", error.message);
        alert(`Error: ${error.message}`); // Feedback en caso de error
      }
    } else {
      // Crear nuevo venue
      try {
        e.preventDefault();
        const response = await postVenueNew(venueData);
        console.log("Venue creado:", response);
      } catch (error) {
        console.log("Venue no  creado:", error);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white shadow-lg rounded-xl space-y-10">
      <div className="border-b border-gray-200 pb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
          Gestión de Venue
        </h1>
      </div>
      {/* Main Form */}
      <form className="space-y-12" onSubmit={handleSubmit}>
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
            <div className="relative space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Nombre
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={venueData.name}
                onChange={handleChange}
                placeholder="Ingrese el nombre"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm"
              />
            </div>
            <div className="relative space-y-1.5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Capacidad Maxima
              </label>
              <input
                id="name"
                type="number"
                name="max_capacity"
                value={venueData.max_capacity}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm"
              />
            </div>
            <div className="relative space-y-1.5">
              <label
                htmlFor="domain"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Dominio (No incluir protocolo https/http)
              </label>
              <input
                id="domain"
                type="text"
                name="domain"
                value={venueData.domain}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm"
              />
            </div>
            <div className="space-y-1.5">
              <label className="block text-sm font-medium text-gray-700 tracking-wide">
                Barra de búsqueda en home
              </label>
              <select className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800">
                <option>Seleccione unas de estas opciones</option>
                <option value={venueData.search_enabled}>Habilitar</option>
                <option value={venueData.search_enabled}>Deshabilitar</option>
              </select>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-lg font-medium text-gray-600">Textos</h4>
            <div className="relative space-y-1.5">
              <label
                htmlFor="description_text"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Texto de Inicio
              </label>
              <input
                id="description_text"
                name="description_text"
                value={venueData.description_text}
                onChange={handleChange}
                placeholder="Ej: Reservá tu parking seguro, llegá tranquilo."
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[30px]"
              />
            </div>
            <div className="relative space-y-1.5">
              <label
                htmlFor="address_text"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Texto de direccion
              </label>
              <input
                id="address_text"
                name="address_text"
                value={venueData.address_text}
                onChange={handleChange}
                placeholder="Ingrese la dirección completa"
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[30px]"
              />
            </div>
            <div className="relative space-y-1.5">
              <label
                htmlFor="description_text"
                className="block text-sm font-medium text-gray-700 tracking-wide"
              >
                Texto de Head
              </label>
              <textarea
                id="head_text"
                name="head_text"
                value={venueData.head_text}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[100px]"
              />
            </div>
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
                onChange={handleChange}
                value={venueData.address}
                name="address"
              />
              <button
                type="button"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
              >
                Actualizar Mapa
              </button>
            </div>

            <div className="h-[300px] rounded-lg overflow-hidden border border-gray-200">
              <MapComponent
                position={position}
                setPosition={(newPosition) => {
                  setPosition(newPosition);
                  setVenue((prevVenueData) => ({
                    ...prevVenueData,
                    latitude: String(newPosition[0]),
                    longitude: String(newPosition[1]),
                  }));
                }}
              />
            </div>
          </div>
        </section>

        {/* Eventos Table */}
        <div className="flex justify-end pt-6">
          <NavLink
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg mr-3 hover:bg-blue-700 transition-colors duration-200"
            to={`/venues/estacionamientos/${id}`}
          >
            Estacionamientos
          </NavLink>

          <NavLink
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg mr-3 hover:bg-blue-700 transition-colors duration-200"
            to={`/venues/redes/${id}`}
          >
            Redes
          </NavLink>
          <NavLink
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg mr-3 hover:bg-blue-700 transition-colors duration-200"
            to={`/venues/eventos/${id}`}
          >
            Eventos
          </NavLink>

          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
          >
            {venueData.id ? "Actualizar Lugar" : "Crear Lugar"}
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
