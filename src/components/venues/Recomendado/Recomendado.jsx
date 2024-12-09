import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBackFill } from "react-icons/ri";
import { useState } from "react";
import DataTable from "react-data-table-component";

const Recomendado = ({ url }) => {
  const [recomendado, setRecomendado] = useState({
    estacionamiento: "",
    distancia: "",
    acuerdo: "",
    sumaFija: "",
  });

  const [estacionamientos, setEstacionamientos] = useState([]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRecomendado({ ...recomendado, [name]: value });
  };
  const handleAddEstacionamiento = () => {
    if (recomendado.estacionamiento) {
      setEstacionamientos([
        ...estacionamientos,
        { ...recomendado, id: Date.now() },
      ]);
      setRecomendado({
        estacionamiento: "",
        distancia: "",
        acuerdo: "",
        sumaFija: "",
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

  const handlePropagarMetros = (id) => {
    const estacionamiento = estacionamientos.find((item) => item.id === id);
    if (estacionamiento) {
      setEstacionamientos((prevState) =>
        prevState.map((item) => ({
          ...item,
          distancia: estacionamiento.distancia,
        }))
      );
    }
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
      name: "Distancia (mts)",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <div>
            <input
              type="number"
              value={row.distancia}
              onChange={(e) =>
                handleInputChangeInTable(row.id, "distancia", e.target.value)
              }
              className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => handlePropagarMetros(row.id)}
            className=" px-1 py-1  bg-green-500 text-white text-sm  rounded-lg hover:bg-green-600 transition"
          >
            Propagar Metros
          </button>
        </div>
      ),
    },
    {
      name: "Acuerdo %",
      cell: (row) => (
        <input
          type="number"
          value={row.acuerdo}
          onChange={(e) =>
            handleInputChangeInTable(row.id, "acuerdo", e.target.value)
          }
          className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
      ),
    },
    {
      name: "Acuerdo Suma Fija",
      cell: (row) => (
        <input
          type="number"
          value={row.sumaFija}
          onChange={(e) =>
            handleInputChangeInTable(row.id, "sumaFija", e.target.value)
          }
          className="w-20 px-2 py-1 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
        />
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
              value={recomendado.estacionamiento}
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
            {url.view !== "view" ? (
              <button
                type="button"
                onClick={handleAddEstacionamiento}
                className="flex items-center justify-center gap-2 px-20 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors"
              >
                <IoMdAddCircle size={20} />
                <span>Añadir</span>
              </button>
            ) : null}
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

export { Recomendado };
