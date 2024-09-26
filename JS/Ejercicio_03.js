//  Repaso de  Objetos
const bg = "linear-gradient(11deg, rgba(2,0,336,1)0%, rgba(9,9,121,1) 33%, rgba(0,212,255,1) 86%)";

const style_console = `background: ${bg}; color:white; border-radius: 6px; padding : 4px; font-size: 1.0rem; font-weigth: bold`

//Personalización de las salidas a consola
console.warn("Practica 05: Repaso de objetos en JavaScript");
//VARIABLES INDEPENDIENTES
    console.log("%c1.- Variables Independientes", style_console);
    
//Declaramos valores independientes relacionadas a un producto

let Producto_Nombre= "Computadora Gammer Asus Laptop 17\"";
let Producto__Marca="ASUS";
let Producto__Modelo="TUF 17";
let Producto__Precio= 15749.50;
let Producto__Disponibilidad=true;
let Producto__SKU= Symbol("TUF707W-HX221");
let Producto__Stock=15;
let Producto__Imagen=null;
let Producto__Barcode;
let Producto__Categorias=["Electronicos","Computación", "Gamming","Promociones Buen Fin","Mejor valorados"];

//Accedemos a los valores  de las caracteristicas del producto de manera independiente

console.log(`Los datos de PRODUCTO son : \n
    Nombre:${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>
    Marca:${Producto__Marca}, Tipo de Dato <${typeof(Producto__Marca)}>
    Modelo:${Producto__Modelo}, Tipo de Dato <${typeof(Producto__Modelo)}>
    Precio:${Producto__Precio}, Tipo de Dato <${typeof(Producto__Precio)}>
    Disponibilidad:${Producto__Disponibilidad}, Tipo de Dato <${typeof(Producto__Disponibilidad)}>
    Stock:${Producto__Stock}, Tipo de Dato <${typeof(Producto__Stock)}>
    Barcode:${Producto__Barcode}, Tipo de Dato <${typeof(Producto__Barcode)}>
    Imagen:${Producto__Imagen}, Tipo de Dato <${typeof(Producto__Imagen)}>
    Categorias:${Producto__Categorias}, Tipo de Dato <${typeof(Producto__Categorias)}>
    `)

console.log("E el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión  anterior");
console.log(Producto__SKU);
console.log(typeof(Producto__SKU))

//Ahora lo declaramos como un objeto
console.log("%c2.- Objeto", style_console);
let Producto =
{
    ID: 6969,
    Nombre : "Tenis Deportivos",
    Marca : "NIke",
    Modelo :"Jordan `24",
    Precio : 3361.25,
    Disponibilidad : false,
    Stock: 0,
    Imagen:"", 
    SKU: "DZ5485-612",
    Barcode:null,
    CAtegorias: ["Deportes","Juvenil"]

}

// Ahora leemos el objeto completo

console.table(Producto)

// Para acceder a las propiedades del objeto utilizamos un "." y el nombre de la propiedad a leer.

console.log("Accediendo a propiedades especificas del PRODUCTO")
console.log(`Nombre Completo del PRODUCTO: ${Producto.Nombre} ${Producto.Marca} ${Producto.Modelo}`)
console.log(`Precio: ${Producto.Precio}`)
if(Producto.Disponibilidad==0)
console.log(`Estatus: Agotado`)
else
console.log(`Estatus: ${Producto__Stock}, Unidades Disponible`)

//Ahora lo declaramos como un objeto
console.log("%c3.- Destructuración de Objetos", style_console);
let Producto2 =
{
    Clave: 316,
    Nombre : "Lentes para sol",
    Marca : "Oakley",
    Modelo :"QNTM Kato",
    Precio : 6829.00,
    Disponibilidad : false,
    Stock: 5,
    Imagen:"", 
    SKU: "009481D-0356",
    Barcode:888392491626,
    Categorias: ["Deportes","Lentes", "Hombre", "Accesorios"]

}

