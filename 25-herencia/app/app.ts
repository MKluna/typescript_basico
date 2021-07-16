class Persona {
  nombre: string;
  edad: number;
}

class Estudiante extends Persona {
  numeroCarnet: number;

  constructor(numeroCarnet: number) {
    super();
    this.numeroCarnet = numeroCarnet;
  }
}

class Empleado extends Persona {
  numeroSeguro: number;
}

let estudiante = new Estudiante(135);
let empleado = new Empleado();
