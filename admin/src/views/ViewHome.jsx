import { useState } from "react";
import { PageVenues } from "../page/venues/PageVenues";
 
import Nav from "../components/Nav/Nav";
const ViewHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      

      <div className="flex min-h-screen bg-gray-100">
        

        <div className="flex-1 p-4">
          <PageVenues />
        </div>
      </div>
    </>
  );
};

export { ViewHome};