let Comprador =
{
    Clave:3216,
    Nombre: "Uriel",
    Apellidos: "Medina Torres",
    Tipo : "Frecuente",
    Correo: "Uri.mt@gmail.com",
    PaisOrigen: "Mexico",
    SaldoActual: 14000.00
}
 let Pedido ={
    ID: 69697,
    Producto_Clave:316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compras",
    TipoPago: "Tarjeta de Crédito"
 }

 // En base a los objetos necesitamos calcular el costo de la compra y si se alcanza con su saldo a favor

 let{Producto__Precio2: Clave}= Producto2;
 let{ Cantidad:Pedido_Cantidad} = Pedido;
 let{SaldoActual:Cliente_SaldoActual}=Comprador;
 let Costo_Compra= Producto__Precio * Pedido_Cantidad;
 
 console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : $${Costo_Compra}`)
 if(Costo_Compra<Cliente_SaldoActual)
    cobnsole.log("El cliente tiene saldo suficiente");

 //Actualizar el valor de los objetos
 console.log("%c4.- Actualizacion de los valores de las propiedad de un objeto", style_console);

 console.log(`El objeto actualmente tiene los siguientes valores`)
 console.log(JSON.stringify(Producto2, null, 2));
 console.log(`Por cuestiones de inflación el costo del producto ha cambiado y debe ser actualizado... de $6,829.00 a $6,915.50`)
 // Para podificar el valor de un objeto basta con igualar el nuevo valor de la propiedad deseada
 Producto2.Precio=6915.50;
 console.log(`Los nuevos valores del producto son:`)
 console.log(Producto2);

 //¿Puedo cambiar no solo el valor sino el tipo de dato de un Objeto en JavaScript?
 console.log(`-----------------------------------------------------------------`)
 console.log(`El objeto actualmente tiene los siguientes valores`)
 var tipodisponibilidad= typeof(Producto.Disponibilidad);
 console.log(`El tipode de dato de la disponibilidad es: ${tipodisponibilidad}`)
 console.log(JSON.stringify(Producto2, null, 2)); //disponibilidad booleano
Producto2.Disponibilidad="Si";
let nuevotipodisponibilidad = typeof(Producto2.Disponibilidad)
console.log(Producto2);
console.log(`EL nuevo tipode de dato de la disponibilidad es: ${tipodisponibilidad}`

)

//Agregar nuevas propiedades al objeto
console.log("%c5.- Agregar nuevas propiedades al objeto", style_console);
// Para agregar una nueva propiedad utilizaremos el nombre del objeto los corchetes [] y el nuevo de la propiedad con su valor por defecto.
Comprador[`Direccion`]= "Av. Benito Juárez No. 1525, Interior 4D, Xicotepec de Juárez, Puebla, México"
Comprador[`Tipo`]= "Nuevo Cliente"
Comprador[`ActividadReciente`] = true
Comprador[`TotalCompras`]=3516.25
console.log("Despues de haber agregado las propiedades Dirección, Tipo, ActividadReciente y TotalCompras...")
console.table(Comprador)

//Eliminar propiedades existentes de un Objeto
console.log("%c6.- Eliminar propiedades existentes de un Objeto", style_console);
console.log("La estructura y valores del objeto PEDIDO son previos  a la modificación:")
console.table(Pedido)

delete Pedido.TipoPago
console.log("Despues de la modificación...")
console.table(Pedido)


//
console.log("%c7.- Métodos para controlar la mutabilidad de los Objetos, congelación (FREEZE)", style_console);
//Si deseamos no permitir que los objetos sean modificados ni en la estructura, ni un valorutilizaremosel método FREEZE (Congelar)
console.log(`La estructura actual del objeto COMPRADOR es: `)
console.table(Comprador)
Object.freeze(Comprador)
//Intentamos agregar, eliminar o modificar los valores de sus propiedades
Comprador.FechaUltimaCompra = "05/09/22024  10:15:25"
delete Comprador.Tipo;
Comprador.Direccion="CAlle 16 de Septiembre #102, Col. Manantiales, Huauchinango, Puebla, México";
console.log(`Verificamos si se realizaron los cambios en el Objeto Comprador:`)
console.table(Comprador)

console.log("%c8.- Métodos para controlar la mutabilidad de los Objetos, Sellado (SEAL)", style_console);
//Sin embargo, en el caso que deesemos poder podificar los valores de las propiedades del Objeto, pero no su estructura, usaremos SEAL
console.log("Objeto antes de ser modificado: ")
console.table(Pedido)
//Sellamos el objeto
Object.seal(Pedido)
//Intentamos modificar su estructura
Pedido[`FechaPedido`]="25/09/2024 11:05:03" 
delete Pedido[`Cantidad`]
console.log(`Verifiacamos se se realizaron los cambios en el objeto PEDIDO: `)
console.table(Pedido)
//Ahora intentamos modificar el valor de las propiedades
Pedido.Cantidad= 5
console.log(`VErificamos si se realizaron los cambios en el Objeto PEDIDO: `)
console.table(Pedido)

// let spotifyUser=
// {
//     name: "",//congelado
//     nickname: "",//sellado
//     email:"", //sellado
//     pasword: "", //sellado
//     rol:"", //sellado
//     since:"",//congelado
//     playList: ["Las domingueras","Carnita Asada", "Pa` trapear"] // normal modificado o eliminado
// }

console.log("%c9.- Desestructuración de 2 o má Objetos", style_console);
let {Precio: productoPrecio, Marca: productoMarca} = Producto 
let {Correo: clienteCorreo, PaisOrigen: clientePais, SaldoActual: clienteSaldo, Tipo: clienteTipo}= Comprador

//Transformar valores cuantitativos a cualitativos

if(productoPrecio>2000)
    productoPrecio = "Caro"
else
    productoPrecio = "Barato"

    if(clienteSaldo>0)
        clienteSaldo="A favor"
    else if(clienteSaldo<0)
        clienteSaldo="En contra"
    else
    clienteSaldo="Sin deuda"

//Transformar valores cualitativos en cuantitativos

let clienteNivel;

if(clienteTipo=="Premium")
    clienteNivel=1
if(clienteTipo=="Freemium")
    clienteNivel=2
if(clienteTipo=="No identificado")
    clienteNivel=3

//Clasificacmios al cliente por su Pais de Origen
if(clientePais == "México")
    clientePais="Nacional"
else
    clientePais="Extranjero"

//OLE- Objet Literal Ennhacement

let datosClientesPromociones = {clienteCorreo, clientePais, clienteNivel, clienteSaldo,productoMarca, productoPrecio}

//El nuevo objeto que creamos seria un objeto de la información que enviaremos el area de Narketing para la difusion deproductos
console.log("Los datos del cliente y sus habitos de comnpra son: ")
console.table(datosClientesPromociones)

//Operaciones sobre objetos
//Unión de objetos
console.log("%c10.- Unión de Objetos usando el método de asignación (ASSING)", style_console);

console.log("Imprimir la estrtuctura y valores del Objeto PRODUCTO")
console.table(Producto);

console.log("Imprimir la estrtuctura y valores del Objeto PRODUCTO")
console.table(Producto);
// Suponiendoo que el usuario ya realizo el pago elm pedido se convertira en una VENTA que requiere información de ambos objetos
const Venta = Object.assign(Producto, Pedido)
console.log("Consultamos este nuevo objeto VENTA")
console.table(Venta)