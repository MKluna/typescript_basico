function obetenerValores(objeto: { valor1: string; valor2?: number }) {
  let { valor1, valor2 } = objeto;
  console.log(valor1);
  console.log(valor2);
}

/* El simbolo de "?" delante del valor le indicamos que puede ser opcional*/

obetenerValores({ valor1: "Remera" });

function Saludar(texto: string = "Hola 2") {
  console.log(texto);
}

Saludar();
