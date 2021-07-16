"use strict";
var ESTADO = false;
/*No se puede asignar a "ESTADO" porque es una constante.ts(2588)
const ESTADO: any
ESTADO = true;*/
if (true) {
    var ESTADO_1 = true;
}
for (var _i = 0, _a = [1, 2, 3, 4, 5, 6]; _i < _a.length; _i++) {
    var iterator = _a[_i];
    console.log(iterator);
}
