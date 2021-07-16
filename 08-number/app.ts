let numero:number = 12.9;
let edad:number = 22;

if (edad >= 18) {
    console.log('Es mayor de edad');
} else {
    console.log('Es menor de edad');
}

edad = obtenerEdad();

function obtenerEdad() {
    return 30;
}