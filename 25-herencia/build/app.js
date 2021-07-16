"use strict";
class Persona {
}
class Estudiante extends Persona {
    constructor(numeroCarnet) {
        super();
        this.numeroCarnet = numeroCarnet;
    }
}
class Empleado extends Persona {
}
let estudiante = new Estudiante(135);
let empleado = new Empleado();
