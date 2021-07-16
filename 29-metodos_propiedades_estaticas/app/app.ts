class Utilidad {
  static pi: number = 3.1416;

  static calcularAreaDeCirculo(radio: number): number {
    return radio * radio * this.pi;
  }
}

let valor: number = Utilidad.calcularAreaDeCirculo(23);
