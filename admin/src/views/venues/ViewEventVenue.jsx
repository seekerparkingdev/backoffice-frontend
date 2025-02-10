import { EventVenues } from "../../components/venues/Form/EventVenues";
import { useState } from "react";
import Nav from "../../components/Nav/Nav";
const ViewEventVenue = ( ) => { 
      const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        
        <div>
             <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <EventVenues/>
        </div>
    )
}


export default ViewEventVenue; 