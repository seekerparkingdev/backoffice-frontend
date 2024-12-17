import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./css/style.css";
import RegisterPage from "./pages/RegisterPage";
import ResetearContraseña from "./pages/ResetearContraseña";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetearContraseña />} />
      </Routes>
    </>
  );
}

export default App;
