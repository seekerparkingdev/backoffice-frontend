import DataTable from "react-data-table-component";
import { useState } from "react";
import Swal from "sweetalert2";

const PlazasEstacionamiento = () => {
  const [data, setData] = useState([
    {
      id: 1,
      plaza: "moto",
      cantidad: 2,
      precio: 30,
      minimo: 20,
      orden: 1,
    },
    {
      id: 2,
      plaza: "auto",
      cantidad: 10,
      precio: 50,
      minimo: 30,
      orden: 2,
    },
  ]);

  const [selectedRows, setSelectedRows] = useState([]);

  const handleInputChange = (e, rowIndex, field) => {
    const newData = [...data];
    newData[rowIndex][field] = e.target.value;
    setData(newData);
  };

  const columns = [
    {
      name: "Tipo de plaza",
      selector: (row) => row.plaza,
      sortable: true,
      cell: (row) => <span>{row.plaza}</span>, // Solo mostrar el texto del tipo de plaza
    },
    {
      name: "Cantidad",
      selector: (row) => row.cantidad,
      sortable: true,
      cell: (row, index) => (
        <input
          type="number"
          value={row.cantidad}
          onChange={(e) => handleInputChange(e, index, "cantidad")}
          className="w-full border p-1 rounded"
        />
      ),
    },
    {
      name: "Precio",
      selector: (row) => row.precio,
      sortable: true,
      cell: (row, index) => (
        <input
          type="number"
          value={row.precio}
          onChange={(e) => handleInputChange(e, index, "precio")}
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
          onChange={(e) => handleInputChange(e, index, "minimo")}
          className="w-full border p-1 rounded"
        />
      ),
    },
    {
      name: "Orden",
      cell: (row, index) => (
        <select
          value={row.orden}
          onChange={(e) => handleInputChange(e, index, "orden")}
          className="w-full border p-1 rounded"
        >
          {[1, 2, 3, 4, 5].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ),
    },
  ];

  const handleRowSelected = (state) => {
    setSelectedRows(state.selectedRows);
  };

  const handlePropagateValues = () => {
    // Aquí puedes agregar la lógica para propagar los valores si es necesario.
    // Por ejemplo, si los valores de los precios se actualizan en el backend, lo manejarías aquí.

    // Mostrar el alerta
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
        onSelectedRowsChange={handleRowSelected}
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

export { PlazasEstacionamiento };
