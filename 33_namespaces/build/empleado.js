"use strict";
var Empleado;
(function (Empleado) {
    function mensaje() {
        return "Hola desde el empleado";
    }
    Empleado.mensaje = mensaje;
})(Empleado || (Empleado = {}));
