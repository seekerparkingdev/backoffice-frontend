import "./css/style.css";
import { Route, Routes } from "react-router-dom";
import ConfiguracionPage from "./pages/configuracionPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/config" element={<ConfiguracionPage />} />
      </Routes>
    </>
  );
}

export default App;
