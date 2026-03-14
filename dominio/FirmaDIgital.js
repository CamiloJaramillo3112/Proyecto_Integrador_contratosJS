export class FirmaDigital {
  constructor(idFirma, empleado, contrato, fechaFirma) {
    this.idFirma = idFirma;
    this.empleado = empleado;
    this.contrato = contrato;
    this.fechaFirma = fechaFirma;
  }

  validarFirma() {
    return this.empleado !== null && this.contrato.estado === "Pendiente";
  }
}
