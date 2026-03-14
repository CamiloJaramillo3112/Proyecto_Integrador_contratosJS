export class ProcesoContratacion {
  constructor(idProceso, empleado, contrato, documentos = []) {
    this.idProceso = idProceso;
    this.empleado = empleado;
    this.contrato = contrato;
    this.documentos = documentos;
    this.estado = "En curso";
  }

  validarDocumentos() {
    return this.documentos.every(doc => doc.validar());
  }

  finalizar() {
    if (this.validarDocumentos() && this.contrato.estado === "Firmado") {
      this.estado = "Finalizado";
    } else {
      this.estado = "Pendiente";
    }
  }
}
