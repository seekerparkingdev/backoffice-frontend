import { EventoFuncionalPage } from "../../page/eventos/EventoFuncionalPage";
import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
const ViewEventoFuncional = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <EventoFuncionalPage />
      </div>
    </div>
  );
};

export { ViewEventoFuncional };
