const TituloParrafo = ({titulo, parrafo}) => {
    return (
        <div className="flex flex-col">
        <h1 className="text-lg font-bold text-gray-800">{titulo}</h1>
        <p className="text-sm text-gray-500">{parrafo}</p>
      </div>
  
    )
}


export {TituloParrafo}