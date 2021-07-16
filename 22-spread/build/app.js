"use strict";
let nombres = ["Martin", "Matias", "Joji"];
let numeros = [1, 2, 3, 4, 5, 6];
let agrupar = ["Prueba", 100, ...nombres, ...numeros];
console.log(agrupar);
let libros = {
    autor: "Oscar",
    titulo: "La perla negra",
    fecha: new Date(2021, 5, 2),
};
let vehiculo = {
    color: "Negro",
    puerta: "A3",
    marca: "Toyota",
};
let agruparDos = Object.assign(Object.assign({ prueba: "hola" }, libros), vehiculo);
console.log(agruparDos);
