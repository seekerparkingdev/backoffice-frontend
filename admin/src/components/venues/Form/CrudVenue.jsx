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
import VenueNav from "../VenueNav";
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
    <div className="max-w-7xl mx-auto">
      <div className="border-b-2 mb-5 p-2">
        <h1 className="text-3xl font-bold mb-3">Venues</h1>
      </div>
      <VenueNav id={id}/>
      {/* Main Form */}
      <form
        className="space-y-12 bg-white shadow-lg max-w-7xl mx-auto p-8 rounded-b-xl "
        onSubmit={handleSubmit}
      >
        {/* Información General */}
        <section className="space-y-6">
          <div className="space-y-4">
            {/* Primera fila: Nombre y Dirección */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nombre
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={venueData.name}
                  onChange={handleChange}
                  placeholder="Movistar Arena"
                  className="w-full px-3 py-2 bg-[#F0F2F6] border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="flex-1 flex gap-2">
                <div className="flex-1">
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Dirección del venue
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    value={venueData.address}
                    onChange={handleChange}
                    placeholder="Humboldt 450, Villa Crespo, Buenos Aires"
                    className="w-full px-3 py-2 bg-[#F0F2F6] border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <button
                  type="button"
                  className="self-end px-4 py-2 bg-[#61B4CE] text-white rounded-md  transition-colors text-sm"
                >
                  Actualizar mapa
                </button>
              </div>
            </div>

            {/* Segunda fila: Dominio, Capacidad y Búsqueda */}
            <div className="flex gap-6">
              <div className="flex-1">
                <label
                  htmlFor="domain"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Dominio (No incluir protocolo https/http)
                </label>
                <input
                  id="domain"
                  type="text"
                  name="domain"
                  value={venueData.domain}
                  onChange={handleChange}
                  placeholder="movistarenasandbox.seekerparking.ar"
                  className="w-full px-3 py-2 bg-[#F0F2F6] border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-32">
                <label
                  htmlFor="max_capacity"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Capacidad máxima
                </label>
                <input
                  id="max_capacity"
                  type="number"
                  name="max_capacity"
                  value={venueData.max_capacity}
                  onChange={handleChange}
                  placeholder="1500"
                  className="w-full px-3 py-2 bg-[#F0F2F6] border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-48">
                <label
                  htmlFor="search_enabled"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Barra de búsqueda en home
                </label>
                <select
                  id="search_enabled"
                  name="search_enabled"
                  value={venueData.search_enabled}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#F0F2F6] border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                >
                  <option value="">Habilitada</option>
                  <option value="true">Habilitada</option>
                  <option value="false">Deshabilitada</option>
                </select>
              </div>
            </div>
          </div>
          <div className="space-y-6">
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
                className="w-full px-4 py-2.5 bg-[#F0F2F6] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[30px]"
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
                className="w-full px-4 py-2.5 bg-[#F0F2F6] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[30px]"
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
                className="w-full px-4 py-2.5 bg-[#F0F2F6] border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 text-sm min-h-[100px]"
              />
            </div>
          </div>
        </section>

        {/* Ubicación */}
        <section className="space-y-6">
          <p className="text-gray-600 mt-1">
            Mueva el icono hasta la posicion donde se encuentre el Venue o
            actualice el mapa mediante la dirección.
          </p>

          <div className="space-y-4">
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

        <div className="flex gap-6">
          {/* Foto de portada */}
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Foto de portada
            </span>
            <span className="block text-xs text-gray-500 mb-2">
              (La imagen debe tener un tamaño de 1280×427) *
            </span>
            <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Examinar
              </button>
            </div>
            <div className="flex mt-2 text-xs text-gray-500">
              <button type="button" className="mr-4 hover:text-gray-700">
                Editar foto de portada
              </button>
              <button type="button" className="hover:text-gray-700">
                Eliminar
              </button>
            </div>
          </div>

          {/* Foto de miniatura */}
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Foto de miniatura
            </span>
            <span className="block text-xs text-gray-500 mb-2">
              (La imagen debe tener un tamaño de 250×250) *
            </span>
            <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Examinar
              </button>
            </div>
            <div className="flex mt-2 text-xs text-gray-500">
              <button type="button" className="mr-4 hover:text-gray-700">
                Editar foto de portada
              </button>
              <button type="button" className="hover:text-gray-700">
                Eliminar
              </button>
            </div>
          </div>

          {/* Logo */}
          <div className="flex-1">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Foto de miniatura
            </span>
            <span className="block text-xs text-gray-500 mb-2">
              (La imagen debe tener un tamaño de 250×250) *
            </span>
            <div className="border border-dashed border-gray-300 rounded-md p-6 flex flex-col items-center justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 text-sm text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  />
                </svg>
                Examinar
              </button>
            </div>
            <div className="flex mt-2 text-xs text-gray-500">
              <button type="button" className="mr-4 hover:text-gray-700">
                Editar foto de portada
              </button>
              <button type="button" className="hover:text-gray-700">
                Eliminar
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg   transition-colors duration-200"
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
