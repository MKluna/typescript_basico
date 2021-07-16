"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function DecoradorClase(target) {
    target.prototype.Saludar = function () {
        console.log("Hola");
    };
}
function DecoradorMetodo(esModificable) {
    return function (target, nombrePropiedad, descriptor) {
        descriptor.writable = esModificable;
    };
}
let Persona = class Persona {
    constructor() { }
    EnviarMensaje() {
        console.log("Enviando Mensaje");
    }
};
__decorate([
    DecoradorMetodo(false)
], Persona.prototype, "EnviarMensaje", null);
Persona = __decorate([
    DecoradorClase
], Persona);
let persona = new Persona();
persona.Saludar();
persona.EnviarMensaje();
