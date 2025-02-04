import { EventosEstacionamiento } from "../../page/eventos/EventosEstacionamiento";
import Nav from "../../components/Nav/Nav";
import { useState } from "react";
const ViewEventoEstacionamiento = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div>
        <EventosEstacionamiento />
      </div>
    </div>
  );
};

export { ViewEventoEstacionamiento };
