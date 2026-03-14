import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage.jsx";
import ContratacionPage from "./pages/ContratacionPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<DashboardPage />} />

        {/* Ruta para el flujo de contratación */}
        <Route path="/contratacion" element={<ContratacionPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
