console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof (cliente)}`);
cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof (cliente)}`);
cliente = 122333444
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof (cliente)}`);
console.log(`El cliente ha realizado: ${NumCompras} este mes`);
/*Boolean- boleanos- true/false*/
console.warn("--- Tipo de DAto : BOOLEAN (Boleano- true/ false")
let esPremium = "No lo se";
console.log(`¿Es el cliente ? : ${esPremium}`)
console.log(`El tipo de dato de la variable esPrremium es: ${typeof (esPremium)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremium = "true"
console.log(`El tipo de dato de la variable esPrremium es: ${typeof (esPremium)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremium = true
console.log(`El tipo de dato de la variable esPrremium es: ${typeof (esPremium)}`);

console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium = 0;
if (esPremium)
    console.log("El cliente pago por usar el servicio. ");
else
    console.log("El cliente cuenta con los servicios gratuitos");
/*Number (Números) */
var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transacción;
console.warn("--- Tipo de Dato -NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de : ${saldo_cuenta}, (Tipo de Dato = ${typeof (saldo_cuenta)})`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos. `)
console.log(`El importe total de la compra es: ${(cantidad * costo)}`)
saldo_cuenta = saldo_cuenta - (cantidad * costo_producto);
console.log(`Tu nuevo saldo es de : ${saldo_cuenta}`);
monto_transacción = 1500;
console.log(`tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de : ${(monto_transacción + saldo_cuenta)}`);
/*String (Cadena) */
const Alumno = "Uriel Abdallah Medina Torres"
let producto;

console.warn("--- Tipo de Dato -STRING (Cadena de caracteres)");
console.log(`El nombre de l alumno es: ${Alumno}, que es un tipo de dato ${typeof (Alumno)}`);
producto = "MONITOR 20\ FULL HD"
console.log(`El nombre del prosucto es: ${producto}, que es un tipo de dato ${typeof (producto)}`);
//Manipulando los Strings
console.log(`Más adelante podremos transformar el contenido de los String usando métodos y funciones, comom convertir su valor a mayúsculas: ${Alumno}=> ${Alumno.toUpperCase()}`);
console.log(`Más adelante podremos transformar el contenido de los String usando métodos y funciones, comom convertir su valor a mayúsculas: ${producto}=> ${producto.toLowerCase()}`);

// BIGINT (número de mayor amplitud)
console.warn("--- Tipo de Dato BIGINT (Número Amplio");
const numerogrande1 = 1234567890
const numerogrande2 = 12345678901234567890
let numerogrande3 = 123456789012345678901234567890
let numerogrande4 = 1234567890123456789012316459871234567890
console.log(`El primer expereimento de un numero grande es: ${numerogrande1}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof (numerogrande1)}`)
console.log(`El segundo expereimento de un numero grande es: ${numerogrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof (numerogrande2)}`)
console.log(`El tercer expereimento de un numero grande es: ${numerogrande3}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof (numerogrande3)}`)
console.log(`El cuarto expereimento de un numero grande es: ${numerogrande4}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof (numerogrande4)}`)

numerogrande3 = BigInt("123456789012345678901234567890");
console.log(`El quinto experimetexpereimento de un numero grande es: ${numerogrande3}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof (numerogrande3)}`)
numerogrande3 = BigInt(1234567890123456789012316459871234567890n);
console.log(`El sexto experimetexpereimento de un numero grande es: ${numerogrande4}, que no es soportado por NUMBER, perdiendo presición, y su tipo de dato es: ${typeof (numerogrande4)}`)
//No se pueden mezlar number con  bigit a menos que sea en cadena
const numero = 123456
console.log(`Intentando realizar la suma de : numero + numerogrande3, el resultado es: ${BigInt(numero) + numerogrande3}`)

//Symbol(simbolo)
console.warn("--- Tipo de Dato Symbol (Simbolo o unico");
const numero1 = 5;
const numero2 = 5.0;
const numero3 = "5";
const numero4 = "5.0";
const numero5 = Symbol(5);
const numero6 = Symbol(5);
const numero7 = Symbol(5.0);
const numero8 = Symbol("5");
const numero9 = Symbol("5.0");
//Pruebas comparartivas
console.log(`¿Es 5 = 5.0?`)
if (numero1 == numero2) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor")

console.log(`¿Es 5 = \"5\?"`)
if (numero1 == numero3) {/*Estric */
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor")

console.log(`¿Es 5 === \"5"?`)
if (numero1 === numero3) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que  tienen el mismo valor pero no el mismo tipo de dato")


console.log("¿Es 5 = 5.0?")
if (numero1 == numero4) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que NO tienen el mismo valor")


console.log(`¿Es 5 === \"5.0"?`)
if (numero1 === numero4) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que  tienen el mismo valor pero no el mismo tipo de dato")


console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de datos son: siendo numero1 del tipo: ${typeof (numero1)} y numero5 del tipo: ${typeof (Symbol(5))}`)
if (numero1 === numero5) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que  tienen el mismo valor pero no el mismo tipo de dato")

