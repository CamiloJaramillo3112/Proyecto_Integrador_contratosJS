import React from "react";

const ContratoDetail = ({ contrato }) => {
  if (!contrato) return <p>Seleccione un contrato</p>;

  return (
    <div>
      <h3>Detalle Contrato</h3>
      <p>ID: {contrato.idContrato}</p>
      <p>Tipo: {contrato.tipoContrato}</p>
      <p>Estado: {contrato.estado}</p>
      <p>Inicio: {contrato.fechaInicio}</p>
      <p>Fin: {contrato.fechaFin}</p>
    </div>
  );
};

export default ContratoDetail;
