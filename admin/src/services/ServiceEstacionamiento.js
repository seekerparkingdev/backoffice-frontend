import axios from "axios";

export const getEstacionamiento = async () => {
  const apiUrl = "http://localhost:80/api/v1/estacionamientos";

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQyOCwibm9tYnJlX3VzdWFyaW8iOiJTZWVrZXIiLCJub21icmUiOiJTZWVrZXIiLCJhcGVsbGlkbyI6IiIsImVtYWlsIjoiaW5mb0BzZWVrZXIuY29tIiwiaWRfcGVyZmlsZXMiOjE2MjAsInBlcmZpbF9lc3BlY2lhbCI6IjAiLCJhY3Rpdm8iOjF9.0mrFyfJ5_8ST9RIgsboBrylSqlqG0GtcD63u1Z5BZEs";

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
