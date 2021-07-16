interface IFigura {
  alto: number;
  ancho: number;
}

let figura: IFigura = {
  alto: 23,
  ancho: 4,
};

interface IPuntos {
  readonly x: number;
  y: number;
}

let punto: IPuntos = {
  x: 23,
  y: 11,
};
