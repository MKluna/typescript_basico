"use strict";
let persona = {
    nombre: ["Matias", "Luis"],
    edad: 55,
    genero: "masculino",
    intereses: ["programar", "gamer"]
};
let { nombre: nombreCompleto, edad, genero, intereses } = persona;
console.log(nombreCompleto);
