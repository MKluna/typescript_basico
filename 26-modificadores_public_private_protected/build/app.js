"use strict";
class Estudiante {
    ObtenerNombre() {
        return this.nombre;
    }
}
let estudiante = new Estudiante();
class empleado extends Estudiante {
    constructor() {
        super(...arguments);
        this.nombreCompleto = this.ObtenerNombre();
    }
}
