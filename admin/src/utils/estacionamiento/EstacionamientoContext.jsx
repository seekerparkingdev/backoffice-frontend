import React, { createContext, useState, useContext } from "react";

// Crear el contexto
const EstacionamientoContext = createContext();

// Proveedor del contexto
const EstacionamientoProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    nombre: "",
    propietario: "",
    email: "",
    descripcion: "",
    codigoLugar: "",
    direccion: "",
    ubicacion: "",
    portada: null,
    serviceCharge: "",
    horarioEspecial: "",
    position: [-34.603684, -58.381559],
    opciones: {
      recomendar: false,
      estacionarCulata: false,
      obligatorioLlaves: false,
      incluirServiceCharge: false,
    },
    porcentajeServiceCharge: "",
  });

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormState((prevState) => {
      if (type === "checkbox") {
        return {
          ...prevState,
          opciones: { ...prevState.opciones, [id]: checked },
        };
      } else if (type === "file") {
        return { ...prevState, [id]: e.target.files[0] };
      } else {
        return { ...prevState, [id]: value };
      }
    });
  };

  const handlePositionChange = (newPosition) => {
    setFormState((prevState) => ({
      ...prevState,
      position: newPosition,
    }));
  };

  return (
    <EstacionamientoContext.Provider
      value={{
        formState,
        setFormState,
        handleInputChange,
        handlePositionChange,
      }}
    >
      {children}
    </EstacionamientoContext.Provider>
  );
};

// Hook personalizado para usar el contexto
const useEstacionamiento = () => {
  return useContext(EstacionamientoContext);
};

export { EstacionamientoProvider, useEstacionamiento };
