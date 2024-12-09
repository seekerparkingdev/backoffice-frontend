import { useState } from "react";
import { PageVenues } from "../../page/venues/PageVenues";
import { Menu } from "../../components/Menu";
import Nav from "../../components/Nav/Nav";

const ViewVenues = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Nav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Menu sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      <PageVenues />
    </>
  );
};
export { ViewVenues };
