const ParkingInfoGrillaConfig = [
  {
    name: "Vehículo",
    selector: (row) => `${row.vehiculo} - ${row.nombre}`,
    sortable: true,
    cell: (row) =>
      row.asignado ? (
        <div className="flex flex-col space-y-2">
          <p className="font-bold text-lg">{row.vehiculo}</p>
          <p className="text-gray-500 text-xs">{row.nombre}</p>
          <div className="flex flex-col space-y-1">
            <button className="text-blue-500 hover:underline text-xs">
              Reenviar Email
            </button>
            <button className="text-red-500 hover:underline text-xs">
              Remover Reserva
            </button>
            <button className="text-blue-500 hover:underline text-xm">
              Ver detalle plaza
            </button>
          </div>
        </div>
      ) : (
        <p>Aun no asignado</p>
      ),
  },
  {
    name: "Tipo de Plaza",
    selector: (row) => row.tipoPlaza,
    cell: () => (
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
        <option>Auto</option>
        <option>Bicicleta</option>
        <option>Moto</option>
        <option>Pickup</option>
        <option>SUV</option>
        <option>Traffic</option>
      </select>
    ),
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
    cell: () => (
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
        <option>Reservado</option>
        <option>Utilizado</option>
        <option>Libre</option>
      </select>
    ),
  },
  {
    name: "Vendible",
    selector: (row) => row.vendible,
    cell: () => (
      <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-1">
        <option>Sí</option>
        <option>No</option>
      </select>
    ),
  },
  {
    name: "Tipo de Venta",
    selector: (row) => row.tipoVenta,
  },
  {
    name: "Total",
    selector: (row) => row.total,
  },
  {
    name: "Valor",
    selector: (row) => row.valor,
  },
  {
    name: "Código",
    selector: (row) => row.codigo,
    cell: (row) => (
      <div>
        <p>{row.codigo}</p>
        {row.asignado ? <p>asignado</p> : <p> Sin asignar</p>}
      </div>
    ),
  },
  {
    name: "Estacionamiento",
    selector: (row) => row.estacionamiento,
  },
];

export { ParkingInfoGrillaConfig };
