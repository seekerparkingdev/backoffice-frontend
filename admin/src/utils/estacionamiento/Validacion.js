import Swal from "sweetalert2";

const campoTraduccion = {
  address: "Dirección",
  code: "Código",
  email: "Correo electrónico",
  horarioEspecial: "Horario especial",
  include_service_charge: "Incluir cargo de servicio",
  latitude: "Latitud",
  location_url: "URL de ubicación",
  longitude: "Longitud",
  name: "Nombre",
  owner_id: "ID del propietario",
  owners: "Propietarios",
  path: "Ruta",
  percentage: "Porcentaje",
  prices: "Precios",
  recommended: "Recomendado",
  requires_key_drop: "Requiere entrega de llave",
  service_charge: "Cargo de servicio",
  special_exit: "Salida especial",
  text: "Texto",
  usarHorarioEspecial: "Usar horario especial",
};

export function validarCampos(payload) {
  for (let key in payload) {
    // No validamos el campo owner_name
    if (key === "owner_name") continue;

    if (typeof payload[key] === "string" && payload[key].trim() === "") {
      const campoNombre = campoTraduccion[key] || key;
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: `El campo ${campoNombre} no puede estar vacío.`,
      });
      return false;
    }

    if (Array.isArray(payload[key]) && key === "prices") {
      for (let i = 0; i < payload[key].length; i++) {
        // Aquí podrías añadir más validaciones si es necesario
      }
    }
  }

  return true;
}

