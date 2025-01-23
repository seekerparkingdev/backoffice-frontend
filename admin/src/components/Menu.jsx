import { useEffect, useState, useRef } from "react";
import { getMenu } from "../services/ServiceMenu";

function Menu() {
  const  [menuHTML, setMenuHTML] =  useState("");
  const sidebar = useRef(null); // Si usas esta referencia para otra lógica
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const Getmenu = async () => {
      try {
        const response = await getMenu();
       
        setMenuHTML(response.data);    
       
      } catch (error) {
        console.error("Error:", error);
      }
    };
    Getmenu();
  }, []); // El array vacío asegura que solo se ejecute una vez al montar el componente

  return (
    <div>
      {/* Background overlay for mobile */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebar}
        className={`fixed z-40 left-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="h-full flex flex-col">
          <div className="p-4 text-lg font-bold">Menú</div>
          <nav dangerouslySetInnerHTML={{ __html: menuHTML }} />
        </div>
      </div>
    </div>
  );
}

export { Menu };