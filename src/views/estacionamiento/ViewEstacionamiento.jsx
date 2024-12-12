import { useState } from "react";
import { EstacionamientoPage } from "../../page/estacionamiento/EstacionamientoPage"
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
const ViewEstacionamiento = () => {
     const [sidebarOpen, setSidebarOpen] = useState(false);
    return (
        <div> 
 <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
 <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <div> 
            <EstacionamientoPage/>    
        </div>
        </div>
    )
}

export {ViewEstacionamiento}