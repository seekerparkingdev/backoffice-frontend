import "../../admin/src/css/style.css";
import { Route, Routes } from "react-router-dom";
import UsuarioPage from "./pages/config/Usuario";
import Feedback from "./pages/config/Feedback";

function App() {
  return (
    <>
      <Routes>
        <Route path="/config" element={<UsuarioPage />} />
        <Route path="/config/feedback" element={<Feedback />} />
      </Routes>
    </>
  );
}

export default App;