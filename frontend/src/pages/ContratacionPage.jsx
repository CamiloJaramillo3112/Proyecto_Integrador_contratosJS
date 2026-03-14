import React from "react";
import ContratoForm from "../components/contratos/ContratoForm.jsx";
import ContratoList from "../components/contratos/ContratoList.jsx";

const ContratacionPage = () => (
  <div>
    <h1>Gestión de Contratación</h1>
    <ContratoForm />
    <ContratoList />
  </div>
);

export default ContratacionPage;
