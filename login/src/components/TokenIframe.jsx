import { useEffect, useRef, useState } from "react";
const TokenIframe = () => {
  const iframeRef = useRef(null);
  const [token, setToken] = useState(sessionStorage.getItem("token") || ""); // Estado para el token

  // Función para actualizar el token cuando cambie en sessionStorage
  const checkTokenInSessionStorage = () => {
    const newToken = sessionStorage.getItem("token");
    if (newToken !== token) {
      setToken(newToken || ""); // Actualiza el estado con el nuevo token
    }
  };

  // Efecto para verificar cambios en sessionStorage
  useEffect(() => {
    // Verifica el token cada segundo
    const interval = setInterval(checkTokenInSessionStorage, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(interval);
    };
  }, [token]); // Depende del token, de modo que se actualice cuando cambie

  // Efecto para manejar el src del iframe cuando el token cambia
  useEffect(() => {
    if (token) {
      // Si el token existe, actualiza el src del iframe
      if (iframeRef.current) {
        iframeRef.current.src = `http://127.0.0.1:80/api/v1/setToken?token=${encodeURIComponent(
          token
        )}`;
      }

      window.location.href = "http://localhost:5174";
    } else {
      console.warn("No se encontró un token en sessionStorage");
    }
  }, [token]); // Este efecto se ejecutará cuando el token cambie

  return (
    <iframe ref={iframeRef} style={{ display: "none" }} title="Token Iframe" />
  );
};

export default TokenIframe;
