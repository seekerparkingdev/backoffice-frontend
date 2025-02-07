import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import DataTable from "react-data-table-component";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useParams} from "react-router-dom";
import { eventbyid } from "../../services/ServiceEventos";
import { updateEvent, postEvento } from "../../services/ServiceEventos";
import { getEstacionamiento , getByIdEstacionamiento } from "../../services/ServiceEstacionamiento";

const EventosEstacionamiento = () => {
  const { id } = useParams();
  const isModeEdit = id;
  const [data, setData] = useState([]);
  const [event, setEvent] = useState();
  const [selectedParking, setSelectedParking] = useState(null);
  const [estacionamientos, setEstacionamientos] = useState([]);
  useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await eventbyid(id);

        if (response.status === "success" && response.data) {
          const eventData = response.data;

          setData(eventData.parkings);
        } else {
          Swal.fire({
            icon: "error",
            title: "No se puede cargar el evento",
            text: "Inténtalo más tarde.",
            confirmButtonColor: "#d33",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al cargar el evento",
          text: `Código de error: ${error.message || error}`,
          confirmButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        });
      }
    };

    const getEstacionamientos = async () => {
      try {
        const response = await getEstacionamiento();

        if (!response || response.length === 0) {
          Swal.fire({
            icon: "warning",
            title: "No hay estacionamientos disponibles",
            text: "Por favor, intenta más tarde.",
            confirmButtonColor: "#f39c12",
          });
        } else {
          setEstacionamientos(response);
          //Aca puede ir un loading
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error al obtener estacionamientos",
          text: `Hubo un problema: ${error.message || error}`,
          confirmButtonColor: "#d33",
        });
      }
    };
    if (!isModeEdit) {
      const eventInfo = localStorage.getItem("eventData");
      const eventData = JSON.parse(eventInfo);
      setEvent(eventData);
    }
    if (id) getEvent();
    getEstacionamientos();
  }, []);
  const handleAddParking = async () => {
    if (!selectedParking) {
      Swal.fire({
        icon: "warning",
        title: "Por favor, selecciona un estacionamiento",
        confirmButtonColor: "#f39c12",
      });
      return;
    }
    try {
      const response = await getByIdEstacionamiento(Number(selectedParking));
      if (response.status === "success" && response.data) {
        console.log(response.data);
        const nuevoEstacionamiento = {
          id: response.data.id,
          name: response.data.name,
          distance_km: "",
          spot_types: response.data.prices.map((price) => ({
            spot_type_id: price.plaza_type_id || "",
            minimum: price.minimum || "",
            quantity: price.quantity || "",
            price: price.price || "",
          })),
        };
        setData((prevData) => [...prevData, nuevoEstacionamiento]);
      } else {
        Swal.fire({
          icon: "error",
          title: "No se pudo agregar el estacionamiento",
          text: "Inténtalo más tarde.",
          confirmButtonColor: "#d33",
          confirmButtonText: "Aceptar",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error al cargar el estacionamiento",
        text: `Código de error: ${error.message || error}`,
        confirmButtonColor: "#d33",
        confirmButtonText: "Aceptar",
      });
    }

    setSelectedParking(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isModeEdit) {
      try {
        const response = await updateEvent(id, data);
        if (response.status === "success") {
          Swal.fire({
            title: "¡Éxito!",
            text: `El Estacionamiento del evento"${response.data.name}" ha sido editado correctamente.`,
            icon: "success",
            confirmButtonText: "Aceptar",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Hubo un problema al editar el estacionamiento. Por favor, intenta de nuevo.",
            icon: "error",
            confirmButtonText: "Aceptar",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Error",
          text: `Ocurrió un error: ${error.message || "Error desconocido"}`,
          icon: "error",
          confirmButtonText: "Aceptar",
        });
      }
    } else {
      try {
        const response = await postEvento(data, event);
        console.log(response)
        if (response.status === "success") {
          alert("Creado correctamente");
        } else {
          alert("Error aca ");
        }
      } catch (error) {
        alert("Error aca");
      }
    }
  };

  const handleChangeDistance = (id, value) => {
    setData((prevData) => {
      return prevData.map((parking) =>
        parking.id === id ? { ...parking, distance_km: value } : parking
      );
    });
  };

  const handleChange = (id, field, value) => {
    setData((prevData) => {
      return prevData.map((parking) =>
        parking.id === id
          ? {
              ...parking,
              spot_types: parking.spot_types.map((spot) =>
                spot.spot_type_id === Number(field.split(".")[0])
                  ? {
                      ...spot,
                      [field.split(".")[1]]: value,
                    }
                  : spot
              ),
            }
          : parking
      );
    });
  };

  const SpotTypeInputs = ({ row, typeKey, typeName }) => {
    const spot = row.spot_types.find(
      (spot) => spot.spot_type_id === Number(typeKey)
    );

    return spot ? (
      <div className="space-y-2 mt-2 mb-2">
        {["quantity", "price"].map((field) => (
          <div key={field}>
            <label className="flex text-start font-semibold capitalize">
              {field === "quantity" ? "Cantidad" : "Precio"}
            </label>
            <input
              type="number"
              value={spot[field] || ""}
              placeholder="0"
              onChange={(e) =>
                handleChange(row.id, `${typeKey}.${field}`, e.target.value)
              }
              className="border rounded-lg px-2 py-1 w-full"
            />
          </div>
        ))}
      </div>
    ) : null;
  };

  const VEHICLE_TYPES = {
    2: { key: "auto", name: "Auto" },
    4: { key: "bicicleta", name: "Bicicleta" },
    1: { key: "moto", name: "Moto" },
    3: { key: "pickup", name: "Pickup" },
    6: { key: "traffic", name: "Traffic" },
    5: { key: "suv", name: "Suv" },
  };

  const columns = [
    {
      name: "Nombre",
      selector: (row) => row.name,
      style: { fontSize: "18px", color: "#333", fontWeight: "bold" },
      sortable: true,
    },
    ...Object.entries(VEHICLE_TYPES).map(([id, { key, name }]) => ({
      name,
      cell: (row) =>
        row.spot_types.some((spot) => spot.spot_type_id === Number(id)) ? (
          <SpotTypeInputs row={row} typeKey={id} typeName={name} />
        ) : null,
    })),

    {
      name: "Distancia de Manejo (MTS)",
      cell: (row) => (
        <div className="flex flex-col space-y-2">
          <input
            type="number"
            name="distance_km"
            value={row.distance_km}
            onChange={(e) => handleChangeDistance(row.id, e.target.value)}
            placeholder="Distancia (MTS)"
            className="border rounded-lg px-2 py-1 w-full"
          />
          <label className="text-[#555] text-sm flex items-center gap-2">
            <input type="checkbox" className="rounded-md" />
            Traslado de cortesía
          </label>
        </div>
      ),
    },
    {
      name: "Acciones",
      cell: (row) => (
        <button className="bg-white border border-[#CAC8C7] px-2 py-2 text-[#DD2323] rounded-md shadow-md hover:shadow-lg focus:ring-2 focus:ring-red-500">
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
  return (
    <div className="mb-4 mt-20 mx-auto p-6 bg-white shadow-lg rounded-bl-lg ">
      <div className="border-b-2 border-[#9CA3AF] p-3 mb-16">
        <h1 className="text-2xl font-semibold mb-2">Estacionamientos</h1>
        <p className="text-[#9CA3AF] text-base ">
          Ingresá los estacionamientos para el evento
        </p>
      </div>
      {/* Formulario */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="col-span-1 sm:col-span-3">
            <select
              id="estacionamiento"
              name="estacionamiento"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedParking || ""}
              onChange={(e) => setSelectedParking(e.target.value)}
            >
              <option value="">Seleccione un estacionamiento</option>
              {estacionamientos?.map((opcion) => (
                <option key={opcion.id} value={opcion.id}>
                  {opcion.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-span-1 sm:col-span-1 flex justify-start sm:justify-center">
            <button
              type="button"
              onClick={handleAddParking}
              className="flex items-center justify-center gap-2 px-8 py-2 bg-[#61B4CE] text-white font-semibold rounded-lg  transition-colors mr-3"
            >
              <span>+ Agregar</span>
            </button>
            {isModeEdit ? (
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-2 bg-[#61B4CE] text-white font-semibold rounded-lg  transition-colors"
              >
                <span>Editar</span>
              </button>
            ) : (
              <button
                type="submit"
                className="flex items-center justify-center gap-2 px-8 py-2 bg-[#61B4CE] text-white font-semibold rounded-lg  transition-colors"
              >
                <span>Crear</span>
              </button>
            )}
          </div>
        </div>
      </form>
      <div className="mt-6">
        <DataTable
          columns={columns}
          data={data}
          customStyles={customStyles}
          pagination
          highlightOnHover
          responsive
          noDataComponent="No hay estacionamientos añadidos"
        />
      </div>
    </div>
  );
};
export { EventosEstacionamiento };
