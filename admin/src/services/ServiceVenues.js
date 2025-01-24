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

export const deleteVenue = async (id) => {
  try {
    const response = await axios.delete(`${apiUrl}venues/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    console.log(response);
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
// Venue por id

export const getVenueById = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}venues/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      return response.data.data; // Regresa los datos obtenidos
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

// Suspender/Habilitar
export const toggleSuspend = async (id) => {
  try {
    const response = await axios.patch(
      `${apiUrl}venues/toggleSuspend/${id}`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      console.log(response);
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

export const putVenueEdit = async (id, venueData) => {
  console.log(`${apiUrl}venues/${id}`);
  try {
    const response = await axios.put(`${apiUrl}venues/${id}`, venueData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      console.log(response);
      return response.data;
    } else {
      console.log(response);
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
