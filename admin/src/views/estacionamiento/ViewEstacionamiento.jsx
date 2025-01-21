import React, { useState } from "react";
import { EstacionamientoPage } from "../../page/estacionamiento/EstacionamientoPage";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const ViewEstacionamiento = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden"} lg:block`}>
        <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>

      <div className="flex-1 flex flex-col">
        <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div className="p-6 ">
          <EstacionamientoPage />
        </div>
      </div>
    </div>
  );
};

export { ViewEstacionamiento };
