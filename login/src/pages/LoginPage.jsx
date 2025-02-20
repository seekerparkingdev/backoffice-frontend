import React, { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { validarLogin } from "../utils/validacionform";
import { PostLogin } from "../services/PostLogin";
import TokenIframe from "../components/TokenIframe";

const LoginPage = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [errores, setErrores] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [isIframeVisible, setIsIframeVisible] = useState(false);

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
        sessionStorage.setItem("token", token);
        setIsIframeVisible(true);  
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#3f51b5] flex flex-col items-center justify-center px-4">
        {isIframeVisible && <TokenIframe />}
      <div className="w-full max-w-md md:max-w-lg px-6">
        {/* Logo y título */}
        <div className="text-center mb-10 md:mb-16">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6 md:mb-10">
            <img src="assets/icono.png" alt="Seeker Logo" className="h-16 md:h-20 w-auto" />
            <span className="text-white text-5xl md:text-7xl font-urbanist font-bold">Seeker</span>
          </div>

          <h1 className="text-white text-2xl md:text-4xl font-urbanist font-semibold mb-2">
            ¡Bienvenido a Seeker Parking!
          </h1>
          <h2 className="text-white text-xl md:text-3xl font-urbanist font-semibold">
            Inicia sesión
          </h2>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
          <div className="relative">
            <Mail className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-[#394A8F]" size={18} />
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              className="w-full pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-full bg-[#E8EDF2] placeholder-[#394A8F] focus:outline-none"
              placeholder="Email"
              required
            />
            {errores.email && <p className="text-red-200 text-sm mt-1 ml-4">{errores.email}</p>}
          </div>

          <div className="relative">
            <Lock className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-[#394A8F]" size={18} />
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              className="w-full pl-12 md:pl-14 pr-6 py-3 md:py-4 rounded-full bg-[#E8EDF2] placeholder-[#394A8F] focus:outline-none"
              placeholder="Contraseña"
              required
            />
            {errores.password && <p className="text-red-200 text-sm mt-1 ml-4">{errores.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 shadow-md rounded-full bg-white text-[#394A8F] font-urbanist font-bold"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
