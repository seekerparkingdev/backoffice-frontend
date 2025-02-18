import { useState } from "react";
import { EventosPage } from "../../page/eventos/EventosPage";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const Eventos = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    

      <div className="flex min-h-screen bg-gray-100">
       
        <div className="flex-1 p-4">
          <EventosPage />
        </div>
      </div>
    </>
  );
};

export default Eventos;
