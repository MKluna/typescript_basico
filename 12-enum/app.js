"use strict";
var estado;
(function (estado) {
    estado[estado["activo"] = 2] = "activo";
    estado[estado["inactivo"] = 5] = "inactivo";
})(estado || (estado = {}));
console.log(estado.activo);
