import DataTable from "react-data-table-component";
import { ParkingInfoGrillaConfig } from "./ParkingInfoGrillaConfig";
import { useSelectedRows } from "../../../../utils/eventos/ParkingContext";

const ParkingInfoGrilla = () => {
  const { selectedRows, updateSelectedRows } = useSelectedRows();
  console.log(selectedRows);

  const handleSelectedRowsChange = ({ selectedRows }) => {
    updateSelectedRows(selectedRows);
  };

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

  return (
    <div className="mt-10">
      {selectedRows.length > 0 ? (
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
               Opciones Traslado {selectedRows.length} plazas seleccionadas
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
          onSelectedRowsChange={handleSelectedRowsChange}
          columns={ParkingInfoGrillaConfig}
          data={data}
          selectableRows
          pagination
          className="bg-white shadow rounded-lg border border-gray-200"
        />
      </div>
    </div>
  );
};

export { ParkingInfoGrilla };