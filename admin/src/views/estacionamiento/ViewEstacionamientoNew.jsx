import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
import { EstacionamientoNewPage } from "../../page/estacionamiento/EstacionamientoNewPage";

const ViewEstacionamientoNew = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Barra de navegación */}
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Contenedor principal */}
      <div className="flex min-h-screen bg-gray-100">
        {/* Menú lateral */}
        <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>

        {/* Contenido principal */}
        <div className="flex-1 p-4">
          <EstacionamientoNewPage />
        </div>
      </div>
    </>
  );
};

export { ViewEstacionamientoNew };