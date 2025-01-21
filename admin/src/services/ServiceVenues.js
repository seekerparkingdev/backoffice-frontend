import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
export const getVenues = async () => {
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



  export const deleteVenue = async (id) => { 
    try {
        const response = await axios.delete(`${apiUrl}venues/${id}`, { 
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        })
console.log(response);
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
  }