console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de datos son: siendo numero1 del tipo: ${typeof (numero1)} y numero5 del tipo: ${typeof (Symbol(5))}`)

if (numero1 == numero7) {
    console.log("Se comparo numero1 con numero7, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero7, determinando que  tienen el mismo valor pero no el mismo tipo de dato")

//8
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de datos son: siendo numero1 del tipo: ${typeof (numero1)} y numero5 del tipo: ${typeof (Symbol("5"))}`)
if (numero1 === numero8) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que  tienen el mismo valor pero no el mismo tipo de dato")

//9
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de datos son: siendo numero1 del tipo: ${typeof (numero1)} y numero5 del tipo: ${typeof (Symbol("5"))}`)
if (numero1 === numero9) {
    console.log("Se comparo numero1 con numero2, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero1 con numero2, determinando que  tienen el mismo valor pero no el mismo tipo de dato")

//10
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de datos son: siendo numero1 del tipo: ${typeof (numero1)} y numero5 del tipo: ${typeof (Symbol("5"))}`)
if (numero5 === numero6) {
    console.log("Se comparo numero5 con numero6, detertminando que tienen el mismo valor.")
}
else
    console.log("Se comparó numero5 con numero6, determinando que  tienen el mismo valor pero no el mismo tipo de dato")

//NULL
console.warn("--- Tipo de Dato - Null (vacío o nulo");


let nombreUsuario = null;
let passUsuario = null;
let generoUsusario = null;
let EstatusRelacionSentimental = null;
let fecha_ultimoPost;

//Supongamos que estamos programando una red social, tipo facebook, en la parte de la informacion se publicara en el perfil del usuario.

//Si el usuario si no ha iniciado sesion en el dispositivo movil o en la aplicacion web, puede explorar contenido de acceso publico, y no existira informacion para mostrar

//En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numero telefonico o correo electronico y una contraseña que deberemos guardar en las variables previamente declaradas

//Supongamos que el usuario: Uriel A. con correo electronico valienteua17@gmail.com  desea ingresar con su contraseña: pass123
nombreUsuario = "valienteua17@gmail.com";
passUsuario = "pass123"

//En este momento de ejecucion del sistema no sabemos su genero, ni estatus de relacion sentimental

console.log(`El usuario: ${nombreUsuario} esta intentando logearse con una contraseña de ${passUsuario}`);

//

console.log(`El usuario: ${nombreUsuario}, se la ha logeado exitosamente, al tener acceso a su informacion de perfil podemos deducir que es el del genero ${generoUsusario} y que su estatus de relacion es ${EstatusRelacionSentimental} y su ultima publicacion la realizo el: ${fecha_ultimoPost} `);

console.log("Comparacion de la equidad entre Undefined y null:")
console.log(
    (fecha_ultimoPost == EstatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor" :
    "Las variables no tienen el mismo valor"

);

console.log("Comparacion de la identidad entre Undefined y null")
console.log(
    (fecha_ultimoPost == EstatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables no tienen el mismo valor"
)