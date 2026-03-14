import React, { useState } from "react";
import { Contrato } from "../../../dominio/Contrato.js";
import contratoService from "../../services/contratoService.js";

const ContratoForm = () => {
  const [formData, setFormData] = useState({
    idContrato: "",
    fechaInicio: "",
    fechaFin: "",
    tipoContrato: "",
    estado: "Pendiente",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear objeto Contrato desde el POJO
    const nuevoContrato = new Contrato(
      formData.idContrato,
      formData.fechaInicio,
      formData.fechaFin,
      formData.tipoContrato,
      formData.estado
    );

    // Enviar al backend usando el servicio
    await contratoService.crearContrato(nuevoContrato);

    alert("Contrato creado exitosamente");
    setFormData({
      idContrato: "",
      fechaInicio: "",
      fechaFin: "",
      tipoContrato: "",
      estado: "Pendiente",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Crear Contrato</h2>

      <label>ID Contrato:</label>
      <input
        type="text"
        name="idContrato"
        value={formData.idContrato}
        onChange={handleChange}
        required
      />

      <label>Fecha Inicio:</label>
      <input
        type="date"
        name="fechaInicio"
        value={formData.fechaInicio}
        onChange={handleChange}
        required
      />

      <label>Fecha Fin:</label>
      <input
        type="date"
        name="fechaFin"
        value={formData.fechaFin}
        onChange={handleChange}
      />

      <label>Tipo de Contrato:</label>
      <select
        name="tipoContrato"
        value={formData.tipoContrato}
        onChange={handleChange}
        required
      >
        <option value="">Seleccione...</option>
        <option value="Indefinido">Indefinido</option>
        <option value="Temporal">Temporal</option>
        <option value="Prácticas">Prácticas</option>
      </select>

      <button type="submit">Guardar Contrato</button>
    </form>
  );
};

export default ContratoForm;
