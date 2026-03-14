import React, { useEffect, useState } from "react";
import contratoService from "../../services/contratoService.js";

const ContratoList = () => {
  const [contratos, setContratos] = useState([]);

  useEffect(() => {
    contratoService.listarContratos().then(setContratos);
  }, []);

  return (
    <div>
      <h2>Lista de Contratos</h2>
      <ul>
        {contratos.map(c => (
          <li key={c.idContrato}>
            {c.tipoContrato} - {c.estado} (Inicio: {c.fechaInicio})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContratoList;
