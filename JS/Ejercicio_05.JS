//Estilización de los mensajes de salida
const bg = "linear-gradient(11deg, rgba(0,180,200,1) 0%, rgba(10,230,200,1) 22%, rgba(0,280,200,1) 86%)";
const style_console = `background: ${bg}; color: white; border-radius: 6px; padding: 4px; font-size: 1.0rem; font-weight: bold`

//Personalización de las Salidas a Consola
console.warn("Prática 07: Arreglos en Java Script")

console.log("%c1.- Condicionales Sí/Entonces ... (IF)", style_console);
//Le indica al programa que hacer o que no en base a una prueba lógica de verdadero o falso
let fechaActual = new Date();
//let fechaActual = new Date(2024,7,5);
console.log(`Hola, la fecha de hoy es ${fechaActual.toString()}`);

//y si la necesitamos en formato local?
const fechaLocalMX = fechaActual.toLocaleDateString(`es-MX`,
    {
        weekday: `long`,
        year: `numeric`,
        month: `long`,
        day: `numeric`,
        hour: `numeric`,
        minute: `numeric`,
        second: `numeric`,
        hour12: `false`
    }
);

console.log(`en formato local (México): ${fechaLocalMX}`);

// Si es antes de las doce saluda con un buenos días
if(fechaActual.getHours()<12)
    console.log(`Buenos días, hoy es:${fechaLocalMX}`);

// Existe un extensor de la sentencia if(sí) que es else (en caso contrario)
if(fechaActual.getMonth()<=6)
    console.log(`Estas en la primer mitad del año.`);
else
   console.log(`Estamos en la segunda mitad del año.`);

//Que pasa si la validación tiene varias operaciones
const anio = fechaActual.getFullYear();
let inicioPrimavera= new Date(anio, 2, 21);    
let inicioVerano= new Date(anio, 5, 21);  
let inicioOtonio= new Date(anio, 8, 23);
let inicioInvierno= new Date(anio, 11, 21);  
let estacion
let horarioVerano = false;

if(fechaActual >= inicioPrimavera && fechaActual< inicioVerano)
{
    console.log("Estamos en PRIMAVERA...")
    console.log("Inicia la floración...")
    console.log("Los días son más largos y las noches mpas cortas...")
    console.log("Muchosnanimales depiertan de la hinbernación...")
    console.log()
    estacion="Primavera"
    horarioVerano=true
}
else if(fechaActual >= inicioVerano && fechaActual< inicioOtonio)
{
    console.log("Estamos en VERANO...")
    console.log("En esta temporada abundan los días soleados y calurosos...")
    console.log("En esta temporada el indicé de turismo vacacional sube...")
    console.log("Mucha gente busca realizar actividades al aire libre...")
    console.log()
    estacion="Verano"
    horarioVerano=true
}
else if(fechaActual >= inicioOtonio && fechaActual< inicioInvierno)
    {
        console.log("Estamos en OTOÑO...")
        console.log("Los arboles suelen cambiar de follaje...")
        console.log("Se registrarán temperaturas más templadas...")
        console.log("Los animales comienzan con la recolección de alimento y preparan sus espacios para la hinbernación, incluso algunas aves migran...")
        console.log()
        estacion="Otoño"
        horarioVerano=false
    }
else{
    console.log("Estamos en INVIERNO...")
    console.log("En esta temporada los días son más cortos y los noches mas largas...")
    console.log("En algunas regiones suele nevar...")
    console.log("Dado las bajas temperaturas, se recomienda abrigarse...")
    console.log()
    estacion="Invierno"
    horarioVerano=false
}

console.log("%c2.- Operador Ternario (validación?cumple:no_cumple)", style_console);
// En JavaScript exista una operación simplificada que valida si una condición se cumple o no, y uqe hacer en cada caso

const edadPersona= 18;
const mayoriaEdadMX=18;
const mayoriaEdadUS=21;
let evaluarMayoriaEdad=(edad)=>
edad>=18 ? "Eres mayor de edad." : "No eres mayor de edad."
console.log("Evaluando la mayoría de edad de una persona...")
console.log(evaluarMayoriaEdad(edadPersona));

//Sin embargo tenenmos que considerar que la mayoría de edad varia cada país por cuestiones legales, por lo que debemos de considerar un segundo parámetro en la evalucaión

evaluarMayoriaEdad = (edad,pais) => 
(edad>=18 && pais==="MX")? `En ${pais} eres mayor de edad` : `En ${pais}  no eres mayor de edad`;
console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona, "MX"))

console.log("Evaluando la mayoría de edad de una persona en México...")
console.log(evaluarMayoriaEdad(edadPersona, "US"))

console.log("%c3.- SWITCH - CASE (Elección por valor definido", style_console);

//Calculando tu generación en base a tu edad
let anionacimiento = 2005;
let asignaGeneraciion =(anionacimiento) =>{

switch(true){
    case (anionacimiento<1968):
        return "Baby Boomers";
    case(anionacimiento>1968 && anionacimiento<= 1980):
        return "Generation X";
    case(anionacimiento>1981 && anionacimiento<= 1993):
        return "Los Millenials";
    case(anionacimiento>1994 && anionacimiento<= 2010):
        return "Generation Z";
    case(anionacimiento>2011 && anionacimiento<= 2024):
        return "Krystal";
}

}

console.log(`Dado que nació en el año 2005 soy de la generación ${asignaGeneraciion(2005)}`)
