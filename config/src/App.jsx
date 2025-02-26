import "../../admin/src/css/style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsuarioPage from "./pages/config/Usuario";
import FeedbackPage from "./pages/config/Feedback";
import TiposPlazasPage from "./pages/config/TiposPlazas";
import HomePage from "./pages/config/Home";
import PlantillaEmailPage from "./pages/config/PlantillaEmail";
import { Menu } from "./components/Menu";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/config/feedback" element={<FeedbackPage />} />
        <Route path="/config/usuarios" element={<UsuarioPage />} />
        <Route path="/config/plazas" element={<TiposPlazasPage />} />
        <Route path="/config/email"  element={<PlantillaEmailPage/>}/> 

      </Routes>
    </Router>
  );
}

export default App;
