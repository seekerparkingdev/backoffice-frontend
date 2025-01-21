import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export const getPropietarios = async () => {
  try {
    const response = await axios.get(`${apiUrl}usuarios/propietarios`, {
      params: { perfil_name: "propietarios" },
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data.codigo === 200) {
      return response.data;
    } else {
      throw new Error(
        "Error en la respuesta del servidor. Codigo de error",
        response.status
      );
    }
  } catch (error) {
    throw new Error(
      error?.response
        ? `Error en la API: ${error.response.status} - ${
            error.response.data?.message || "Error desconocido"
          }`
        : "Error desconocido"
    );
  }
};
