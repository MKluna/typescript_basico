"use strict";
var Cliente;
(function (Cliente) {
    function mensaje() {
        return "Hola desde el cliente";
    }
    Cliente.mensaje = mensaje;
})(Cliente || (Cliente = {}));
