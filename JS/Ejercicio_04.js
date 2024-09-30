//Para declarar un arreglo (array) de datos 


const bg = "linear-gradient(11deg, rgba(2,0,336,1)0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console = `background: ${bg}; color:white; border-radius: 6px; padding : 4px; font-size: 1.0rem; font-weigth: bold`


const mesesAnio=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]

console.log("%c1.- Declaración de un Arreglo (Array)",style_console);

console.log(mesesAnio);
console.table(mesesAnio);

// Acceder a los valores de un arreglo de datos para acceder al valor solo basta enviar la posición del dato que queremos dentro de los limites establecidos siendo el limite inferior 0 y el superior tamaño -1

console.log("%c2.- Leer o recuperar los datos de un arreglo",style_console);
console.log(`El primer mes del año es: ${mesesAnio[0]}`)
console.log(`El ultimo mes del año es: ${mesesAnio[-1]}`)


console.log(`El mes del año es la posición -1 es: ${mesesAnio[-1]}`)
console.log(`El treceavo mes del año en la posición es: ${mesesAnio[12]}`)

console.log(`¿Que tipo de dato es un arreglo? : ${typeof(mesesAnio)}`)

// Al ser JavaScript un lenguaje debilmente tipado podremos crear arreglos mixtos de tipos  de datos
console.log(`Declaramos un arreglo mixto`);
const saludar = function(nombre){return `Hola, ${nombre}`}

let arregloMixto= ["String",5,45.26,-200,-.16854, Symbol("MARCH"),"U",false,BigInt(1111222233334444555566667777),true,{latitud: "20° 18' 0\" N", longitud: "97° 58' 00\" W", altitud: 796}]

//Mostraremos el contenido del objeto

console.log(arregloMixto)
console.table(arregloMixto)
console.log(typeof(arregloMixto))

console.log("Verificamos los tipos de datos de los elementos del arreglo: ")

console.log(`El dato en la posición[0]=${arregloMixto[0]} y es del tipo: ${typeof(arregloMixto[0])}`)

console.log(`El dato en la posición[0]=${arregloMixto[1]} y es del tipo: ${typeof(arregloMixto[1])}`)
console.log(`El dato en la posición[0]=${arregloMixto[2]} y es del tipo: ${typeof(arregloMixto[2])}`)
console.log(`El dato en la posición[0]=${arregloMixto[3]} y es del tipo: ${typeof(arregloMixto[3])}`)
console.log(`El dato en la posición[0]=${arregloMixto[4]} y es del tipo: ${typeof(arregloMixto[4])}`)
console.log(`El dato en la posición[0]=${arregloMixto[5].toString} y es del tipo: ${typeof(arregloMixto[5])}`)
console.log(`El dato en la posición[0]=${arregloMixto[6]} y es del tipo: ${typeof(arregloMixto[6])}`)
console.log(`El dato en la posición[0]=${arregloMixto[7]} y es del tipo: ${typeof(arregloMixto[7])}`)
console.log(`El dato en la posición[0]=${arregloMixto[8]} y es del tipo: ${typeof(arregloMixto[8])}`)
console.log(`El dato en la posición[0]=${arregloMixto[9]} y es del tipo: ${typeof(arregloMixto[9])}`)
console.log(`El dato en la posición[0]=${arregloMixto[10]} y es del tipo: ${typeof(arregloMixto[10])}`)
console.log(`El dato en la posición[0]=${arregloMixto[11]} y es del tipo: ${typeof(arregloMixto[11])}`)
console.log(`El dato en la posición[0]=${arregloMixto[12]} y es del tipo: ${typeof(arregloMixto[12])}`)


console.log("%c3.- Arreglos Multidimencionales (Matrices)",style_console);
console.log("Declaramos una matriz regular")

let matriz=[[1,2,3,4],['a','b','c','d']]

console.log(matriz)
console.table(matriz)

console.log("Declaramos una matriz irregular")

let matrizIrregular=[["Uriel","Lizbeth","Maria","Ines"],[true,false,null],[9,2]]
console.log(matrizIrregular)
console.table(matrizIrregular)

console.log("Leyendo las propiedades de una matriz regulares")
console.log(`Elemento de la posición [0][0]: ${matriz[0][0]}`)
console.log(`Elemento de la posición [1][2]: ${matriz[1][2]}`)

console.log("Leyendo las propiedades de una matriz Irregulares")
console.log(`Elemento de la posición [0][0]: ${matrizIrregular[0][0]}`)
console.log(`Elemento de la posición [1][2]: ${matrizIrregular[2][0]}`)
console.log(`Elemento de la posición [1][2]: ${matrizIrregular[1][2]}`)


// Funciones y Metodos  de arreglos 
// los metodos de un objeto siempre son involucrados usando un . y al terminos se delimitan los parametros entre (), en caso de que no lleve (), no es un metodo sino una propiedad

console.log("%c4.- Funciones o Metodos de los arreglos (Array) Methos or array Funtions",style_console);
console.log("¿Como saber cual es el tamaño de un arreglo ?")
console.log(`meses es un arreglo del tamaño: ${mesesAnio.length}`)
console.log(`arregloMixto es un arreglo de tamaño: ${arregloMixto.length}`)
console.log("¿Que pasa con los multidimencionales ?")
console.log(`Matriz es un arreglo de tamaño: ${matriz.length}`)
console.log("mmm, eso me da el tamaño del número de filas de la matriz , pero como saber el numero de columnas ")
console.log(`la matriz regular tiene un numero de  ${matriz[0].length}`)
console.log("y para las irregulares?")
// para saber la dimenciones de una matriz irregular podemos hacer el uso de ciclo

let numeroFilas = matrizIrregular.length
for(let i=0;i<numeroFilas;i++)
    console.log(`La longitud de la fila  ${[i]} es = ${matrizIrregular[i].length}`)
