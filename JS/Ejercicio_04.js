//Para declarar un arreglo (array) de datos 


const bg = "linear-gradient(11deg, rgba(50,200,0,1)5%, rgba(9,150,121,1) 33%, rgba(0,150,255,1) 86%)";

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

console.log("%c5.- Agregar un nuevo elemento a un arreglo (PUSH)",style_console);
let estudiantes = ["Itzanami Reyes", "Bernardo Rincon", " Kianey Contreras", " Idai Vargas", "Karen Hernandez", "Gerson Cruz"]
console.log (" Los elementos del arreglo son: ")
console.log(estudiantes)
console.log("Agregamos a un nuevo estudiante llamdo : Manuel Meneses")
estudiantes.push("Manuel Meneses")
console.log("Despues de agregarlo los elemtos del arrgelo son: ")
console.table(estudiantes)
//La función push agrega el valor hasta el último
console.log("`Que pasa con los Mixtos? ")
console.log("El arregloMixto actualmente tiene los siguientes elementos")
console.table(arregloMixto);
console.log("Agregamos la palabra: \"Hola\", como nuevo elemento")
arregloMixto.push("Hola");
console.log("Tabien le agregamos el numero 32132113112322132121321321, siendo este BigInt")
arregloMixto.push(BigInt(32132113112322132121321321));
console.log("Despues de estas dos operaciones el arreglo queda con los siguientes elementos: ")
console.table(arregloMixto)

console.log("%c6.- Agregar un nuevo elemento a un arreglo (UNSHIFT) en la posicion actual",style_console);
console.table(estudiantes)
console.log("Ahora agregamos a Uriel Medina, al comienzo del arreglo")
estudiantes.unshift("Uriel Medina")
console.log("La lista actual es de :")
console.table(estudiantes)

console.log("%c7.- Eliminar elementos de un arreglo",style_console);
console.log("El arreglo tiene los siguientes datos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Manuel Meneses, en la última posición")
estudiantes.pop();
console.log("Despues de eliminar el elemento el arreglo quedo con la siguientes manera: ")
console.table(estudiantes)

console.log("%c8.- Eliminar elementos de un arreglo en la primera posición",style_console);
console.log("El arreglo tiene los siguientes datos: ")
console.table(estudiantes)
console.log("Para este caso eliminaremos a Uriel Medina, en la última posición")
estudiantes.shift();
console.log("Despues de eliminar el elemento el arreglo quedo con la siguientes manera: ")
console.table(estudiantes)

console.log("%c9.- Modificar un arreglo en un arreglo nuevo con posiciones definidas (SPLICE)",style_console);
console.log("El arreglo original tiene los siguientes elementos")
console.table(estudiantes)
console.log("Dividir el arreglo en uno nuevo eliminando ciertos elementos en base a su posición")
// Cuando la funcion splice recibe un solo parametro eliminara los elementos de esta posicion en adelante
estudiantes.splice(2)
console.table(estudiantes)

//Cuando la funcion splice recibe 2 parametros elimina todos los elementos que no esten en el rango
estudiantes.push("Carlos Crisanto")
estudiantes.push("Yared Amaury")
estudiantes.push("Dulce Balderas")
estudiantes.push("Angel Paredes")
estudiantes.push("Jonathan Baldemar")
console.log("Se han aagregado 5 nuevos estudiantes, por lo que el arreglo es: ")
console.table(estudiantes)
console.log("Ahora ya tenemos  los elementos suficientes para aplicar el metodo splice con dos párametros que seran 3,5")
estudiantes.splice(3,5)
console.log("Resultado en :")
console.table(estudiantes)
//splice sirve tambien para insertar elementos en posiciones especificas, ahora necesitamos a : "Antonio Ocpaco" entre "Itzanami Reyes" "Bernardo Rincon"
console.log("Ahora vamos a insertar a \"Antonio Ocpaco \"en los elementos de la posicion 0 y 1")
estudiantes.splice(1,0,"Antonio Ocpaco")
console.log("Resultado en :")
console.table(estudiantes)

