import Nav from "../../components/Nav/Nav";
import { useState } from "react";
import { EstacionamientosVenue } from "../../components/venues/Form/EstacionamientosVenue";
const ViewEstacionamientosVenues = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <div className="flex min-h-screen bg-gray-100">
        <div className="flex-1 p-4">
        <EstacionamientosVenue/> 
        </div>
      </div>
    </>
  );
};



export default ViewEstacionamientosVenues;