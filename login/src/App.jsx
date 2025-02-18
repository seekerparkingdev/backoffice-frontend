import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import "./css/style.css";
import RegisterPage from "./pages/RegisterPage";
import ResetearContraseña from "./pages/ResetearContraseña";
import TokenIframe from "./components/TokenIframe";
function App() {
  return (
    <>
      <TokenIframe />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/reset-password" element={<ResetearContraseña />} />
      </Routes>
    </>
  );
}

export default App;
