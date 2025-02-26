import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;

export const getEventos = async (filtros = {}) => {
  console.log("Enviando filtros a la API:", filtros); // DEBUG
  if (!apiUrl || !token) {
    console.error("API URL o Token no están definidos");
    return null;
  }

  try {
    const response = await axios.get(`${apiUrl}eventos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      params: filtros, // Agregar filtros a la solicitud GET
    });

    if (response.status === 200) {
      return response?.data?.data?.data || [];
    } else {
      console.error("Error en la respuesta del servidor.");
      return null;
    }
  } catch (error) {
    manejarErrorAPI(error);
    return null;
  }
};

const manejarErrorAPI = (error) => {
  const mensajeError = error?.response
    ? `Error en la API: ${error.response.status} - ${
        error.response.data?.message || "Error desconocido"
      }`
    : "Error desconocido";

  console.error(mensajeError);
};

export const deleteEvento = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}eventos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(
        "Error en la respuesta del servidor. Código de error: " +
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

// Suspender/Habilitar
export const toggleSuspendEvent = async (id) => {
  console.log(id);
  try {
    const response = await axios.patch(
      `${apiUrl}eventos/toggleSuspend/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data; // Devuelve los datos directamente.
    } else {
      throw new Error("Error inesperado en la API.");
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

export const postEvento = async (data, event) => {
  // Construir el objeto con la estructura requerida
  const eventData = {
    venue_id: event.venue_id,
    name: event.name,
    date: event.date,
    hour: event.hour,
    enabled_before: event.enabled_before,
    enabled_after: event.enabled_after,
    purchace_limit_date: event.purchace_limit_date,
    path: event.path,
    id_event_types: event.id_event_types,
    parkings: data.map((parking) => ({
      distance_km: parking.distance_km,
      id: parking.id,
      spot_types: parking.spot_types.map((spot) => ({
        spot_type_id: spot.spot_type_id,
        quantity: spot.quantity,
        price: spot.price,
      })),
    })),
  };

  console.log("Enviando evento a la API:", eventData); // DEBUG

  try {
    const response = await axios.post(`${apiUrl}eventos`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(response);
      throw new Error("Error inesperado en la API.");
    }
  } catch (error) {
    console.error("Error al crear Evento:", error);
    throw error;
  }
};

export const eventbyid = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}eventos/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(`error: ${response.data}`);
      response.data;
    }
  } catch (error) {
    console.error("Error al obtener evento por ID:", error);
    throw error;
  }
};

export const updateEvent = async (id, event) => {
  try {
    const response = await axios.put(`${apiUrl}eventos/${id}`, event, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error actualizando el evento:", error);
    throw error;
  }
};
