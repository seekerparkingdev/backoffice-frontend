import React, { useState } from "react";
import { EstacionamientoPage } from "../../page/estacionamiento/EstacionamientoPage";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const ViewEstacionamiento = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100">
      <div
        className={`${
          sidebarOpen ? "block" : "hidden"
        } lg:block lg:w-64 p-4 bg-gray-800 text-white fixed inset-0 z-20`}
      >
        <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="flex-1 flex flex-col lg:ml-64">
        <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="p-4 overflow-auto">
          <EstacionamientoPage />
        </div>
      </div>
    </div>
  );
};

export { ViewEstacionamiento };
