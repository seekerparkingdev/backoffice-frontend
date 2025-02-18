import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthImage from "../images/auth-image.jpg";
import { validarLogin } from "../utils/validacionform";
import { PostLogin } from "../services/PostLogin";

const LoginPage = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
 
  const [errores, setErrores] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validacion = validarLogin(data);

    if (Object.keys(validacion).length > 0) {
      setErrores(validacion);
    } else {
      setErrores({});
      const response = await PostLogin(data);

      if (response) {
        const token = response.token;
        sessionStorage.setItem("token", token); // Guardar en sessionStorage
      }
    }
  };

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="relative md:flex">
        {/* Contenido */}
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
                ¡Bienvenido a Seeker Parking!
              </h1>

              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="email"
                    >
                      Dirección de email
                    </label>
                    <input
                      onChange={handleChange}
                      name="email"
                      value={data.email}
                      id="email"
                      className="form-input w-full"
                      type="email"
                      required
                    />
                    {errores.email && (
                      <p className="text-red-500 text-xs">{errores.email}</p>
                    )}
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Contraseña
                    </label>
                    <input
                      onChange={handleChange}
                      name="password"
                      value={data.password}
                      id="password"
                      className="form-input w-full"
                      type="password"
                      autoComplete="current-password"
                      required
                    />
                    {errores.password && (
                      <p className="text-red-500 text-xs">{errores.password}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-end mt-6">
                  <button
                    type="submit"
                    className="btn bg-gray-900 text-gray-100 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-white ml-3"
                  >
                    Iniciar sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Imagen */}
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
};

export default LoginPage;
