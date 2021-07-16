const ESTADO:Boolean = false;
/*No se puede asignar a "ESTADO" porque es una constante.ts(2588)
const ESTADO: any
ESTADO = true;*/

if (true) {
    const ESTADO = true;
}

for (const iterator of [1,2,3,4,5,6]) {
    console.log(iterator);
}