import { useState } from "react";
import { PageVenues } from "../page/venues/PageVenues";
import { Menu } from "../components/Menu";
import Nav from "../components/Nav/Nav";
const ViewHome = () => {
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
          <PageVenues />
        </div>
      </div>
    </>
  );
};

export { ViewHome};
