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

export const getByIdEstacionamiento = async (id) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

  try {
    const response = await axios.get(`${apiUrl}estacionamientos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response && response.status === 200) {
      return response?.data;
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

// Servicio para desactivar
export const patchDisabledEnableEstacionamiento = async (id) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;

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

export const editEstacionamiento = async (id, data) => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const token = import.meta.env.VITE_API_TOKEN;
  try {
    const response = await axios.put(`${apiUrl}estacionamientos/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response;
    } else {
      return response;
    }
  } catch (error) {
    if (error.response) {
      // Errores con respuesta del servidor
      if (error.response.status === 404) {
        console.error("Estacionamiento no encontrado:", error.response.data);
      } else {
        console.error(
          "Error al actualizar el estacionamiento:",
          error.response.data
        );
      }
    } else {
      console.error("Error de conexión o solicitud:", error.message);
    }
    throw error;
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
