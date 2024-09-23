// Tipo de Datos en JS

// 1. Undefined - (Null)
console.warn("--- Tipo de Dato UNDEFINED")
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de la variable cliente es: ${typeof(cliente)}`);

cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no incializados o no declarados

// 2.BOOLEAN - Boleanos - TRUE/FALSE (Falso/Verdadero)
console.warn("--- Tipo de Dato: BOOLEAN(Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`Es el cliente Premium?: ${esPremium}`)
console.log(`El tipo de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor \"true\" a la variable")
esPremium="true"
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);

console.log("Asignando el valor true a la variable. ")
esPremium=true
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`¿Es el cliente Premium? : ${esPremium}`);
console.log("Cambiando el valor de esPremium a false")
esPremium=0;

esPremium= false;
console.log(`Es un cliente premium ${esPremium}`);
console.log(`El tipo de dato de la variable e Premium es ${typeof(esPremium)}`);
console.log(`Es un cliente premium ${esPremium}`);
if(esPremium)
    console.log("Es un cliente pago por usar el servicio");
else
console.log("Es un usuario que recibe los servicios gratuitos");

//3. NUMBRE
var cantidad;
const costo_producto =10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("---- Tipo de Dato -NUMBER (Numeros, positivos, decimales, flotantes)")
console.log(`Tu saldo al dia de hoy es de: ${saldo_cuenta}, (Tipo de dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que had seleccionado cuesta: ${costo_producto}`)
cantidad = 8;
console.log(`Has elegido comprar: ${cantidad} de productos .`)
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`);
//El cliente realiza un abono de 1500
monto_transaccion=1500;
console.log(`Tu abono de : ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

// 4. STRING (Cadena de Caractés)
const alumno = "Uriel Abdallah Medina Torres"
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres)");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);

