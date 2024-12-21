import React from "react";

function ListadoPlazas({ id, nombre, handleClick, isChecked }) {
  return (
    <tr>
      <td className="px-4 py-3 w-12 text-center">
        <div className="flex items-center justify-center">
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

      <td className="px-4 py-3">
        <div>{nombre}</div>
      </td>
    </tr>
  );
}

export default ListadoPlazas;
