import DataTable from "react-data-table-component";
import { useState } from "react";
import  {IoMdAddCircle} from "react-icons/io";
import { RiDeleteBackFill } from "react-icons/ri";
import { AiOutlinePlus } from "react-icons/ai";
import { MdPhotoCamera, MdDelete } from "react-icons/md";
import { ParkingInfoGrillaConfig } from "../ParkingInfoGrillaConfig";

  const data2 = [
    {
      id: 1,
      vehiculo: "FOB201",
      nombre: "Araceli Mancuello",
      tipoPlaza: "Au",
      estado: "Rese",
      vendible: "Sí",
      tipoVenta: "Compra Web",
      total: "$14000.00",
      valor: "$9800",
      codigo: "LUN-LUC-11122024-ESTLUNA-360712",
      estacionamiento: "Movistar lorem",
      asignado: true,
    },
    {
      id: 2,
      vehiculo: "AB788LR",
      nombre: "Walter Rocha",
      tipoPlaza: "Au",
      estado: "Rese",
      vendible: "Sí",
      tipoVenta: "Compra Web",
      total: "$14000.00",
      valor: "$9800",
      codigo: "LUN-LUC-11122024-ESTLUNA-360713",
      estacionamiento: " Luna Lorem",
      asignado: false,
    },
  ];

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
const FormCrud = () => {
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
    <div>
      <form className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
          {/* Nombre */}
          <div>
            <label htmlFor="nombre" className="block text-gray-700 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Venue */}
          <div>
            <label htmlFor="venue" className="block text-gray-700 font-medium">
              Venue
            </label>
            <input
              type="text"
              id="venue"
              name="venue"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Fecha */}
          <div>
            <label htmlFor="fecha" className="block text-gray-700 font-medium">
              Fecha
            </label>
            <input
              type="date"
              id="fecha"
              name="fecha"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hora */}
          <div>
            <label htmlFor="hora" className="block text-gray-700 font-medium">
              Hora
            </label>
            <input
              type="time"
              id="hora"
              name="hora"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tiempo antes del evento */}
          <div>
            <label
              htmlFor="antesevento"
              className="block text-gray-700 font-medium"
            >
              T. Antes del evento
            </label>
            <input
              type="time"
              id="antesevento"
              name="antesevento"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Tiempo después del evento */}
          <div>
            <label
              htmlFor="despuesevento"
              className="block text-gray-700 font-medium"
            >
              T. Después del evento
            </label>
            <input
              type="time"
              id="despuesevento"
              name="despuesevento"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hora límite de compra */}
          <div>
            <label htmlFor="limite" className="block text-gray-700 font-medium">
              Hora límite de compra
            </label>
            <input
              type="datetime-local"
              id="limite"
              name="limite"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Foto de portada */}

          {/* Tipo de evento */}
          <div>
            <label htmlFor="tipo" className="block text-gray-700 font-medium">
              Tipo Evento
            </label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                id="tipo"
                name="tipo"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                className="p-2 bg-gray-200 text-blue-600 rounded-lg hover:bg-gray-300"
              >
                <AiOutlinePlus size={20} />
              </button>
            </div>
          </div>
          <div>
            <label htmlFor="foto" className="block text-gray-700 font-medium">
              Foto de Portada
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300"
              >
                <MdPhotoCamera size={20} />
              </button>
              <button
                type="button"
                className="p-2 bg-gray-200 text-red-600 rounded-lg hover:bg-gray-300"
              >
                <MdDelete size={20} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 ">
      <div className="container mx-auto border-b-2 border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mb-10">
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
      </div>
      
    </div>
      </form>
      <div className="mt-10">
      {data.length > 0 ? (
        <form>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="tipo"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tipo de Plaza
              </label>
              <select
                id="tipo"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>No Cambiar</option>
              </select>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="estado"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Estado
              </label>
              <select
                id="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>No Cambiar</option>
              </select>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="vendible"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Vendible
              </label>
              <select
                id="vendible"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>No Cambiar</option>
              </select>
            </div>

            <div className="col-span-1">
              <label
                htmlFor="asignacion"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Asignación
              </label>
              <select
                id="asignacion"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>No Cambiar</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Remover Seleccionados
            </button>
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Aplicar filtros selec.
            </button>
            <button
              type="button"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Asignar cliente y vehículo
            </button>
          </div>

          <div className="mt-6">
            <p className="font-bold text-center">
              Opciones Traslado  plazas seleccionadas
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <button
                type="button"
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Remover Vehículos
              </button>
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Generar PDFs
              </button>
            </div>
          </div>
        </form>
      ) : (
        <form action="">
          <div className="grid grid-cols-7 gap-4">
            <div className="col-span-1">
              <label
                htmlFor="cantidad"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Cantidad
              </label>
              <input
                type="text"
                id="cantidad"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="col-span-1">
              <label
                htmlFor="estacionamiento"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Estacionamiento
              </label>
              <select
                id="estacionamiento"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Garage JorMar Thames</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="tipo-plaza"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tipo de Plaza
              </label>
              <select
                id="tipo-plaza"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Bicicleta</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="estado"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Estado
              </label>
              <select
                id="estado"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Libre</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="vendible"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Vendible
              </label>
              <select
                id="vendible"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>Sí</option>
              </select>
            </div>
            <div className="col-span-1">
              <label
                htmlFor="vehiculo-asignado"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Tiene Vehículo Asignado
              </label>
              <select
                id="vehiculo-asignado"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option>No</option>
              </select>
            </div>
            <div className="col-span-1 flex items-end justify-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded"
              >
                Seleccionar plazas
              </button>
            </div>
            <div className="col-span-7">
              <input
                type="search"
                placeholder="Buscar..."
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
              />
            </div>
          </div>
        </form>
      )}
      <div className="p-6 bg-gray-100">
        <DataTable
          
          columns={ParkingInfoGrillaConfig}
          data={data2}
          selectableRows
          pagination
          className="bg-white shadow rounded-lg border border-gray-200"
        />
      </div>
    </div>
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
    </div>
  );
};

export { FormCrud };
