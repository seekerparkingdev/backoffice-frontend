import { useState } from "react";
import DataTable from "react-data-table-component";
import { IoMdAddCircle } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";

const EstacionamientosVenue = () => {
  const [venueData, setVenueData] = useState({
    parkings: [],
  });

  const handleAddEstacionamiento = () => {
    setVenueData((prevVenueData) => ({
      ...prevVenueData,
      parkings: [
        ...prevVenueData.parkings,
        {
          id: Date.now(),
          name: "Movistar Arena",
          distance_meters: 100,
          agreement_percentage: 0,
          fixed_agreement: 0,
        },
      ],
    }));
  };

  const handleParkingChange = (id, field, value) => {
    setVenueData((prevVenueData) => ({
      ...prevVenueData,
      parkings: prevVenueData.parkings.map((parking) =>
        parking.id === id ? { ...parking, [field]: value } : parking
      ),
    }));
  };

  const handleDeleteParking = (id) => {
    setVenueData((prevVenueData) => ({
      ...prevVenueData,
      parkings: prevVenueData.parkings.filter((parking) => parking.id !== id),
    }));
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Distancia caminando (MTS)",
      selector: (row) => row.distance_meters,
      cell: (row) => (
        <div className="flex items-end gap-2">
          <input
            type="number"
            value={row.distance_meters}
            onChange={(e) =>
              handleParkingChange(row.id, "distance_meters", e.target.value)
            }
            className="w-20 p-2 border-[#CAC8C7] rounded text-center"
          />
          <button className="px-3 py-0 bg-[#4B6FC7] text-white rounded-3xl text-sm">
            Propagar Metros
          </button>
        </div>
      ),
    },
    {
      name: "Acuerdo %",
      selector: (row) => row.agreement_percentage,
      cell: (row) => (
        <input
          type="number"
          value={row.agreement_percentage}
          onChange={(e) =>
            handleParkingChange(row.id, "agreement_percentage", e.target.value)
          }
          className="w-20 p-2  bg-[#F3F3F3] border-none rounded   "
        />
      ),
    },
    {
      name: "Acuerdo suma fija",
      selector: (row) => row.fixed_agreement,
      cell: (row) => (
        <input
          type="number"
          value={row.fixed_agreement}
          onChange={(e) =>
            handleParkingChange(row.id, "fixed_agreement", e.target.value)
          }
          className="w-20 p-2  bg-[#F3F3F3] border-none rounded   "
        />
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <button
          onClick={() => handleDeleteParking(row.id)}
          className="text-red-500"
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
        backgroundColor: "white", 
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
        backgroundColor: "white",  
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
    <div>
      <div className=" border-b-2 border-[#9CA3AF] p-4 mb-4">
        <h1 className="font-bold text-3xl mb-3">Venues</h1>
      </div>
      <div className="p-6 bg-white rounded-lg mt-2">
        {/* Título */}
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Estacionamientos Recomendados
        </h3>
        <p className="text-gray-600 mb-4">
          Ingrese los estacionamientos recomendados para el Venue.
        </p>

        {/* Selector y botón de agregar */}
        <div className="flex gap-4 mb-4">
          <select className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg">
            <option value="">Seleccione un estacionamiento</option>
          </select>
          <button
            type="button"
            onClick={handleAddEstacionamiento}
            className="px-6 py-2.5 bg-[#61B4CE] text-white rounded-lg   flex items-center gap-2"
          >
            <IoMdAddCircle size={20} />
            Agregar
          </button>
        </div>

        {/* DataTable */}
        <DataTable
          columns={columns}
          customStyles={customStyles}
          data={venueData.parkings}
          noDataComponent={
            <div className="text-gray-500 text-sm p-4">
              No hay registros disponibles
            </div>
          }
          pagination
          highlightOnHover
          striped
        />

        {/* Botón guardar */}
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-[#61B4CE] text-white rounded-lg ">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export { EstacionamientosVenue };