// Inicializamos el valor de la variable producto
producto = "MONITOR 20\" FULL HD"
console.log(`El nombre del PRODUCTO es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRING
console.log(`Más adelante podremos transformar el contenido de los STRING usando los métodos y funciones específicas, cómo convertir su valor a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

// 5. BIGINT (Número de Mayor Amplitud)
console.warn("---Tipo de Dato - BIGINT (Número Amplio)");
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890
let numeroGrande3 = 123456789012345678901234567890
let numeroGrande4 = 123456789012345678901234567891234567890

console.log(`El primer experimento de un numero grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`)
console.log(`El segundo experimento de un numero grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`)
console.log(`El tercer experimento de un numero grande es: ${numeroGrande3}, que NO es soportado por NUMBER, perdiendo su presición, y su tipo de dato es: ${typeof(numeroGrande3)}`)
console.log(`El cuarto experimento de un numero grande es: ${numeroGrande4}, que NO es soportado por NUMBER, perdiendo su presición, y su tipo de dato es: ${typeof(numeroGrande4)}`)

numeroGrande3 = BigInt(123456789012345678901234567890n);
console.log(`El quinto experimento de un numero grande es: ${numeroGrande3}, que ya fué convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande3)}`)

numeroGrande4 = BigInt( 123456789012345678901234567891234567890n);
console.log(`El sexto experimento de un numero grande es: ${numeroGrande4}, que ya fué convertido a BIGINT, y su tipo de dato es: ${typeof(numeroGrande4)}`)

// ¿Se pueden realizar operaciones matemáticas entre un NUMBER y un BIGINT?
const numero = 129;
console.log(`Intentado realizar la suma de : numero + numeroGrande3, el resultado es: ${BigInt(numero)+(numeroGrande3)}`);

// 6. SYMBOL (Símbolo)
console.warn("--- Tipo de DATO SYMBOL (Símbolo o Único")
const numero1 = 5;
const numero2 = 5.0;
const numero3 = "5";
const numero4 = "5.0";
const numero5 = Symbol(5)
const numero6 = Symbol(5)
const numero7 = Symbol(5.0)
const numero8 = Symbol("5")
const numero9 = Symbol("5.0")

// pruebas comparativas
//1
console.log("¿Es 5 = 5.0?")
if(numero1 == numero2)
    console.log("Se comparo numero1 con numero2, determinando que tienen el mismo valor.")
else
    console.log("Se comparo numero1 con numero2, determinando que no tienen el mismo valor.")


//2
console.log("¿Es 5 = \"5\"?")
    if(numero1 == numero3) //Estrictamente igual (equidad)= Mismpo valor, mismo tipo de datos
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que no tienen el mismo valor.")

//3
console.log("¿Es 5 === \"5\"?")
    if(numero1 === numero3)
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero3, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//4

console.log("¿Es 5 = \"5.0\"?")
    if(numero1 == numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero4, determinando que no tienen el mismo valor.")

//5        

console.log("¿Es 5 === \"5.0\"?")
    if(numero1 === numero4)
        console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor.")
    else
     console.log("Se comparo numero1 con numero4, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//6
console.log(`¿Es 5 === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero5)}`)
    if(numero1 == numero5)
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero5, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

//7
console.log(`¿Es 5 === Symbol(5.0)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero7)}`)
    if(numero1 == numero7)
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero7, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")
    
//8
console.log(`¿Es 5 === Symbol(\"5\")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero8)}`)
    if(numero1 == numero8)
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero8, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")


//9
console.log(`¿Es 5 === Symbol("5.0")?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero1)} y numero5 del tipo de dato: ${typeof(numero9)}`)
    if(numero1 == numero9)
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero1 con numero9, determinando que tienen el mismo valor, pero NO el mismo tipo de dato.")

// 10 prueba importante

console.log(`¿Es Symbol(5) === Symbol(5)?, antes de compararlos analizamos que tipo de dato son: siendo numero1 del tipo: ${typeof(numero5)} y numero5 del tipo de dato: ${typeof(numero6)}`)
    if(numero5 === numero6)
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor.")
    else
        console.log("Se comparo numero5 con numero6, determinando que tienen el mismo valor y el mismo tipo de dato, es la condición de Symbol la que lo hace único en la memoria.")


// 7. NULL 

console.warn("---- Tipo de Dato -NULL (Nulo o Vacío))");
// El tipo de dato nule se asigna cuando el sistema o el usuario saben de la variable pero prefieren dejarlo vacio, bajo su consentimiento, a diferencia de UNDEFIEND que es un valor desconocido asignado por DEFAULT por JS.

let nombreUsuario = null;
let passUsuario = null;
let generoUsuario= null;
let estatusRelacionSentimental = null;
let fecha_ultimoPost;

// Supongamos que estamos programando una Red Social, tipo Facebook, en la que parte de la información se publicará en el perfil del usuario.

// Sí el usuario no ha iniciado sesión en el dispositivo móvil o en la aplicacion web, puede explorar contenido de acceso publico. y no existira información para mostrar.

// En la HU (Historia de Usuario), que el usuario desea logearse debera ingresar su numbero telefónico o correo electrónico y una contraseña que deberemos guardar en las variables previamente declaradas.

// Supongamos que el usuario: Marco R. con correo electrónico marco.ram@gmail.com desea ingresar con su contraseña: pas1234

nombreUsuario = "marco.ram@gmail.com";
passUsuario = "pass123";

// en este momento de ejecución del sistema no sabemos su género , ni su estatus de relación sentimental.

console.log(`El usuario: ${nombreUsuario} esta intentado logearse con una contraseña de: ${passUsuario}`);

// Lo que prosigue es que el sistema contejara los datos ingresados con la base de datos y en caso de que los datos sean correctos comenzará la sesión en la plataforma actualizando estos valores.

// Dado que Marco es del genero Másculino, y denota que su estatus de relación no ha sido capturado o lo mantiene privado esto generar la actualización de los valores de las variables
generoUsuario="M"
estatusRelacionSentimental=null

console.log(`El usuario: ${nombreUsuario}, se ha logeado exitosamente, al tener acceso a su información de perfil podemos deducir que es del género ${generoUsuario} y que su estatus de relación es: ${estatusRelacionSentimental} y su última publicación la realizó el: ${fecha_ultimoPost}`);

// Comparando NULL vs UNDEFINED
// Si bien UNDEFINED  y NULL tienen el mismo valor , no tienen el mismo tipo de dato


console.log("Comparación de la equidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost == estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor" :
    "Las variables no tienen el mismo valor"
);

console.log("Comparación de la indentidad ente Undefined y  Null:")
console.log(
    (fecha_ultimoPost === estatusRelacionSentimental) ?
    "Ambas variables tienen el mismo valor y el mismo tipo de dato" :
    "Las variables  tienen el mismo valor, pero no el mismo tipo de dato"
);


// 8. FUNCTION (Funciones)
console.warn("--- Tipo de Dato FUNCTION (Función)")

// Declaramos una funcion que nos permita recibir un paramento en este caso el nombre de la persona a saludar, y le enviamos un saludo, esta función la asignamos a una constante.
const saludar =  function(nombre){return `Hola, ${nombre}!`}

// Invocamos a la función declarada
console.log(saludar('Marco'));

//Y que tipo de dato tiene esta constante
console.log(`El tipo de dato de la constante saludar es: ${typeof(saludar)}`)