import "../../admin/src/css/style.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import UsuarioPage from "./pages/config/Usuario";
import FeedbackPage from "./pages/config/Feedback";
import TiposPlazasPage from "./pages/config/TiposPlazas";
import HomePage from "./pages/config/Home";


// importacion de menu 
import { Layout } from "./Layout";

function App() {
  return (
    <>
    <Layout>


      <HashRouter>
        <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="config/feedback" element={<FeedbackPage />} />
          <Route path="config/usuarios" element={<UsuarioPage />} />
          <Route path="config/plazas" element={<TiposPlazasPage />} />
        </Routes>
      </HashRouter>
    </Layout>
    </>
  );
}

export default App;
