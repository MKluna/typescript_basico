"use strict";
class Libro {
}
let libro = new Libro();
libro.autor = "Pablo";
libro.propiedad = "Las aventuras de pablo";
/*
  No se puede asignar a "fechaPublicacion"
  porque es una propiedad de solo lectura.ts(2540)
  (property) Libro.fechaPublicacion: any
*/
/* libro.fechaPublicacion = new Date(); */
