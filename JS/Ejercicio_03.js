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
    Nombre:${Producto_Nombre}, Tipo de Dato <${typeof(Producto_Nombre)}>,
    Marca:${Producto__Marca}, Tipo de Dato <${typeof(Producto__Marca)}>,
    Modelo:${Producto__Modelo}, Tipo de Dato <${typeof(Producto__Modelo)}>,
    Precio:${Producto__Precio}, Tipo de Dato <${typeof(Producto__Precio)}>,
    Disponibilidad:${Producto__Disponibilidad}, Tipo de Dato <${typeof(Producto__Disponibilidad)}>,
    Stock:${Producto__Stock}, Tipo de Dato <${typeof(Producto__Stock)}>,
    SKU:${Producto__SKU}, Tipo de Dato <${typeof(Producto__SKU)}>,
    Barcode:${Producto__Barcode}, Tipo de Dato <${typeof(Producto__Barcode)}>,
    Imagen:${Producto__Imagen}, Tipo de Dato <${typeof(Producto__Imagen)}>,
    Categorias:${Producto__Categorias}, Tipo de Dato <${typeof(Producto__Categorias)}>
    `)

console.log("E el caso del SKU al ser un Symbol, no se puede concatenar a la cadena de impresión  anterior");
console.log(Producto__SKU);
console.log($typeof(Producto__SKU));

//Ahora lo declaramos como un objeto
console.log("%c2.- Objeto", style_console);
let Producto =
{
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
    CAtegorias: ["Deportes","Lentes", "Hombre", "Accesorios"]

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
    Producto_Clave:316,
    Comprador_Clave: 3216,
    Cantidad: 2,
    Estatus: "Carrito de compras"
 }

 // En base a los objetos necesitamos calcular el costo de la compra y si se alcanza con su saldo a favor

 let{Producto__Precio2: Clave}= Producto2;
 let{Pedido_Cantidad: Cantidad} = Pedido;
 let{Cliente_SaldoActual:SaldoActual}=Comprador;
 let Costo_Compra=Producto__Precio *Pedido_Cantidad;
 
 console.log(`El cliente ha agregado a su carrito de compras ${Pedido_Cantidad} unidades, con un costo total de : $${Costo_Compra}`)
 if(Costo_Compra<Cliente_SaldoActual)
    cobnsole.log("El cliente tiene saldo suficiente");