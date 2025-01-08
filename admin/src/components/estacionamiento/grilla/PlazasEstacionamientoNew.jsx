import { useState } from "react";
import DataTable from "react-data-table-component";
const PlazasEstacionamientoNew = () => {
  const plazaOptions = [
    "Auto",
    "Bicicleta",
    "Moto",
    "Pickup",
    "SUV",
    "Traffic",
  ];
 
  const [data, setData] = useState(
    plazaOptions.map((plaza) => ({
      plaza,
      cantidad: 0,
      precio: 0,
      minimo: 0,
      orden: 1,
    }))
  );

  const columns = [
    {
      name: "Tipo de Plaza",
      selector: (row) => row.plaza,
      sortable: true,
      cell: (row) => <span>{row.plaza}</span>,
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
      cell: (row, index) => (
        <input
          type="number"
          value={row.cantidad}
          onChange={(e) => {
            const updatedData = [...data];
            updatedData[index].cantidad = e.target.value;
            setData(updatedData);
          }}
          className="w-full border p-1 rounded"
        />
      ),
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      cell: (row, index) => (
        <input
          type="number"
          value={row.precio}
          onChange={(e) => {
            const updatedData = [...data];
            updatedData[index].precio = e.target.value;
            setData(updatedData);
          }}
          className="w-full border p-1 rounded"
        />
      ),
    },
    {
      name: "Mínimo",
      selector: (row) => row.minimo,
      cell: (row, index) => (
        <input
          type="number"
          value={row.minimo}
          onChange={(e) => {
            const updatedData = [...data];
            updatedData[index].minimo = e.target.value;
            setData(updatedData);
          }}
          className="w-full border p-1 rounded"
        />
      ),
    },
    {
      name: "Orden",
      selector: (row) => row.orden,
      cell: (row, index) => (
        <select
          value={row.orden}
          onChange={(e) => {
            const updatedData = [...data];
            updatedData[index].orden = e.target.value;
            setData(updatedData);
          }}
          className="w-full border p-1 rounded"
        >
          {[1, 2, 3, 4, 5, 6].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ),
    },
  ];

  return (
    <div className="p-4">
      <DataTable
        columns={columns}
        data={data}
        pagination
        highlightOnHover
        responsive
        selectableRows
        customStyles={{
          table: {
            style: {
              border: "1px solid #e5e7eb",
              borderRadius: "8px",
            },
          },
          headCells: {
            style: {
              backgroundColor: "#f3f4f6",
              fontWeight: "bold",
              color: "#333",
            },
          },
          cells: {
            style: {
              padding: "10px",
            },
          },
        }}
      />
    </div>
  );
};

export { PlazasEstacionamientoNew };
