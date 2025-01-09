import React from "react";
import DataTable from "react-data-table-component";
import { usePlazas } from "../../../utils/estacionamiento/PlazaContext";

const PlazasEstacionamientoNew = () => {
  const { data, updateField } = usePlazas();

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
          onChange={(e) => updateField(index, "cantidad", e.target.value)}
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
          onChange={(e) => updateField(index, "precio", e.target.value)}
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
          onChange={(e) => updateField(index, "minimo", e.target.value)}
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
          onChange={(e) => updateField(index, "orden", e.target.value)}
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
        highlightOnHover
        responsive
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
