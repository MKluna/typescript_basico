class Estudiante {
  private nombre: string;
  apellido: string;
  edad: number;
  private numeroCarnet: number;
  estado: boolean;

  protected ObtenerNombre(): string {
    return this.nombre;
  }
}

let estudiante = new Estudiante();

class empleado extends Estudiante {
  nombreCompleto: string = this.ObtenerNombre();
}
