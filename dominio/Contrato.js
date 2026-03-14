export class Contrato {
  constructor(idContrato, fechaInicio, fechaFin, tipoContrato, estado) {
    this.idContrato = idContrato;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
    this.tipoContrato = tipoContrato; // Ej: "Indefinido", "Temporal"
    this.estado = estado; // Ej: "Pendiente", "Firmado", "Registrado"
  }

  firmar() {
    this.estado = "Firmado";
  }

  registrar() {
    this.estado = "Registrado";
  }
}
