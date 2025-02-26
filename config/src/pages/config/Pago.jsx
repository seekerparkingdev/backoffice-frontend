import React, { useState } from "react";
import Header from "../../components/Nav/Nav";

const Pago = () => {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden md:ml-64">
        {/* Header */}
        <Header />
        
        <main className="grow">
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-5xl mx-auto">
            {/* Page Header */}
            <div className="mb-8">
              <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold">
                Configuración
              </h1>
            </div>
            
            {/* MercadoPago Card */}
            <div className="bg-white dark:bg-gray-800 shadow-lg rounded-xl mb-8 border border-gray-200 dark:border-gray-700 overflow-hidden transition-all ease-in-out duration-300 transform hover:scale-105">
              {/* Card Header */}
              <div className="px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-850 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3">
                  
                  <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">MercadoPago</h2>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 space-y-6">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Ingresa los datos de tu cuenta de MercadoPago para enlazar tu web y poder recibir los pagos.
                </p>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Client ID
                    </label>
                    <input
                      id="clientId"
                      type="text"
                      defaultValue="529265186813010"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="clientSecret" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Client Secret
                    </label>
                    <input
                      id="clientSecret"
                      type="text"
                      defaultValue="Zc3TCwmGJUBjZnXzwX2ys3LzBRIoF17F"
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    />
                  </div>
                  
                  <div>
                    <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200">
                      Obtener credenciales
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Pago;
