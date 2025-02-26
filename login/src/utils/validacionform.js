export const validarLogin = ({ email, password }) => {
  const errores = {};

  if (!email) {
    errores.email = "El email es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.email = "El formato del email no es válido.";
  }

  if (!password) {
    errores.password = "La contraseña es obligatoria.";
  } else if (password.length < 6) {
    errores.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errores;
};

export const validarRegistro = ({ email, name, role, password }) => {
  const errores = {};

  if (!email) {
    errores.email = "El email es obligatorio.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errores.email = "El formato del email no es válido.";
  }

  if (!name) {
    errores.name = "El nombre es obligatorio.";
  }

  if (!role) {
    errores.role = "El rol es obligatorio.";
  }

  if (!password) {
    errores.password = "La contraseña es obligatoria.";
  } else if (password.length < 6) {
    errores.password = "La contraseña debe tener al menos 6 caracteres.";
  }

  return errores;
};
