import React from "react";

function ListadoPlantilla({ id, nombre, handleClick, isChecked, onEdit }) {
  return (
    <tr>
      <td className="px-4 py-3 text-center">
        <input
          type="checkbox"
          id={id}
          checked={isChecked}
          onChange={handleClick}
          className="form-checkbox"
        />
      </td>
      <td className="px-4 py-3 cursor-pointer" onClick={onEdit}>
        <div className="text-sm font-medium text-gray-700">{nombre}</div>
      </td>
      <td className="px-4 py-3">Utilizado</td>
    </tr>
  );
}

export default ListadoPlantilla;
