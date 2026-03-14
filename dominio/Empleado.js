export class Empleado {
  constructor(idEmpleado, nombre, cargo, salario) {
    this.idEmpleado = idEmpleado;
    this.nombre = nombre;
    this.cargo = cargo;
    this.salario = salario;
    this.contratos = [];
  }

  asignarContrato(contrato) {
    this.contratos.push(contrato);
  }
}
