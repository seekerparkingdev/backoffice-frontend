import React from 'react';

function DeleteButton({
  selectedItems
}) {
  return (
    <div className={`${selectedItems.length < 1 && 'hidden'}`}>
      <div className="flex items-center">
        <div className="hidden xl:block text-sm italic mr-2 whitespace-nowrap"><span>{selectedItems.length}</span> Usuarios seleccionado</div>
        <button className="btn bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700/60 hover:border-gray-300 dark:hover:border-gray-600 text-red-500">Borrar</button>
      </div>
    </div>
  );
}

export default DeleteButton;