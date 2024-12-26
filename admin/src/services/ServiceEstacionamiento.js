import axios from "axios";

const apiUrl = process.env.URL_BASE_TEST;
const token = process.env.TOKEN_BASE_TEST;

export const getEstacionamiento = async (req, res) => {
  try {
    console.log(`${apiUrl} Esto es la url`);

    const response = await axios.get(`${apiUrl}/estacionamiento`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.statusCode === 200) {
      return response.data;
    } else {
      console.error("Error en getEstacionamiento:", response);
      throw response;
    }
  } catch (error) {
    console.error("Error en getEstacionamiento:", error);
    throw error;
  }
};
