import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Menu({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // Close the sidebar on clicking outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [sidebarOpen, setSidebarOpen]);

  return (
    <div>
      {/* Sidebar backdrop for mobile */}
      <div
        className={`fixed inset-0 bg-gray-600 bg-opacity-50 z-40 lg:hidden transition-opacity ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        ref={sidebar}
        className={`fixed z-40 left-0 top-0 h-screen w-64 bg-white shadow-lg transform transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar content */}
        <div className="h-full flex flex-col">
          <div className="p-4 text-lg font-bold">Menú</div>
          <nav className="flex-1 px-4 space-y-2">
            <NavLink
              to="/venues"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Venues
            </NavLink>
            <NavLink
              to="/eventos"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Eventos
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export { Menu };
