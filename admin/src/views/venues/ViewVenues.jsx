import { useState } from "react";
import { PageVenues } from "../../page/venues/PageVenues";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
const ViewVenues = () => {
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

export { ViewVenues };
