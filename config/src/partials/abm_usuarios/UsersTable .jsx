import React, { useState, useEffect } from "react";
import ListadoUsuarios from "./ListadoUsuarios";

import Image01 from "../../images/icon-01.svg";
import Image02 from "../../images/icon-02.svg";
import Image03 from "../../images/icon-03.svg";

function UsersTable({ selectedItems }) {
  const users = [
    {
      id: "0",
      image: Image03,
      email: "qr@seeker.com",
      perfil: "Lector de QR",
      venues: [
        "Autódromo de la Ciudad de Buenos Aires",
        "Ciudad Universitaria",
        "Club de Corredores",
        "I Love Run",
      ],
      estacionamientos: [
        "Armenia Parking",
        "Armenia Parking (Sucre)",
        "Sinclair Parking",
        "Armenia Parking Bonpland",
      ],
    },
    {
      id: "1",
      email: "acceso@fitzroy.com",
      image: Image02,
      perfil: "Control Estacionamiento",
      venues: ["Movistar Arena", "C Complejo Art Media"],
      estacionamientos: [
        "Parking B. ENCALADA 1639",
        "Parking B. ENCALADA 1651",
      ],
    },
    {
      id: "2",
      email: "admin@movistar.com",
      image: Image01,
      perfil: "Administrador",
      venues: ["Movistar Arena", "C Complejo Art Media"],
      estacionamientos: [
        "Parking B. ENCALADA 1639",
        "Parking B. ENCALADA 1651",
      ],
    },
  ];

  const [selectAll, setSelectAll] = useState(false);
  const [isCheck, setIsCheck] = useState([]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setIsCheck(selectAll ? [] : users.map((user) => user.id));
  };

  const handleClick = (e) => {
    const { id, checked } = e.target;
    setSelectAll(false);
    setIsCheck((prev) =>
      checked ? [...prev, id] : prev.filter((item) => item !== id)
    );
  };

  useEffect(() => {
    selectedItems(isCheck);
  }, [isCheck]);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-sm rounded-xl relative">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Usuarios
          <span className="text-gray-400 dark:text-gray-500 font-medium">
            {" "}
            ({users.length})
          </span>
        </h2>
      </header>
      <div>
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-700/60">
            <thead className="text-xs uppercase text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/20 border-t border-gray-100 dark:border-gray-700/60">
              <tr>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
                  <div className="flex items-center">
                    <label className="inline-flex">
                      <span className="sr-only">Seleccionado</span>
                      <input
                        className="form-checkbox"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                    </label>
                  </div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Email</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Perfil</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">Venues</div>
                </th>
                <th className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
                  <div className="font-semibold text-left">
                    Estacionamientos
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <ListadoUsuarios
                  key={user.id}
                  id={user.id}
                  image={user.image}
                  email={user.email}
                  perfil={user.perfil}
                  venues={user.venues}
                  estacionamientos={user.estacionamientos}
                  handleClick={handleClick}
                  isChecked={isCheck.includes(user.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UsersTable;
