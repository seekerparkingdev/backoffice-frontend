import "../../admin/src/css/style.css";
import { Route, Routes } from "react-router-dom";
import UsuarioPage from "./pages/config/Usuario";
import FeedbackPage from "./pages/config/Feedback";
import TiposPlazasPage from "./pages/config/TiposPlazas";
 
function App() {

  return (
    <>
      <Routes>
        <Route path="config/feedback" element={<FeedbackPage />} />
        <Route path="config/usuarios" element={<UsuarioPage />} />
        <Route path="config/plazas" element={<TiposPlazasPage />} />
      </Routes>
    </>
  );
}

export default App;
