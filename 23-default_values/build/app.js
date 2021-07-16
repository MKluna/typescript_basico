"use strict";
function obetenerValores(objeto) {
    let { valor1, valor2 } = objeto;
    console.log(valor1);
    console.log(valor2);
}
/* El simbolo de "?" delante del valor le indicamos que puede ser opcional*/
obetenerValores({ valor1: "Remera" });
function Saludar(texto = "Hola 2") {
    console.log(texto);
}
Saludar();
