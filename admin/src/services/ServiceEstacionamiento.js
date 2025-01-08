import axios from "axios";

export const getEstacionamiento = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response && response.data && response.status === 200) {
      return response.data?.data?.data;
    } else {
      throw new Error("Datos no encontrados en la respuesta.");
    }
  } catch (error) {
    if (error.response) {
      throw new Error(
        `Error en la API: ${error.response.status} - ${
          error.response.data?.message || "Error desconocido"
        }`
      );
    } else if (error.request) {
      throw new Error("No se recibió respuesta del servidor.");
    } else {
      console.error("Error inesperado:", error.message);
      throw new Error(`Error inesperado: ${error.message}`);
    }
  }
};

export const postEstacionamiento = async (data) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.post(apiUrl, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    // Verifica si la respuesta es exitosa
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en la respuesta del servidor.");
    }
  } catch (error) {
    console.error("Error al enviar los datos:", error);
    throw new Error(
      error.response
        ? `Error en la API: ${error.response.status} - ${
            error.response.data?.message || "Error desconocido"
          }`
        : "Error desconocido"
    );
  }
};
