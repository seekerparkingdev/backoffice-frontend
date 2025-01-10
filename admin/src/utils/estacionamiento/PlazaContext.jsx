import React, { createContext, useContext, useState } from "react";

// Crear el contexto
const PlazasContext = createContext();

// Proveedor del contexto
const PlazasProvider = ({ children }) => {
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

  // Actualizar un campo específico de una fila
  const updateField = (index, field, value) => {
    setData((prevData) => {
      const updatedData = [...prevData];
      updatedData[index][field] = value;
      return updatedData;
    });
  };

  return (
    <PlazasContext.Provider value={{ data, updateField }}>
      {children}
    </PlazasContext.Provider>
  );
};

 
const usePlazas = () => {
  const context = useContext(PlazasContext);
  if (!context) {
    throw new Error("usePlazas debe usarse dentro de un PlazasProvider");
  }
  return context;
};

export { PlazasProvider, usePlazas };
