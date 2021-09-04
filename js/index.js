function Producto(Productoss) {
    this.nombre = Productoss[0];
    this.precio = Productoss[1];
    this.descripción = Productoss[2];
    this.image = Productoss[3];
    this.comprar = function() {
        console.log("Usted ha comprado " + this.nombre)
        swal(`Usted ha comprado ${this.nombre}`)

    }
}
///////////////////////////////////////////////////////////7
const Death_Note = new Producto(["Death Note", "$300", "Death Note es un cuaderno con una tapa negra y tu nombre está grabado en él. ... Por lo general, a menos que se indique la causa de la muerte, el nombre de la persona que figura en este cuaderno morirá de un ataque cardíaco después de 40 segundos. Se recomienda usar solo en emergencias.", "pro/death_note.jpg"])
const Capa = new Producto(["Capa de Harry Potter", "$500", "Con esta capa puedes hacerte invisible a todas las personas y animales. Utilizar en caso de emergencia", "pro/invisible.jpg"])
const Varita = new Producto(["Varita de Sauco de Harry Potter", "$1500", "Esta es la varita más poderosa de la saga, con esta varita puedes hacer cualquier cosa. EN MUCHO CUIDADO, ES MUY FRAGIL", "pro/varita.jpg"])
const fnaf = new Producto(["Marcarilla de FNAF", "$266", "Esta mascarilla está basada en FNAF(Five Night's at freddys). Con esta mascarilla te vas a ver muy facer@", "pro/mascarilla_fnaf.jpg"])
const delorean = new Producto(["delorean", "$1,000,000", "- Peso: 1.230 kg. - Motor: V6, 2.849 cm3, 12 válvulas, en posición trasera. - Potencia:132 CV a 5.550 rpm. - Transmisión: Manual de 5 velocidades, propulsión trasera. Con este DeLorean puedes viajar al pasado aprovechalo!", "pro/delorean.jpg"])
console.clear();
function comprar(producto) {
    let carrito = []
    if ( localStorage.getItem('carrito')) { carrito = JSON.parse(localStorage.getItem('carrito')) } else { carrito = [] }
    if(producto == 1){
        Death_Note.comprar();
            let objeto = {producto: Death_Note.nombre, precio: Death_Note.precio, image: Death_Note.image}
            carrito.push(objeto)
    } else if(producto == 2){
    Capa.comprar();

    let objeto = {producto: Capa.nombre, precio: Capa.precio, image: Capa.image}
    carrito.push(objeto)
    } else if(producto == 3){
        Varita.comprar();

        let objeto = {producto: Varita.nombre, precio: Varita.precio, image: Varita.image}
        carrito.push(objeto)
    }
 else if(producto == 4){
    fnaf.comprar();

    let objeto = {producto: fnaf.nombre, precio: fnaf.precio, image: fnaf.image}
    carrito.push(objeto)
}  else if(producto == 5){
    delorean.comprar();

    let objeto = {producto: delorean.nombre, precio: delorean.precio, image: delorean.image}
    carrito.push(objeto)
}
    localStorage.setItem('carrito', JSON.stringify(carrito))
    let posicion = 0;
    let carritoPrint = "";
    carrito.forEach(producto => {
        carritoPrint += `
        <div id='carrito-${posicion}'>
        <img src="${producto.image}">
       <h1>${producto.producto}</h1>
        <p>${producto.precio} </p>
        <button class="remove" onclick="Remove(${posicion})" >Eliminar Producto</button>
        </div>
    <hr>
		`
        posicion++;
	})
    document.getElementById('compra2').innerHTML = carritoPrint
    /*    const image = localStorage.getItem("Image")
    document.getElementById("Image").innerHTML = "<img src='" + image + "'></img>"
    const compra2 = localStorage.getItem("Producto")
    document.getElementById("compra2").innerHTML = compra2;
    const precio = localStorage.getItem("Precio")
    document.getElementById("$").innerHTML = precio;*/
}
function MostrarCarrito(){
    $('#i-ventana').show('slow')
}
function OcultarCarrito() {
    $('#i-ventana').hide('fast')
}
function Remove(remove) {
let carrito = JSON.parse(localStorage.getItem('carrito'));
let carritoNuevo = [];

	for (let i = 0 ; i<carrito.length; i++) {
		if (i != remove){
			carritoNuevo.push(carrito[i])
		}
	}
    let posicion = 0;
    let carritoPrint = "";
    carrito.forEach(producto => {
        carritoPrint += `
        <div id='carrito-${posicion}'>
        <img src="${producto.image}">
       <h1>${producto.producto}</h1>
        <p>${producto.precio} </p>
        <button class="remove" onclick="Remove(${posicion})" >Eliminar Producto</button>
        </div>
        <hr>
        `
        posicion++;
    })
    document.getElementById('compra2').innerHTML = carritoPrint;
	localStorage.setItem('carrito', JSON.stringify(carritoNuevo))

}
$('.carrito-btn').on('click', MostrarCarrito)
$('.cerrarC').on("click", OcultarCarrito)

if ( localStorage.getItem('carrito')) { carrito = JSON.parse(localStorage.getItem('carrito')) } else { carrito = [] }
if( carrito.length == 0){
    $('#compra2').html('<span>¡No ha agregado ningún profucto al carrito!</span>')
}

function borrarTodo() {
    localStorage.clear();
    document.getElementById('compra2').innerHTML = "";
}