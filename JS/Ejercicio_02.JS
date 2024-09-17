console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);
cliente="Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);
cliente=122333444
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es ${typeof(cliente)}`);
console.log(`El cliente ha realizado: ${NumCompras} este mes`);
/*Boolean- boleanos- true/false*/
console.warn("--- Tipo de DAto : BOOLEAN (Boleano- true/ false")
let esPremium = "No lo se";
console.log(`¿Es el cliente ? : ${esPremium}`) 
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremium="true"
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPrremium es: ${typeof(esPremium)}`);

console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;
if(esPremium)
    console.log("El cliente pago por usar el servicio. ");
else
    console.log("El cliente cuenta con los servicios gratuitos");
/*Number (Números) */ 
var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transacción;
console.warn("--- Tipo de Dato -NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de : ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`)
console.log(`El producto que has seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos. `)
console.log(`El importe total de la compra es: ${(cantidad*costo)}`)
saldo_cuenta= saldo_cuenta -(cantidad*costo_producto);
console.log(`Tu nuevo saldo es de : ${saldo_cuenta}`);
monto_transacción=1500;
console.log(`tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de : ${(monto_transacción+saldo_cuenta)}`);