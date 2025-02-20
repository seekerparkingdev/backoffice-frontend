import { useEffect, useRef } from "react";

const TokenIframe = () => {
  const iframeRef = useRef(null);

  // Función para manejar los mensajes del iframe
  const handleMessage = (event) => {
    console.log(event)
    if (!event.data) return;

    // Puedes filtrar por origen si necesitas más seguridad
    // if (event.origin !== "http://127.0.0.1:80") return;

    console.log("Mensaje recibido del iframe:", event.data);
    
    // Guardar el token en sessionStorage
    sessionStorage.setItem("token", event.data);
    console.log("Token guardado en sessionStorage:", event.data);
  };

  // Efecto para agregar el event listener al montar el componente
  useEffect(() => {
    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="http://127.0.0.1:80/api/v1/getToken"
      style={{ display: "none" }}
      title="Token Iframe"
    />
  );
};

export default TokenIframe;

  