import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function SettingsSidebar() {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-nowrap overflow-x-scroll no-scrollbar md:block md:overflow-auto px-3 py-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-700/60 min-w-[15rem] md:space-y-3">
      {/* Group 1 */}
      <div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">Configuracion</div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          <li className="mr-0.5 md:mr-0 md:mb-0.5">
            <NavLink to="/config" className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${pathname === '/config' && 'bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}>
              <span className={`text-sm font-medium ${pathname === '/config' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'}`}>Usuarios</span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Group 2 */}
      <div>
        <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase mb-3">Experience</div>
        <ul className="flex flex-nowrap md:block mr-3 md:mr-0">
          <li className="mr-0.5 md:mr-0 md:mb-0.5">
            <NavLink to="/config/feedback" className={`flex items-center px-2.5 py-2 rounded-lg whitespace-nowrap ${pathname === '/config/feedback' && 'bg-[linear-gradient(135deg,var(--tw-gradient-stops))] from-violet-500/[0.12] dark:from-violet-500/[0.24] to-violet-500/[0.04]'}`}>
              <span className={`text-sm font-medium ${pathname === '/config/feedback' ? 'text-violet-500 dark:text-violet-400' : 'text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200'}`}>Give Feedback</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SettingsSidebar;
