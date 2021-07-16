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

function DecoradorPropiedad(esModificable: boolean) {
  return function (target: any, nombrePropiedad: string): any {
    let descriptor: PropertyDescriptor = {
      writable: esModificable,
    };
    return descriptor;
  };
}

@DecoradorClase
class Persona {
  @DecoradorPropiedad(true)
  _nombre: string;
  constructor(nombre: string) {
    this._nombre = nombre;
  }

  @DecoradorMetodo(false)
  EnviarMensaje(): void {
    console.log("Enviando Mensaje");
  }
}

let persona = new Persona("Bob");
console.log(persona);
persona.Saludar();
persona.EnviarMensaje();
