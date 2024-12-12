import { EstacionamientoEditPage } from "../../page/estacionamiento/EstacionamientoEditPage"
import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
const ViewEstacionamientoEdit = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div>
            <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div>
                <EstacionamientoEditPage />
            </div>
        </div>
    )
}

export { ViewEstacionamientoEdit }