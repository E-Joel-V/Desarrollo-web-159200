let producto = prompt("¿Que producto quieres? 1 = death note | 2 = capa de Harry Potter | 3 = Varita de Sauco de Harry Potter")
function Producto(nombre, precio, descripción) {
    this.nombre = nombre;
    this.precio = precio;
    this.descripción = descripción;
    this.comprar = function() {
        console.log("Usted ha comprado " + this.nombre)
        alert(`${this.nombre} se ha agregado al carrito `)
    }
}

const Death_Note = new Producto("Death Note", "$300", "Death Note es un cuaderno con una tapa negra y tu nombre está grabado en él. ... Por lo general, a menos que se indique la causa de la muerte, el nombre de la persona que figura en este cuaderno morirá de un ataque cardíaco después de 40 segundos. Se recomienda usar solo en emergencias.")
const Capa = new Producto("Capa de Harry Potter", "$500", "Con esta capa puedes hacerte invisible a todas las personas y animales. Utilizar en caso de emergencia")
const Varita = new Producto("Varita de Sauco de Harry Potter", "$1500", "Esta es la varita más poderosa de la saga, con esta varita puedes hacer cualquier cosa. EN MUCHO CUIDADO, ES MUY FRAGIL")
console.clear();
if(producto == 1){
    Death_Note.comprar();
} else if(producto == 2){
Capa.comprar();
} else if(producto == 3){
    Varita.comprar();
} else{
    Producto()
}