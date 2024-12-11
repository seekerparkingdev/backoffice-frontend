import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBackFill } from "react-icons/ri";

const EstacionamientoGrilla = () => {
  const [estacionamientoData, setEstacionamientoData] = useState({
    estacionamiento: "",
    auto: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    bicicleta: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    moto: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    pickup: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    suv: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    traffic: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
    distancia: "",
  });

  const [estacionamientos, setEstacionamientos] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEstacionamientoData({ ...estacionamientoData, [name]: value });
  };

  const handleAddEstacionamiento = () => {
    if (estacionamientoData.estacionamiento) {
      setEstacionamientos([
        ...estacionamientos,
        { ...estacionamientoData, id: Date.now() },
      ]);
      setEstacionamientoData({
        estacionamiento: "",
        auto: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        bicicleta: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        moto: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        pickup: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        suv: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        traffic: { cantidad: "", precio: "", minimo: "", ocupadas: "" },
        distancia: "",
      });
    }
  };

  const handleInputChangeInTable = (id, name, value) => {
    setEstacionamientos((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, [name]: value } : item
      )
    );
  };

  const handleDeleteEstacionamiento = (id) => {
    setEstacionamientos(estacionamientos.filter((item) => item.id !== id));
  };

  const opcionesEstacionamiento = [
    { value: "Concepción Arenal 3878", label: "Concepción Arenal 3878" },
    { value: "Acevedo 468", label: "Acevedo 468" },
    { value: "Av. Cordoba 4341", label: "Av. Cordoba 4341" },
    { value: "Av. Dorrego 1639", label: "Av. Dorrego 1639" },
    {
      value: "Movistar Arena Parking Oficial",
      label: "Movistar Arena Parking Oficial",
    },
    { value: "Parking Camargo 953", label: "Parking Camargo 953" },
  ];

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.estacionamiento,
      sortable: true,
    },
    {
      name: "Auto",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <input
            type="number"
            value={row.auto.cantidad}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.cantidad", e.target.value)
            }
            placeholder="Cantidad"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.auto.precio}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.precio", e.target.value)
            }
            placeholder="Precio"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.auto.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.minimo", e.target.value)
            }
            placeholder="Mínimo"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.auto.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.ocupadas", e.target.value)
            }
            placeholder="Ocupadas"
            className="border px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Bicicleta",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <input
            type="number"
            value={row.bicicleta.cantidad}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "bicicleta.cantidad",
                e.target.value
              )
            }
            placeholder="Cantidad"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.bicicleta.precio}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "bicicleta.precio",
                e.target.value
              )
            }
            placeholder="Precio"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.bicicleta.minimo}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "bicicleta.minimo",
                e.target.value
              )
            }
            placeholder="Mínimo"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.bicicleta.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "bicicleta.ocupadas",
                e.target.value
              )
            }
            placeholder="Ocupadas"
            className="border px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Moto",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <input
            type="number"
            value={row.moto.cantidad}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.cantidad", e.target.value)
            }
            placeholder="Cantidad"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.moto.precio}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.precio", e.target.value)
            }
            placeholder="Precio"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.moto.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.minimo", e.target.value)
            }
            placeholder="Mínimo"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.moto.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.ocupadas", e.target.value)
            }
            placeholder="Ocupadas"
            className="border px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Pickup",
      cell: (row) => (
        <div className="space-y-2  mt-2 mb-2">
          <input
            type="number"
            value={row.pickup.cantidad}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "pickup.cantidad",
                e.target.value
              )
            }
            placeholder="Cantidad"
            className="border  px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.pickup.precio}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "pickup.precio", e.target.value)
            }
            placeholder="Precio"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.pickup.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "pickup.minimo", e.target.value)
            }
            placeholder="Mínimo"
            className="border px-2 py-1 w-full"
          />
          <input
            type="number"
            value={row.pickup.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(
                row.id,
                "pickup.ocupadas",
                e.target.value
              )
            }
            placeholder="Ocupadas"
            className="border    px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
        name: "Distancia de Manejo (MTS)",  
        cell: (row) => (
          <div>
            <input
              type="number"
              value={row.distancia}
              onChange={(e) => handleInputChangeInTable(row.id, "distancia", e.target.value)}
              placeholder="Distancia (MTS)"
              className="border px-2 py-1 w-full"
            />
          </div>
        ),
      },
    {
      name: "Opciones",
      cell: (row) => (
        <button onClick={() => handleDeleteEstacionamiento(row.id)}>
          <RiDeleteBackFill size={20} />
        </button>
      ),
    },
  ];

  return (
    <div className="mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-bl-lg">
      {/* Formulario */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="col-span-1 sm:col-span-3">
            <label
              htmlFor="estacionamiento"
              className="block text-gray-700 font-medium"
            >
              Seleccione un Estacionamiento
            </label>
            <select
              id="estacionamiento"
              name="estacionamiento"
              value={estacionamientoData.estacionamiento}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Seleccione un estacionamiento</option>
              {opcionesEstacionamiento.map((opcion) => (
                <option key={opcion.value} value={opcion.value}>
                  {opcion.label}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1 sm:col-span-1 flex justify-start sm:justify-center">
            <button
              type="button"
              onClick={handleAddEstacionamiento}
              className="flex items-center justify-center gap-2 px-20 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
            >
              <IoMdAddCircle size={20} />
              <span>Añadir</span>
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6">
        <DataTable
          columns={columns}
          data={estacionamientos}
          pagination
          highlightOnHover
          responsive
          noDataComponent="No hay estacionamientos añadidos"
        />
      </div>
    </div>
  );
};

export { EstacionamientoGrilla };
