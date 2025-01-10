import { useState } from "react";
import Swal from "sweetalert2";
import { Titulo } from "../../components/Titulo";
import { TituloParrafo } from "../../components/TituloParrafo";
import { GeneralFormNew } from "../../components/estacionamiento/form/GeneralFormNew";
import { BiSolidArrowToBottom, BiSolidArrowToTop } from "react-icons/bi";
import { PlazasEstacionamientoNew } from "../../components/estacionamiento/grilla/PlazasEstacionamientoNew";
import { usePlazas } from "../../utils/estacionamiento/PlazaContext";
import { useEstacionamiento } from "../../utils/estacionamiento/EstacionamientoContext";

const EstacionamientoNewPage = () => {
  const { data } = usePlazas();
  const { formState } = useEstacionamiento();

  const [visibility, setVisibility] = useState({
    generalFormNew: false,
    precios: false,
  });

  const handleToggleVisibility = (section) => {
    setVisibility((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };
 
  const handleSubmit = () => {
    // Validar campos requeridos
    if (!formState.nombre || !formState.direccion) {
      Swal.fire({
        icon: "warning",
        title: "Campos incompletos",
        text: "Por favor, completa todos los campos requeridos en Información General.",
        confirmButtonText: "Entendido",
      });
      return;
    }

    // Crear el objeto para enviar al backend
    const payload = {
      informacionGeneral: formState,
      plazas: data,
    };

    console.log("Datos a enviar:", payload);

    // Simular envío al backend
    Swal.fire({
      title: "Creando estacionamiento...",
      text: "Por favor, espera mientras procesamos tu solicitud.",
      icon: "info",
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 2000, // Simula un tiempo de espera
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Estacionamiento creado",
        text: "El estacionamiento se ha creado exitosamente.",
        confirmButtonText: "Aceptar",
      });
    });

    // Aquí se enviaría al backend usando fetch o Axios
    // Por ejemplo:
    // fetch("/api/estacionamientos", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(payload),
    // }).then(response => console.log(response));
  };

  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="w-full lg:w-2/3 px-4">
        <div className="mb-4 mt-10">
          <Titulo titulo="Estacionamientos" />
        </div>

        {/* Información General */}
        <div className="mb-10 mt-5">
          <div className="bg-white shadow-md rounded-t-lg p-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Información General"
              parrafo="Nombre, capacidad máxima, dirección y fotos"
            />
            <button
              onClick={() => handleToggleVisibility("generalFormNew")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.generalFormNew ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.generalFormNew && (
            <div className="bg-white p-6 rounded-b-lg">
              <GeneralFormNew />
            </div>
          )}
        </div>

        {/* Precios de las Plazas */}
        <div>
          <div className="bg-white shadow-md rounded-t-lg p-6 mt-6 flex items-center justify-between">
            <TituloParrafo
              titulo="Precios de las Plazas"
              parrafo="Añada los precios para los diferentes tipos de plaza. Seleccione los vehículos que acepta el estacionamiento y en qué orden desea que aparezcan."
            />
            <button
              onClick={() => handleToggleVisibility("precios")}
              className="p-2 rounded hover:bg-gray-200"
            >
              {visibility.precios ? (
                <BiSolidArrowToTop size={20} className="text-gray-600" />
              ) : (
                <BiSolidArrowToBottom size={20} className="text-gray-600" />
              )}
            </button>
          </div>
          {visibility.precios && (
            <div className="bg-white p-6 rounded-b-lg">
              <PlazasEstacionamientoNew />
            </div>
          )}
        </div>

        {/* Botón de Crear Estacionamiento */}
        <div className="mt-6">
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
          >
            Crear estacionamiento
          </button>
        </div>
      </div>
    </div>
  );
};

export { EstacionamientoNewPage };
