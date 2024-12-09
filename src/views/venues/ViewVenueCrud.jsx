import { useState } from "react";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";
import { PageVenueCrud } from "../../page/venues/PageVenueCrud";
import { useParams } from "react-router-dom";
const ViewVenueCrud = () => {
  const { id } = useParams();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div>
        <PageVenueCrud id={id} />
      </div>
    </div>
  );
};

export { ViewVenueCrud };
