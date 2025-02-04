import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { RiDeleteBin5Line } from "react-icons/ri";
const EventosEstacionamiento = () => {
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
      style: {
        fontSize: "18px",
        color: "#333",
        fontWeight: "bold",
      },
      sortable: true,
    },
    {
      name: "Auto",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <label htmlFor="cantidad" className=" flex text-start font-semibold">
            Cantidad
          </label>
          <input
            type="number"
            value={row.auto.cantidad}
            placeholder="0"
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.cantidad", e.target.value)
            }
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="precio" className=" flex text-start font-semibold">
            Precio
          </label>
          <input
            type="number"
            value={row.auto.precio}
            placeholder="0"
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.precio", e.target.value)
            }
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="minimo" className=" flex text-start font-semibold">
            Minimo
          </label>
          <input
            type="number"
            placeholder="0"
            value={row.auto.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.minimo", e.target.value)
            }
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="ocupados" className=" flex text-start font-semibold">
            Ocupados
          </label>
          <input
            type="number"
            placeholder="0"
            value={row.auto.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "auto.ocupadas", e.target.value)
            }
            className="border rounded-lg px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Bicicleta",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <label htmlFor="cantidad" className=" flex text-start font-semibold">
            Cantidad
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="precio" className=" flex text-start font-semibold">
            Precio
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="minimo" className=" flex text-start font-semibold">
            Minimo
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="ocupados" className="flex text-start font-semibold">
            Ocupados
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Moto",
      cell: (row) => (
        <div className="space-y-2 mt-2 mb-2">
          <label htmlFor="cantidad" className=" flex text-start font-semibold">
            Cantidad
          </label>
          <input
            type="number"
            value={row.moto.cantidad}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.cantidad", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="precio" className=" flex text-start font-semibold">
            Precio
          </label>
          <input
            type="number"
            value={row.moto.precio}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.precio", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />

          <label htmlFor="minimo" className=" flex text-start font-semibold">
            Minimo
          </label>
          <input
            type="number"
            value={row.moto.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.minimo", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />

          <label htmlFor="ocupadas" className=" flex text-start font-semibold">
            Ocupados
          </label>
          <input
            type="number"
            value={row.moto.ocupadas}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "moto.ocupadas", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Pickup",
      cell: (row) => (
        <div className="space-y-2  mt-2 mb-2">
          <label htmlFor="cantidad" className=" flex text-start font-semibold">
            Cantidad
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />

          <label htmlFor="precio" className=" flex text-start font-semibold">
            Precio
          </label>
          <input
            type="number"
            value={row.pickup.precio}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "pickup.precio", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="minimo" className=" flex text-start font-semibold">
            Minimo
          </label>
          <input
            type="number"
            value={row.pickup.minimo}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "pickup.minimo", e.target.value)
            }
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label htmlFor="ocupados" className=" flex text-start font-semibold">
            Ocupados
          </label>
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
            placeholder="0"
            className="border rounded-lg px-2 py-1 w-full"
          />
        </div>
      ),
    },
    {
      name: "Distancia de Manejo (MTS)",
      cell: (row) => (
        <div className="flex flex-col space-y-2">
          {" "}
          {/* Cambié a flex-col para apilar los elementos verticalmente */}
          <input
            type="number"
            value={row.distancia}
            onChange={(e) =>
              handleInputChangeInTable(row.id, "distancia", e.target.value)
            }
            placeholder="Distancia (MTS)"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label
            className="text-[#555555] text-sm flex items-center gap-2"
            htmlFor="traslado"
          >
            <input type="checkbox" className="rounded-md" />
            Traslado de cortesía
          </label>
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <button
          className="bg-white border-[1px] border-[#CAC8C7] px-2 py-2 text-[#DD2323] rounded-md shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={() => handleDeleteEstacionamiento(row.id)}
        >
          <RiDeleteBin5Line size={20} />
        </button>
      ),
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        
        backgroundColor: "#F3F3F3",
        fontWeight: "bold",
        fontSize: "14px",
        textAlign: "center",
        borderBottom: "2px solid #E0E0E0",
      },
    },
    headCells: {
      style: {
        textAlign: "center",
        color: "#4A5456",
        fontWeight: "bold",
        padding: "16px",
      },
    },
    cells: {
      style: {
        padding: "16px",
        borderBottom: "1px solid #E0E0E0",
      },
    },
    rows: {
      style: {
        backgroundColor: "white",
        "&:not(:last-of-type)": {
          borderBottom: "1px solid #E0E0E0",
        },
      },
      stripedStyle: {
        backgroundColor: "#F8F9FA",
      },
    },
    table: {
      style: {
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
      },
    },
  };
  return (
    <div className="mb-4 mt-20 mx-auto p-6 bg-white shadow-lg rounded-bl-lg ">
      <div className="border-b-2 border-[#9CA3AF] p-3 mb-16">
        <h1 className="text-2xl font-semibold mb-2">Estacionamientos</h1>
        <p className="text-[#9CA3AF] text-base ">
          Ingresá los estacionamientos para el evento
        </p>
      </div>
      {/* Formulario */}
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="col-span-1 sm:col-span-3">
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
              className="flex items-center justify-center gap-2 px-8 py-2 bg-[#61B4CE] text-white font-semibold rounded-lg  transition-colors"
            >
              <span>+ Agregar</span>
            </button>
          </div>
        </div>
      </form>
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={estacionamientos}
          customStyles={customStyles}
          pagination
          highlightOnHover
          responsive
          noDataComponent="No hay estacionamientos añadidos"
        />
      </div>
    </div>
  );
};
export { EventosEstacionamiento };
