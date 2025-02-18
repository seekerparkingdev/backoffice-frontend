import { useState } from "react";
import { EventosNewPage } from "../../page/eventos/EventosNewPage";
import Nav from "../../components/Nav/Nav";
const ViewEventosNew = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
     

      <div>
        <EventosNewPage />
      </div>
    </div>
  );
};

export { ViewEventosNew };
