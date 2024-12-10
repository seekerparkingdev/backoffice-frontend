import { useState } from "react";
import { EventosPage } from "../../page/eventos/EventosPage";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const Eventos = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div>
        <EventosPage />
      </div>
    </div>
  );
};

export default Eventos;
