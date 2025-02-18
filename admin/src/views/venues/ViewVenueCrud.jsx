import { useState } from "react";
import Nav from "../../components/Nav/Nav";
import { useParams } from "react-router-dom";
import CrudVenue from "../../components/venues/Form/CrudVenue";

const ViewVenueCrud = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      
      <div className="flex min-h-screen bg-gray-100">
       
      

        
        <div className="flex-1 p-4">
          
          <CrudVenue id={id} />
        </div>
      </div>
    </>
  );
};

export { ViewVenueCrud };
