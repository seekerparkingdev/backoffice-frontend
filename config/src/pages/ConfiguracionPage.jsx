import React, { useState } from "react";
import Menu from "../components/Menu";
import Nav from "../components/Nav/Nav"
const ConfiguracionPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div className={`lg:w-64 ${sidebarOpen ? "block" : "hidden"} lg:block`}>
        <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="flex-1 flex flex-col">
        <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>


      <h1>Config</h1>
    </div>
  );
};

export default ConfiguracionPage;
