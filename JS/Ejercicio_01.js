// Cometarios de una sola línea
/*
   Cometarios multi línea
   */
//EJERCICIO 01:Declaración de Variables

// a)Var

var miNombre = "Uriel A.";
var misApellidos;
var miEdad = 32;

//El objeto de consola nos permite enviar datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método

console.warn("--- Declaración de variables usando. VAR")
console.log("Intentando leer la variables:", miNombre, misApellidos);

misApellidos = "Medina Torres";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas: ", miNombre, misApellidos);


//una variable puede cambiar de valor en el proceso de ejecución del programa.

// b) Cost

console.warn("--- Declaración de variables del tipo constantes usando: CONST")
const miUniversidad = "UT xicotepec";
const miMatricula=230768;

console.log("Hola ", miNombre," ",misApellidos," "," se que estudias actualmente en: ",miUniversidad," asignaron la matricula: ",miMatricula," y tienes una edad de:", miEdad, " años.");

//Para saber el tipo de dato que tiene una variable o constante podemos utilizar la función typeOF()

console.log("misApellidos es del tipo", typeof(misApellidos));
console.log("miUniversidad es del tipo", typeof(miUniversidad));
console.log("miMatricula es del tipo", typeof(miMatricula));
console.log("miEdad es del tipo", typeof(miEdad));

// c) LET
let miFechaNacimiento="1992-09-16";
let miColorFavorito;

console.warn("--- Declaración de Variable Locales usando: LEFT")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el:", miFechaNacimiento," y tu colorFavorito es: mmmmmmmmmm dejame pensar .....")
miColorFavorito="Verde";
console.log("Creo que es ${miColorFavorito}, le atine?") // La manera de mezclar texto fijos con el valor actual de las variables se le conoce como: interpletación y deben iniciar y finalizar en un backtic - tilde inversa
console.log("Analizando los datos puedo deducir que:");
console.log("miColorFavorito es del tipo:", typeof(miColorFavorito))
console.log("miFechaNacimiento es del tipo:", typeof(miFechaNacimiento))