import { useState } from "react";
import { EventosPage } from "../../page/eventos/EventosPage";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const Eventos = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex min-h-screen bg-gray-100">
        <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden"} lg:block`}>
          <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div className="flex-1 p-4">
          <EventosPage />
        </div>
      </div>
    </>
  );
};

export default Eventos;
