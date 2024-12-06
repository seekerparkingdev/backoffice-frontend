const VenueSetup = () => {
    return (
      <div className="bg-yellow-50 p-6 rounded-lg shadow mb-10">
        <h2 className="text-lg font-bold mb-4">Para que el venue esté completamente habilitado, siga los siguientes pasos:</h2>
        <ul className="space-y-3">
          <li>
            <div className="font-bold text-base">1. Tenga en cuenta que al dar de alta el venue en Cloudflare, apuntando los demás dominios a la IP.</div>
            <div className="text-sm">(Aclaración: tener en cuenta que .ar y .mx pueden estar en servidores separados)</div>
          </li>
          <li>
            <div className="font-bold text-base">2. Habilitar el dominio en Facebook y Google para que los clientes puedan logearse.</div>
          </li>
          <li>
            <div className="font-bold text-base">3. Avisar a sistemas que debe habilitarlo en el servidor:</div>
            <ul className="list-disc pl-6 space-y-1 text-sm">
              <li>
                <div>a. Agregar el subdominio al virtual host en la carpeta <span className="bg-blue-100"><b className="text-customBlue"> /etc/nginx/sites-enabled </b></span> (copiar cualquier archivo de configuración de virtual host y editarlo).</div>
              </li>
              <li>
                <div>b. Reiniciar Nginx:<span className="bg-blue-100"><b className="text-customBlue"> systemctl nginx restart.</b></span> </div>
              </li>
              <li>
                <div>c. Si aún no funciona, reiniciar el Docker del país en cuestión. Para ello, navegar a la carpeta donde está instalado Seeker y ejecutar:<span className="bg-blue-100"><b className="text-customBlue"> docker-compose restart.</b></span></div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };
  
  export {VenueSetup}