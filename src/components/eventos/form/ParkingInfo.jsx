import React from "react";

const data = [
  {
    title: "Movistar Arena Parking Oficial",
    plazasDisponibilizadas: 80,
    compraOnline: 0,
    plazasManuales: 1,
    plazasControladas: 0,
    plazasLibres: 79,
  },
  {
    title: "Garage JorMar Arenales",
    plazasDisponibilizadas: 50,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 50,
  },
  {
    title: "Garage JorMar Thames",
    plazasDisponibilizadas: 40,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 40,
  },
  {
    title: "Garage JorMar Córdoba",
    plazasDisponibilizadas: 10,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 10,
  },
  {
    title: "Acevedo 468",
    plazasDisponibilizadas: 19,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 19,
  },
  {
    title: "Parking Camargo 953",
    plazasDisponibilizadas: 33,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 33,
  },
  {
    title: "Joy Cowork",
    plazasDisponibilizadas: 45,
    compraOnline: 4,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 41,
  },
  {
    title: "Estacionamiento Velazco 1418",
    plazasDisponibilizadas: 20,
    compraOnline: 0,
    plazasManuales: 0,
    plazasControladas: 0,
    plazasLibres: 20,
  },
];

const ParkingInfo = () => {
  return (
    <div className="p-4 bg-gray-100 border-b-2 border-gray-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 shadow-md rounded-lg border border-gray-200"
            >
              <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600">
                Plazas Disponibilizadas:{" "}
                <span className="font-medium text-gray-600">
                  {item.plazasDisponibilizadas}
                </span>
              </p>
              <p className="text-sm text-purple-600">
                Plazas Compra Online:{" "}
                <span className="font-medium text-purple-600">
                  {item.compraOnline}
                </span>
              </p>
              <p className="text-sm text-orange-300">
                Plazas Manuales:{" "}
                <span className="font-medium text-orange-300">
                  {item.plazasManuales}
                </span>
              </p>
              <p className="text-sm text-red-400">
                Plazas Controladas:{" "}
                <span className="font-medium text-red-400">
                  {item.plazasControladas}
                </span>
              </p>
              <p className="text-sm text-green-500">
                Plazas Libres:{" "}
                <span className="font-medium text-green-500">
                  {item.plazasLibres}
                </span>
              </p>
            </div>
          ))}
        </div>
        <div>
          <form action="">
            <div>
              <div>
                <label>Cantidad</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Estacionamiento</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Tipo de plaza</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Estado</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Vendible</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Tipo de vehiculo asignado</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <label>Asignada a</label>
                <input
                  type="text"
                  className=" px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button type="submit" className="btn btn-primary">
                  Seleccionar plazas
                </button>
              </div>
              <label>Buscar por nombre o patente</label>
              <input
                placeholder="Buscar..."
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export { ParkingInfo };
