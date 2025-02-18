import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export const getPropietarios = async () => {
  try {
    const response = await axios.get(`${apiUrl}usuarios/owners`, {
      params: { perfil_name: "propietarios" },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data.status);
    // Verifica si la respuesta tiene 'status' igual a 'success'
    if (response.data.status === 'success') {
      // Accede a los datos dentro de 'data' y devuélvelos
      return response.data;
    } else {
      throw new Error(
        `Error en la respuesta: ${
          response.data.message || "No hay mensaje de error"
        }`
      );
    }
  } catch (error) {
    if (error?.response) {
      // Error con la respuesta de la API
      throw new Error(
        `Error en la API: ${error.response.status} - ${
          error.response.data?.message || "Error desconocido"
        }`
      );
    } else {
      // Otro tipo de error (por ejemplo, problemas de red)
      throw new Error(
        error.message || "Error desconocido al intentar realizar la solicitud"
      );
    }
  }
};
