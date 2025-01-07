import React, { useState } from "react";
import Sidebar from "../../components/Menu";
import Header from "../../components/Nav/Nav";
 
import FeedbackPanel from "../../partials/settings/FeedbackPanel";

function Feedback() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden md:ml-[240px]">
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Page header */}
            <div className="mb-8">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl text-gray-800 dark:text-gray-100 font-bold">
               Configuracion
              </h1>
            </div>

            {/* Content */}
            <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl mb-8">
              <div className="flex flex-col md:flex-row md:-mr-px">
              
                <FeedbackPanel />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Feedback;
