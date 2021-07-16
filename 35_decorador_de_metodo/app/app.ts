function DecoradorClase(target: Function) {
  target.prototype.Saludar = function () {
    console.log("Hola");
  };
}

function DecoradorMetodo(esModificable: boolean) {
  return function (
    target: any,
    nombrePropiedad: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = esModificable;
  };
}

@DecoradorClase
class Persona {
  constructor() {}

  @DecoradorMetodo(false)
  EnviarMensaje(): void {
    console.log("Enviando Mensaje");
  }
}

let persona = new Persona();
persona.Saludar();
persona.EnviarMensaje();
