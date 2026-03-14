export class Documento {
  constructor(idDocumento, tipo, rutaArchivo, obligatorio = false) {
    this.idDocumento = idDocumento;
    this.tipo = tipo; // Ej: "Cédula", "Certificado", "Anexo SST"
    this.rutaArchivo = rutaArchivo;
    this.obligatorio = obligatorio;
  }

  validar() {
    return this.rutaArchivo !== null && this.rutaArchivo !== "";
  }
}
