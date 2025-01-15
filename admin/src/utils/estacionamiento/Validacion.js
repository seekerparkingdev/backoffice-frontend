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
  // Recorrer todas las propiedades del payload
  for (let key in payload) {
    // Validar campos que sean cadenas no vacías
    if (typeof payload[key] === "string" && payload[key].trim() === "") {
      const campoNombre = campoTraduccion[key] || key; // Si no hay traducción, usamos la key original
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: `El campo ${campoNombre} no puede estar vacío.`,
      });
      return false;
    }

    // Validar arrays de precios
    if (Array.isArray(payload[key]) && key === "prices") {
      for (let i = 0; i < payload[key].length; i++) {
        const plaza = payload[key][i];
        if (!plaza.price || plaza.price <= 0) {
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: `El precio de la plaza tipo ${plaza.plaza_type_id} no puede ser cero o vacío.`,
          });
          return false;
        }
      }
    }
  }

  return true; // Si no hay campos vacíos, retornamos true
}
