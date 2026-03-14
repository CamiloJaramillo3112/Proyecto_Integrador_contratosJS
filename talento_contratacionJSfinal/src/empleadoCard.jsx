import React from "react";

const EmpleadoCard = ({ empleado }) => (
  <div className="card">
    <h3>{empleado.nombre}</h3>
    <p>Cargo: {empleado.cargo}</p>
    <p>Salario: {empleado.salario}</p>
  </div>
);

export default EmpleadoCard;
