/**
 * String = "" '' `` 
 * Number = -1 1 1.5
 * Boolean = true false
 * Undefined = undefined
 * 
 * Object
 *  Array = [...] Array(...)
 *  Null = null
 *  Literal Object = { atrib1: valor, atrib2: valor2 }
 *  Functions = function functionName(){} 
 *  Class = class Personas {}
 */

//var 
let edad = 39;
const PI = 3.1416;

let nombre = "Luis";
let titulo = "Intro to Javascript"
let descripcion = `Luis Rodriguez tiene ${edad} de edad.
Es odsdsdsd
aewdasddas


`;

let texto = "";
texto = texto + "Esto es la linea 1";
texto = texto + "Esto es la linea 2";
texto = texto + "Esto es la linea 3";
texto = texto + "Esto es la linea 4";
texto = texto + "Esto es la linea 5";


let grade = -50.45;

let active = true;
let single = false;

/* let saludo;

console.log(saludo == undefined); */


let frutas = [
    'Pera', 'Manzana', 'Uva'
]

let frutas2 = Array('Piña', 'Banana', 'Kiwi')

console.log(frutas[1]);
frutas[1] = "Nispero";
console.log(frutas);


let cube = [[1, 2], [3, 4]]

console.log(cube[1][1]) // cube[fila][columna]

let subcube = cube[1];
subcube[1];


let cube3 = [
    [
        [1, 2, 3]
    ],
    [
        [4, 5, 6]
    ],
    [
        [7, 8, 9]
    ],
];

console.log(cube3[0][0][2]);

let apellido = null;

let persona1 = {
    nombre: '',
    apellido: '',
    edad: 0
}

let persona2 = {
    nombre: '',
    apellido: '',
    edad: 0,
    nombreCompleto: function () {

    }
}

console.log(persona2.nombre)


let alumnos = [
    persona1, persona2
]

console.log(alumnos);
alumnos[1].nombre


class Persona {
    nombre = '';
    apellido = '';
    edad = '';

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    nombreCompleto = function () {
        return this.nombre + " " + this.apellido;
    }
}

let p1 = new Persona('Luis', 'Rodriguez', 39);
let p2 = new Persona('Victor', 'Fernandez', 16);

console.log(p1.nombre);
console.log(p2.nombreCompleto());



console.log(suma(4, 6));