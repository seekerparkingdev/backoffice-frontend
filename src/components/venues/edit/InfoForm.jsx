const InfoForm = () => {
    return (
        <div className="max-w-full mb-4 mt-0 mx-auto p-6 bg-white shadow-lg rounded-lg">
            <form action="onSubmit" className="space-y-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                    {/* Nombre (30% ancho) */}
                    <div className="md:col-span-1">
                        <label htmlFor="nombre" className="block text-gray-700 font-medium">Name:</label>
                        <input 
                            type="text" 
                            id="nombre" 
                            name="nombre" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Capacidad (15% ancho) */}
                    <div className="md:col-span-1">
                        <label htmlFor="capacidad" className="block text-gray-700 font-medium">Capacidad:</label>
                        <input 
                            type="number" 
                            id="capacidad" 
                            name="capacidad" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Dirección (30% ancho) */}
                    <div className="md:col-span-2">
                        <label htmlFor="direccion" className="block text-gray-700 font-medium">Dirección (Ej: Humboldt 450, Villa Crespo, Buenos Aires)</label>
                        <input 
                            type="text" 
                            id="direccion" 
                            name="direccion" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                     
                    <div className="md:col-span-1 flex items-end justify-center">
                        <button 
                            type="submit" 
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Actualizar mapa
                        </button>
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Resto de los campos */}
                    <div>
                        <label htmlFor="dominio" className="block text-gray-700 font-medium">Dominio (No incluir protocolo https/http):</label>
                        <input 
                            type="text" 
                            id="dominio" 
                            name="dominio" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="buscar" className="block text-gray-700 font-medium">Barra de búsqueda en home:</label>
                        <select 
                            name="buscar" 
                            id="buscar" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value={false}>Deshabilitar</option>
                            <option value={true}>Habilitar</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="texto-inicio" className="block text-gray-700 font-medium">Texto de Inicio:</label>
                        <input 
                            type="text" 
                            id="texto-inicio" 
                            name="texto-inicio" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="texto-direccion" className="block text-gray-700 font-medium">Texto de Dirección:</label>
                        <input 
                            type="text" 
                            id="texto-direccion" 
                            name="texto-direccion" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="texto-head" className="block text-gray-700 font-medium">Texto de Head:</label>
                        <input 
                            type="text" 
                            id="texto-head" 
                            name="texto-head" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export { InfoForm };
