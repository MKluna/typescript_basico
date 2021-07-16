"use strict";
var Cliente;
(function (Cliente) {
    function mensaje() {
        return "Hola desde el cliente";
    }
    Cliente.mensaje = mensaje;
})(Cliente || (Cliente = {}));
var Empleado;
(function (Empleado) {
    function mensaje() {
        return "Hola desde el empleado";
    }
    Empleado.mensaje = mensaje;
})(Empleado || (Empleado = {}));
/// <reference path="cliente.ts"/>
/// <reference path="empleado.ts"/>
let mensajeCliente = Cliente.mensaje();
console.log(mensajeCliente);
let mensajeEmpleado = Empleado.mensaje();
console.log(mensajeEmpleado);
