import Nav from "../../components/Nav/Nav";
import { EventosPlazas } from "../../page/eventos/EventosPlazas";
import { useState } from "react";
const ViewEventoPlazas = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div>
        <EventosPlazas />
      </div>
    </div>
  );
};

export { ViewEventoPlazas };
