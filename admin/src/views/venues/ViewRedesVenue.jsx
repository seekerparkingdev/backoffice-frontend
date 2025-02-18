import Nav from "../../components/Nav/Nav";
import { RedesVenues } from "../../components/venues/Form/RedesVenues";
import { useState } from "react";

const ViewRedesVenues = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 p-4">
          <RedesVenues />
        </div>
      </div>
    </>
  );
};

export default ViewRedesVenues;
