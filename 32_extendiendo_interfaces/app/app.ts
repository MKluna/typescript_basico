interface IMatematica {
  total?: number;
  Sumar(a: number, b: number): number;
  Restar(a: number, b: number): number;
}

class Utilidad implements IMatematica {
  Sumar(a: number, b: number): number {
    return a + b;
  }
  Restar(a: number, b: number): number {
    return a - b;
  }
}

interface IFigura1 {
  color: string;
}

interface IFigura2 extends IFigura1 {
  alto: number;
}

let figura2 = {} as IFigura2;
figura2.color = "ROJO";
