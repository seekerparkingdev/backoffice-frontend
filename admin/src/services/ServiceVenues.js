import axios from "axios";
export const getVenues = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;
    try {
      const response = await axios.get(`${apiUrl}venues`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
  
      if (response.status === 200) {
        return response.data;   
      } else {
        throw new Error(
          "Error en la respuesta del servidor. Código de error: " + response.status
        );
      }
    } catch (error) {
      throw new Error(
        error?.response
          ? `Error en la API: ${error.response.status} - ${error.response.data?.message || "Error desconocido"}`
          : "Error desconocido"
      );
    }
  };