//Tambien splice sirve para reemplazar elemtos por otros, en este caso reemplazaremos a "Itazanami Reyes" por "Angel Rufino"
console.log("Ahora vamos a insertar a \"Itazanami Reyes\"en los elementos de la posicion \"Angel Rufino\"")
estudiantes.splice(0,1,"Angel Rufino")
console.log("Resultado en :")
console.table(estudiantes)

console.log("%c10.- Metodos para la manipulación de Arreglos INMUTABLES",style_console);
let signosZodiacales= ["Aries", "Tauro", "Geminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis",] 
//Destructuración de Arreglos
let [signo2,,signo3,,,,signo7,,,,] = signosZodiacales;
console.log(`El primer signo zodiacal es: ${signo2}`)
console.log(`El tercer signo zodiacal es: ${signo3}`)
//console.log(`El cuarto signo zodiacal es: ${signo4}`)
console.log(`El séptimo signo zodiacal es: ${signo7}`)
//Congelamos el arreglo volviendo INMUTABKE
Object.freeze(signosZodiacales)

//Filtrado de datos
console.log("%c11.- Filtrado de Elemento dentro de un arreglo utilizando el método FILTER",style_console);
 console.table(estudiantes);
 //antes de filtrar datos llenemos el arreglo con 10 elementos
 estudiantes.push ("Esther Gonzales ");
 estudiantes.push ("Ailton Artiaga");
 estudiantes.push ("Tania Ibarra");
 estudiantes.push ("Lorena Garrido");
 estudiantes.push ("Carlos Fosado");
 estudiantes.push ("Brian Mendoza");
 console.table(estudiantes);

 Object.freeze(estudiantes);
 //Filter es un método que recorre los elementos de un arreglo haciendo alguna tarea en específic, lo que tenemos que considerar es que este nuevo arreglo resultante es un objeto nuevo que puede ser mutable
console.log("Filtrando los primeros 5 elementos")
 let nuevoEstudiante = estudiantes.filter((estudiante,index)=> index<5);
 console.table(nuevoEstudiante);
 console.table(listafiltrada(estudiantes));

 //Filtrar a los estudiantes que su nombre tengan mas de 15 caracteres

let nuevoEstudianteNombre=estudiantes.filter((estudiante)=> estudiante.length>15);
console.table(nuevoEstudianteNombre);



 /*//Intentamos modificar el arreglo inmutable
 estudiantes.pop();
 console.table(estudiantes);*/

 //Intentamos modificar el nuevo arreglo que no ha sido congelado
 nuevoEstudiante.unshift("Diego Tecorralco");
 console.table(nuevoEstudiante)

 function filtralosprimeros5(arregloestudiantes){
    let listafiltrada=[]
    for (let i=0; i<5;i++){
listafiltrada.push(arregloestudiantes[i])

}
return listafiltrada;
 }

 //Filtrado de datos - Transformando los datos
console.log("%c12.- Filtrado de Elemento dentro de un arreglo utilizando el método MAP, en el que necesitamos transformarlos",style_console);
console.log("Imprimimos los elementos actuales de signosZodiacales")
console.log(signosZodiacales);
//Q8ue podemos hacer si necesitamos el mismo arreglo pero ahora con todos sus elementos con letras MAYÚSCULAS
console.table(signosZodiacales.mpa(signoZodiacal=>signoZodiacal.toUpperCase()));

//Reducción de eñlemtos  de un arreglo, se usa cuando debemos de hacer operaciones matemáticas o cuantitativas a un arreglo, como obtener los totales, la idea es reducir la lista de un valor más simplificado

const costoListaCompras = ["15", "52", "50", "16.90","32.50", "28", "105","45.2","94.10"]
//Cómo podemos calcular  el total de una lista de costos de un carrito de compras
console.log("Los precios son")
console.table(costoListaCompras)
console.log(`El total de la compra es: ${costoListaCompras.reduce((total,precio)=> total+precio,0).toFixed(2)}`)