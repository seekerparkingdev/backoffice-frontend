import { EstacionamientoCrudPage } from "../../page/estacionamiento/EstacionamientoCrudPage";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const ViewEstacionamientoCrud = () => {
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
        <div  >
          <EstacionamientoCrudPage />
        </div>
      </div>
    </>
  );
};

export { ViewEstacionamientoCrud };