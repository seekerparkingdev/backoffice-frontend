import React, { createContext, useState } from "react";

// Crear el contexto
export const FormularioContext = createContext();

// Proveedor del contexto
export const FormularioProvider = ({ children }) => {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: "",
    propietario: "",
    email: "",
    descripcion: "",
    codigoLugar: "",
    direccion: "",
    ubicacion: "",
    posicion: [-34.6037, -58.3816],
    portada: null,
    recomendar: false,
    obligatorioLlaves: false,
    incluirServiceCharge: false,
    porcentajeServiceCharge: 0,
    horarioEspecial: "00:00",
  });

  return (
    <FormularioContext.Provider value={{ datosFormulario, setDatosFormulario }}>
      {children}
    </FormularioContext.Provider>
  );
};