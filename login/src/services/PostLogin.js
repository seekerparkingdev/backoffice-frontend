import axios from "axios";
import Swal from "sweetalert2";
const apiUrl = import.meta.env.VITE_API_URL;
const token = import.meta.env.VITE_API_TOKEN;
export const PostLogin = async (user) => {
  try {
    const response = await axios.post(`${apiUrl}login`, user, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "¡Bienvenido a Seeker Parking!",
        text: "Has iniciado sesión correctamente.",
        confirmButtonColor: "#3085d6",
      });
      return response.data;
    }
  } catch (error) {
    Swal.fire({
      icon: "error",
      title: "Error de autenticación",
      text: "Credenciales incorrectas. Por favor, verifica tu usuario y contraseña.",
      confirmButtonColor: "#d33",
    });
  }
};
