import React, { useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarLinkGroup from "../partials/SidebarLinkGroup";

function Menu({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);
  const { pathname } = useLocation();

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
      {/* Background overlay for mobile */}
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
        <div className="h-full flex flex-col">
          <div className="p-4 text-lg font-bold">Menú</div>
          <nav className="flex-1 px-4 space-y-2">
            {/* Menú principal */}
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
            <NavLink
              to="/estacionamiento"
              className={({ isActive }) =>
                `block px-4 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              Estacionamiento
            </NavLink>
            <ul>
              {/* Nuevo grupo de enlaces: Configuración */}
              <SidebarLinkGroup activecondition={pathname.includes("config")}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <a
                        href="#0"
                        className={`block text-gray-800 dark:text-gray-100 truncate transition duration-150 ${
                          pathname.includes("config")
                            ? ""
                            : "hover:text-gray-900 dark:hover:text-white"
                        }`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleClick();
                        }}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <svg
                              className={`shrink-0 fill-current ${
                                pathname.includes("config")
                                  ? "text-violet-500"
                                  : "text-gray-400 dark:text-gray-500"
                              }`}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M10.5 1a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H1a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 10.5 1ZM9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM5.5 9a3.502 3.502 0 0 1 3.355 2.5H15a1 1 0 1 1 0 2H8.855a3.502 3.502 0 0 1-6.71 0H1a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 5.5 9ZM4 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
                                fillRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm font-medium ml-4">
                              Configuracion
                            </span>
                          </div>
                          {/* Icon */}
                          <div className="flex shrink-0 ml-2">
                            <svg
                              className={`w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${
                                open && "rotate-180"
                              }`}
                              viewBox="0 0 12 12"
                            >
                              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                            </svg>
                          </div>
                        </div>
                      </a>
                      <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                        <ul className={`pl-8 mt-1 ${!open && "hidden"}`}>
                          <li>
                            <NavLink
                              to="/config"
                              className={({ isActive }) =>
                                isActive
                                  ? "text-violet-500"
                                  : "text-gray-500 hover:text-gray-700"
                              }
                            >
                              Usuarios
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export { Menu };
