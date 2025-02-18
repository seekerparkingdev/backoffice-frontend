import DataTable from "react-data-table-component";
import { CgMail } from "react-icons/cg";
import { CiExport } from "react-icons/ci";
import { CiImport } from "react-icons/ci";
import { useState } from "react";
import { ParkingInfoGrillaConfig } from "../../components/eventos/grilla/ParkingInfo/ParkingInfoGrillaConfig";

const EventosPlazas = () => {
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#F3F3F3",
        fontWeight: "bold",
        fontSize: "16px",
        textAlign: "center",
        borderBottom: "2px solid #E0E0E0",
      },
    },
    headCells: {
      style: {
        textAlign: "center",
        color: "#333",
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
  const data2 = [
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
  const data = [
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
  const [selectedRows, setSelectedRows] = useState([]);
  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };
  return (
    <div className="mt-10">
      <div class="p-4 border-b-2 border-[#9CA3AF]">
        <div class="flex items-center justify-between">
          <div class="flex flex-col">
            <h1 class="text-4xl font-bold">La Bomba de Tiempo</h1>
            <p class="text-[#000000B8]">📍 Ciudad Cultural Konex</p>
            <p class="text-[#000000B8]">
              📅 Lunes 06 enero 2025 de 18:00 a 00:00 hs
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <button class="flex items-center bg-[#61B4CE] justify-center text-white px-8 py-2 rounded-md">
                <CgMail size={20} /> Enviar Email a Estacionamientos
              </button>
              <div class="flex justify-end mt-3">
                <button class="flex items-center bg-[#4B6FC7] text-white px-3 py-2 rounded-md">
                  <CiExport size={20} /> Importar Excel VIP
                </button>
              </div>
            </div>
            <div>
              <button class="flex items-center bg-[#4B6FC7] justify-center text-white px-4 py-2 rounded-md">
                <CiExport size={20} /> Importar Excel
              </button>
              <button class="flex items-center mt-3 justify-center bg-[#4B6FC7] text-white px-4 py-2 rounded-md">
                <CiImport size={20} /> Exportar Excel
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10  rounded-lg bg-white p-24">
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Plazas</h1>
          <p className="text-[#9CA3AF] text-base">
            Administre las plazas para el evento
          </p>
        </div>
        <form>
          <div className="p-4  border-t-2 border-b-2 border-gray-300">
            <div className="container mx-aut">
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4  mb-10">
                {data2.map((item, index) => (
                  <div key={index} className="  p-4   ">
                    <h3 className="text-lg font-bold text-gray-800">
                      {item.title}
                    </h3>
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
          {/*  <div className="grid grid-cols-4 gap-4 mt-8">
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
          </div> */}

          {/* <div className="grid grid-cols-3 gap-4 mt-4">
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
          </div>*/}

          {/*<div className="mt-6">
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
          </div> */}
        </form>

        <form action="">
          {selectedRows.length === 0 ? (
            <div className="grid grid-cols-8 gap-4 mt-4">
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5"
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
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                >
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-1">
                <label
                  htmlFor="asignado"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Asignado a
                </label>
                <select
                  id="asignado"
                  className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                >
                  <option>No</option>
                </select>
              </div>
              <div className="col-span-1 flex items-end justify-end">
                <button
                  type="submit"
                  className="bg-[#61B4CE]   text-white font-bold py-2 px-3 rounded-lg"
                >
                  Seleccionar plazas
                </button>
              </div>
              <div className="col-span-8">
                <label htmlFor="search" className="font-semibold">
                  Buscar por nombre, patente o código
                </label>
                <input
                  type="search"
                  placeholder="Buscar..."
                  className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5 shadow-md mt-2"
                />
              </div>
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-5 gap-4 mt-4">
                <div className="col-span-1">
                  <label
                    htmlFor="tipo-plaza"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Tipo de plaza
                  </label>
                  <select
                    id="tipo-plaza"
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  >
                    <option>No</option>
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
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  >
                    <option>No</option>
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
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  >
                    <option>No</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="asignacion"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Asignacion
                  </label>
                  <select
                    id="asignacion"
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  >
                    <option>No</option>
                  </select>
                </div>

                <div className="col-span-1">
                  <label
                    htmlFor="vendible"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Fecha de venta
                  </label>
                  <select
                    id="vendible"
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
                  >
                    <option>No</option>
                  </select>
                </div>
              </div>

              <div className="  flex mt-4   justify-end  items-end ">
                <button className="bg-[#61B4CE] text-white py-2 px-3 ml-4 rounded-lg">
                  Remover Seleccionado
                </button>
                <button className="bg-[#61B4CE] text-white py-2 px-3 ml-4  rounded-lg">
                  Aplicar filtros seleccionados
                </button>
                <button className="bg-[#61B4CE] text-white py-2 px-3 ml-4  rounded-lg">
                  Asignar clienta y vehículo
                </button>
              </div>
              <div className="grid grid-cols-1 mt-6">
                <button className="bg-[#4B6FC7] text-white py-2 px-3 ml-4   rounded-lg">
                  Opciones Traslado 1 plazas seleccionadas
                </button>
              </div>

              <div className="mt-5">
                <button className="bg-[#61B4CE] text-white py-2 px-3 ml-4  rounded-lg">
                  Remover vehiculos
                </button>

                <button className="bg-[#4B6FC7] text-white py-2 px-3 ml-4  rounded-lg">
                  Generar PDFs
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="mt-10">
          <DataTable
            columns={ParkingInfoGrillaConfig}
            data={data}
            customStyles={customStyles}
            selectableRows
            pagination
            onSelectedRowsChange={handleRowSelected}
          />
        </div>
      </div>
    </div>
  );
};

export { EventosPlazas };
