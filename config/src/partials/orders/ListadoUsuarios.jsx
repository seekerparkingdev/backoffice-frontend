import React from "react";

function ListadoUsuarios({
  id,
  image,
  email,
  perfil,
  venues,
  estacionamientos,
  handleClick,
  isChecked,
}) {
  return (
    <tr>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap w-px">
        <div className="flex items-center">
          <label className="inline-flex">
            <span className="sr-only">Seleccionar</span>
            <input
              id={id}
              className="form-checkbox"
              type="checkbox"
              onChange={handleClick}
              checked={isChecked}
            />
          </label>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mr-2"
            src={image}
            alt="Avatar"
          />
          <div className="font-medium text-gray-800">{email}</div>
        </div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <div>{perfil}</div>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <ul>
          {venues.map((venue, index) => (
            <li key={index}>{venue}</li>
          ))}
        </ul>
      </td>
      <td className="px-2 first:pl-5 last:pr-5 py-3 whitespace-nowrap">
        <ul>
          {estacionamientos.map((parking, index) => (
            <li key={index}>{parking}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default ListadoUsuarios;
