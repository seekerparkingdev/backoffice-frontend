import axios from "axios";
// Servicio para traerte los estacionamientos
export const getEstacionamiento = async () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.get(`${apiUrl}estacionamientos`, {
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
// Servicio para crear estacionamiento
export const postEstacionamiento = async (data) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.post(`${apiUrl}estacionamientos`, data, {
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

// Servicio para desactivar
export const patchDisabledEstacionamiento = async (id) => {
  console.log("Esta es la id que recibe ", id);
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  console.log(token);

  try {
    const response = await axios.patch(
      `${apiUrl}estacionamientos/suspender/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Error en la respuesta del servidor.");
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

export const deleteEstacionamiento = async (id) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.delete(`${apiUrl}estacionamientos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        "Error en la respuesta del servidor. Codigo de error " + response.status
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
