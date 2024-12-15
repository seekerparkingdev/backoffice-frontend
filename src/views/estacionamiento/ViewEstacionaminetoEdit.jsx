import { EstacionamientoEditPage } from "../../page/estacionamiento/EstacionamientoEditPage";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const ViewEstacionamientoEdit = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1 overflow-hidden">
        <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="flex-1 overflow-auto p-4 lg:px-6">
          <EstacionamientoEditPage />
        </div>
      </div>
    </div>
  );
};

export { ViewEstacionamientoEdit };
