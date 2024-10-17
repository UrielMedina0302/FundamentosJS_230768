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


console.log("%c4.- Manejo de Excepciones (TRY /CATCH)", style_console);

//En algunas ocaciones existiran errores que no son culpa del programa, si no del usuario, la red, el so o incluso de un maddleware., pero si duda debenmos controlar para evitar las fallas de ejecucion 

console.log("Intentamos dividir :  0/10, el resultado es: ")
try{
    let result= 0/10;//Dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}
console.log("Intentamos dividir : 10 /0, el resultado es: ")
try{
    let result= 10/0;//Dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}
console.log("Intentamos dividir : 10/a, el resultado es: ")
try{
    let result= 10/a;//Dividir un caracter entre 10
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}
console.log("Intentamos dividir :  el valor de la variable a/0, el resultado es: ")
try{
    let result= a/0;//Dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}

console.log("Intentamos dividir : el valor de la variable x / entre el valor de la varibale y, el resultado es: ")
try{
    let x=8, y=2,result= x/y;//Dividir un entero entre 0
    console.log(result)
}
catch(error)
{
    console.log("Ocurrio un error: "+ error.message);
}

console.log("%c5.- Control de Ciclos (BREAK/CONTINUA)", style_console);
//En ocaciones sera importsnte detener un clico de manera abrupta para controlar casos especiales en un ciclo

console.log("Vamos a contar del 1 al 10 ...");
for(let num=1;num<=10;num++)
    console.log(num)

console.log("Ahora necesitamos que si llega a 7 pares de contar.. suponiendo que solo por hoy es de mala suerte...")
for(let num=1;num<=10;num++)
    if(num==7)
        break;
    else
    console.log(num)

    console.log("Ahora necesitamos que si llega a 7 te saltes ese numero y continues")
for(let num=1;num<=10;num++)
    if(num==7)
        continue;
    else
    console.log(num)

console.log("%c.- Ciclo iterativo(For)", style_console);

//Recorre de manera iterativa (i), de incremental o decremental

console.log("Los días de la semana son: ")
let dias = ["Domingo", "Lunes", "Martes","Miercoles","Jueves","Viernes","Sabado",]

for(let i=0;i<dias.length;i++)
    console.log(dias[i])

console.log("Ahora vamos a imprimir los meses en orden descendente...")

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", " Diciembre"] 
for(let i=11;i>=0;i--)
    console.log(meses[i])

console.log("%c7.- Ciclo Condicionales-(while)", style_console);
//Estos ciclos (BUCKLE) dependen de una condición para continuar ejecutandose

let finDeSemana = false;
let j=0;
let mensaje="";
while(j<=dias.length)
{
   
    switch(j)
    {
        case 0:
            finDeSemana=true;
            mensaje = "Mimimngo... ZZZzzzZZZzzZ";
            break;
        case 1:
            finDeSemana=false
            mensaje ="Lunes de garfield";
            break;
        case 2:
            finDeSemana=false;
            mensaje ="El sufrimiento apenas comienza";
            break;
        case 3:
            finDeSemana=false;
            mensaje ="Ombligo de sufrimineto";
            break;
        case 4:
            finDeSemana=false;
            mensaje ="Animo ya casi acaba tu sufrimiento";
            break;    
        case 5:
            finDeSemana=false;
            mensaje ="Viernesito de ver maraton de anime";
            break;
        case 6:
            finDeSemana=true;
            mensaje ="San sabadito";
            break;
        }
        if(!finDeSemana){
        console.log(`Dia ${j} ${dias[j]}`)
        console.log(`Mensaje del dia ${mensaje}`)
    }
        j++;    
}

console.log("%c8.- Ciclo Condicionales- que se ejecuta al menos una vez- (do while)", style_console);
//simulamos una lista de episodios de una temporada
let episodios = [
    "",
    "",
    "",
    "",
    ""
]
let indice = 0;
let continuarviendo = true;
//Esta variable simula la decision del usuario de continuar viendo

do{
    console.log(`Reproduciendo ${episodios[indice]}`);
    //simulamos la reproduccion del episodio
    indice++;

    //Simulamos la pregunta al usuario si deseae continuar viendo
    if(indice<episodios.length){
        continuarviendo=confirm("¿Deseas continuar con el siguiente episodio?")
    }else{
        continuarviendo = false;

    }
}while(continuarviendo && indice < episodios.length)

    console.log("Fin de la reproducción")

    console.log("%c9.- Ciclos parar recorrer elementos finitos- (FOR ... OF)", style_console);

    let seriesTrending =[
        {nombre: "Black Clover", temporadas:  4, totalviewers: "1.5M", totalReproducciones: "3.6M"},
        {nombre: "Demon Slayer", temporadas:  5, totalviewers: "1.5M", totalReproducciones: "3.6M"},
        {nombre: "Los siete pecados capitales", temporadas:  5, totalviewers: "1.5M", totalReproducciones: "3.6M"},
        {nombre: "Naturo", temporadas:  6, totalviewers: "1.5M", totalReproducciones: "3.6M"},
        {nombre: "My hero academia", temporadas:  4, totalviewers: "1.5M", totalReproducciones: "3.6M"}
    ];

    //Usando}/{

    for(let serie of seriesTrending){
        console.log(`serie: ${serie.nombre}, Temporadas: ${serie.temporadas}`)
    }
    try{
        console.log(`La última serie leida fue: ${serie.nombre}`);
    }
    catch(error){
        console.log("Mensaje de error: " + error.message)
    }

    console.log("%c10.- Ciclos parar recorrer elementos finitos- (FOR ... IN)", style_console);

    //Usando for ...in parar recorrer cada serie
    for(let i in seriesTrending){
        console.log(`serie ${parseInt(i) +1}:`);
        for(let propiedad in seriesTrending[i]){
            console.log(`${propiedad}: ${seriesTrending[i][propiedad]}`)
        }
        console.log("---------------")
    }

    console.log("%c11.- Ciclos parar recorrer elementos finitos- (FOR ... IN)", style_console);

    let seriesTrending2=[
        {nombre: "Black Clover", temporadas:  4, totalviewers: 1500000, totalReproducciones: 3600000},
        {nombre: "Demon Slayer", temporadas:  5, totalviewers: 3000000, totalReproducciones: 3966640},
        {nombre: "Los siete pecados capitales", temporadas:  5, totalviewers: 1600000, totalReproducciones: 3800000},
        {nombre: "Naturo", temporadas:  6, totalviewers: 1500000, totalReproducciones: 3700000},
        {nombre: "My hero academia", temporadas:  4, totalviewers: 9000000, totalReproducciones:2300000}
    ];

    //Usando forEach para recorrer cada serie y cacular la calificacion
    seriesTrending2.forEach=((serie, index) => {
        let calificacion = (serie.reproducciones / serie.viewers).toFixed(2)
    //caclcula la caclificaciopn y lo redondeaa 2 decimales
        console.log(`serie: ${index + 1}:`);
        console.log(`Nombre: ${serie.nombre}`);
        console.log(`Temporadas: ${serie.temporadas}`);
        console.log(`Viewers : ${serie.viewers}`);
        console.log(`Reproducciones ${serie.reproducción}`);
        console.log(`Calificación:  ${calificacion} `);
        console.log(`--------------------`)
    });

//Usando filter para filtrar, y map para transformar la informacion
//Lista de series que queremos verificar
let seriesDeseadas=["Black Clover", "Naruto", "My hero academia"];

//Usando map e includes para filtrar y obtener los nombre de series con 3 temporadas
let SeriesconCuatroTemporadas=seriesTrending2
.filter(serie=>serie.temporadas <=4)//Filtramos las series que tiene temporadas
.map(serie => serie.nombre)//Obtenemos solo los nombres de esas series
.filter(nombre=>seriesDeseadas.includes(nombre));//filtramos las que estan en la lista de series

//Mostrar resultados
console.log("series con 3 temporadas que estan en listas deseadas: ")
console.log(SeriesconCuatroTemporadas);
