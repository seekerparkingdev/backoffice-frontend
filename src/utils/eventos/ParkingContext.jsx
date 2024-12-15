import React, { createContext, useContext, useState } from "react";
const ParkingContext = createContext();

export const ParkingProvider = ({ children }) => {
  const [selectedRows, setSelectedRows] = useState([]);

  const updateSelectedRows = (rows) => {
    setSelectedRows(rows);
  };

  return (
    <ParkingContext.Provider value={{ selectedRows, updateSelectedRows }}>
      {children}
    </ParkingContext.Provider>
  );
};

export const useSelectedRows = () => {
  return useContext(ParkingContext);
};
