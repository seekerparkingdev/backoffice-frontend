import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Configuración del icono de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const InfoForm = ({url}) => {
  
  const [position, setPosition] = useState([-34.6037, -58.3816]); // Coordenadas iniciales (Buenos Aires)
  const [venue, setVenue] = useState({
    nombre: "",
    capacidad: "",
    direccion: "",
    dominio: "",
    buscar: "deshabilitada",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVenue({ ...venue, [name]: value });
  };

  const MoverMarcador = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <div className="p-4 bg-white shadow-lg rounded-bl-lg">
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={venue.nombre}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="capacidad"
              className="block text-gray-700 font-medium"
            >
              Capacidad Máxima:
            </label>
            <input
              type="number"
              id="capacidad"
              name="capacidad"
              value={venue.capacidad}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="col-span-2">
            <label
              htmlFor="direccion"
              className="block text-gray-700 font-medium"
            >
              Dirección:
            </label>
            <div className="flex">
              <input
                type="text"
                id="direccion"
                name="direccion"
                value={venue.direccion}
                onChange={handleInputChange}
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mr-3"
              />
              {url.view ? (
                null) : (


              <button
                type="button"
                onClick={() => alert("Mapa actualizado")}
                className="bg-blue-500 text-white py-2 px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Actualizar Mapa
              </button>
                )
              }
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="dominio"
              className="block text-gray-700 font-medium"
            >
              Dominio (No incluir protocolo https/http):
            </label>
            <input
              type="text"
              id="dominio"
              name="dominio"
              value={venue.dominio}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="buscar" className="block text-gray-700 font-medium">
              Barra de búsqueda en home:
            </label>
            <select
              name="buscar"
              value={venue.buscar}
              onChange={handleInputChange}
              id="buscar"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="deshabilitada">Deshabilitada</option>
              <option value="habilitada">Habilitada</option>
            </select>
          </div>
        </div>

        <div className="mt-6">
          <label className="block text-gray-700 font-medium mb-2">
            Seleccione la posición donde se encuentre el Venue o actualice el
            mapa mediante la dirección por coordenadas.
          </label>
          <div className="relative w-full" style={{ height: "300px" }}>
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: "100%", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <MoverMarcador />
              <Marker position={position}>
                <Popup>
                  Coordenadas: <br />
                  {position[0].toFixed(5)}, {position[1].toFixed(5)}
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </form>
    </div>
  );
};

export { InfoForm };
