import DataTable from "react-data-table-component";
import { useState } from "react";
import Swal from "sweetalert2";

const PlazasEstacionamientoNew = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      name: "Tipo de plaza",
      selector: (row) => row.plaza,
      sortable: true,
      cell: (row) => <span>{row.plaza}</span>,
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
      sortable: true,
      cell: (row, index) => (
        <input type="number" className="w-full border p-1 rounded" />
      ),
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      sortable: true,
      cell: (row, index) => (
        <input type="number" className="w-full border p-1 rounded" />
      ),
    },
    {
      name: "Mínimo",
      selector: (row) => row.minimo,
      cell: (row, index) => (
        <input type="number" className="w-full border p-1 rounded" />
      ),
    },
    {
      name: "Orden",
      cell: (row, index) => (
        <select className="w-full border p-1 rounded">
          {[1, 2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ),
    },
  ];

  const handlePropagateValues = () => {
    Swal.fire({
      title: "¡Éxito!",
      text: "Precios correctamente cambiados.",
      icon: "success",
      confirmButtonText: "Aceptar",
    });
  };

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

      <button
        onClick={handlePropagateValues}
        className="mt-4 bg-blue-500 text-white p-2 rounded"
      >
        Propagar valores
      </button>
    </div>
  );
};

export { PlazasEstacionamientoNew };
