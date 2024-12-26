import axios from "axios";
export const getEstacionamiento = async () => {
  const apiUrl = process.env.apiUrl || "http://localhost/api/v1/estacionamiento";
  const token = process.env.token || "No tenes tokeneyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzQyOCwibm9tYnJlX3VzdWFyaW8iOiJTZWVrZXIiLCJub21icmUiOiJTZWVrZXIiLCJhcGVsbGlkbyI6IiIsImVtYWlsIjoiaW5mb0BzZWVrZXIuY29tIiwiaWRfcGVyZmlsZXMiOjE2MjAsInBlcmZpbF9lc3BlY2lhbCI6IjAiLCJhY3Rpdm8iOjF9.0mrFyfJ5_8ST9RIgsboBrylSqlqG0GtcD63u1Z5BZEs";
  try {
    const response = await axios.get(`${apiUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    console.log("Respuesta completa:", response.data); // Para debug

    if (response.status !== 200) {
      throw new Error("Error: " + response.status);
    }

    return response.data?.data?.data || [];
  } catch (error) {
    console.error("Error en getEstacionamiento:", error);
    throw error;
  }
};
