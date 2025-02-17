import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../images/auth-image.jpg";
import { validarRegistro } from "../utils/validacionform";

function RegisterPage() {
  const [data, setData] = useState({
    email: "",
    name: "",
    role: "",
    password: "",
  });

  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacion = validarRegistro(data);
    if (Object.keys(validacion).length > 0) {
      setErrores(validacion);
    } else {
      // Enviar datos al backend para registrar al usuario
      console.log("Registro correcto");
      // Redireccionar a la página de login
      // window.location.href = "/login";
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="relative md:flex">
        {/* Content */}
        <div className="md:w-1/2">
          <div className="min-h-[100dvh] h-full flex flex-col after:flex-1">
            {/* Header */}
            <div className="flex-1">
              <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link className="block" to="/">
                  <svg
                    className="fill-violet-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width={32}
                    height={32}
                  >
                    <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="max-w-sm mx-auto w-full px-4 py-8">
              <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold mb-6">
                Crea tu cuenta
              </h1>
              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Dirección de email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      className="form-input w-full"
                      type="email"
                    />
                    {errores.email && (
                      <p className="text-red-500 text-xs">{errores.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="name"
                    >
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      className="form-input w-full"
                      type="text"
                    />
                    {errores.name && (
                      <p className="text-red-500 text-xs">{errores.name}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="role"
                    >
                      Tu rol <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="role"
                      name="role"
                      value={data.role}
                      onChange={handleChange}
                      className="form-select w-full"
                    >
                      <option value="">Selecciona un rol</option>
                      <option value="Administrador">Administrador</option>
                      <option value="Operador">Operador</option>
                      <option value="Cliente">Cliente</option>
                      <option value="Propietario de Estacionamiento">
                        Propietario de Estacionamiento
                      </option>
                      <option value="Soporte Técnico">Soporte Técnico</option>
                    </select>
                    {errores.role && (
                      <p className="text-red-500 text-xs">{errores.role}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Contraseña <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className="form-input w-full"
                      type="password"
                      autoComplete="on"
                    />
                    {errores.password && (
                      <p className="text-red-500 text-xs">{errores.password}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <div className="mr-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="text-sm ml-2">
                        Envíame un correo electrónico sobre novedades nuevas.
                      </span>
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-3 whitespace-nowrap"
                  >
                    Registrarse
                  </button>
                </div>
              </form>
              {/* Footer */}
              <div className="pt-5 mt-6 border-t border-gray-100 dark:border-gray-700/60">
                <div className="text-sm">
                  ¿Tienes una cuenta?{" "}
                  <Link
                    className="font-medium text-violet-500 hover:text-violet-600 dark:hover:text-violet-400"
                    to="/"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2"
          aria-hidden="true"
        >
          <img
            className="object-cover object-center w-full h-full"
            src={AuthImage}
            width="760"
            height="1024"
            alt="Authentication"
          />
        </div>
      </div>
    </main>
  );
}

export default RegisterPage;
