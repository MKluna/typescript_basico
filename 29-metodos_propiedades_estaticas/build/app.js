"use strict";
class Utilidad {
    static calcularAreaDeCirculo(radio) {
        return radio * radio * this.pi;
    }
}
Utilidad.pi = 3.1416;
let valor = Utilidad.calcularAreaDeCirculo(23);
