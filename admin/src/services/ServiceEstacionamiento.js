import axios from "axios";
// RENZO EL PROBLEMA ESTA ACA QUE APIuRL NO LO TOMA Y A TOKEN TAMPOCO, LOS AGARRA COMO undefined  lo puse adentro y afuera de la funcion pero no funciona
// EN ESTACIONAMIENTO TABLA ES DONDE USO EL GET ESTACIONAMIENTO PARA PODER PONER LOS DATOS DE ESTACIONAMIENTO EN LA TABLA 
// TENDRIAS QUE PONER CON LOS NOMBRES QUE TE LO TRAIGA EL BACK 
const apiUrl = process.env.apiUrl;
const token = process.env.token;
export const getEstacionamiento = async () => {
  console.log("GET", apiUrl, "Token:", token); // Para debug
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
