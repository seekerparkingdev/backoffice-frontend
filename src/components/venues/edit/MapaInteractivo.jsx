import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const MapaInteractivo = () => {
  const [position, setPosition] = useState([-34.6037, -58.3816]); // Coordenadas iniciales (Buenos Aires)

  const MoverMarcador = () => {
    useMapEvents({
      click(e) {
        setPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <div className="mapa-container" style={{ height: '400px', width: '100%' }}>
      <MapContainer center={position} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MoverMarcador />
        <Marker position={position}>
          <Popup>
            Coordenadas: {position[0].toFixed(4)}, {position[1].toFixed(4)}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapaInteractivo;
