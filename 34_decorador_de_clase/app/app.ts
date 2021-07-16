function DecoradorClase(target: Function) {
  target.prototype.Saludar = function () {
    console.log("Hola");
  };
}

@DecoradorClase
class Persona {}

let persona = new Persona();
persona.Saludar();
