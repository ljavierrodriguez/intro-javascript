saludo();

function saludo(){
    console.log("Hola desde saludo");
}


const saludo2 = function(){
    console.log("Hola desde saludo 2");
}

saludo2();

const saludo3 = () => "Hola desde saludo 3";

const saludo4 = (num1, num2) => {
    const resultado = num1 + num2;
    console.log(resultado);
    return "Hola desde saludo 4";
}

function nombreCompleto(){

    return getNombrecompleto();

    let nombre = Luis;

    function getNombrecompleto(){
        return "Rodriguez, Luis";
    }

}

let num11 = 5;
let num22 = 10;

/* function suma(num1, num2 = 0){
    return num1 + num2;
} */

const suma = (num1, num2) => num1 + num2;
console.log(suma(num11, num22));