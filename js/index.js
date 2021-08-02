function Producto(Productoss) {
    this.nombre = Productoss[0];
    this.precio = Productoss[1];
    this.descripción = Productoss[2];
    this.image = Productoss[3];
    this.comprar = function() {
        console.log("Usted ha comprado " + this.nombre)
        alert(`Usted ha comprado ${this.nombre}`)
    }
}
const Death_Note = new Producto(["Death Note", "$300", "Death Note es un cuaderno con una tapa negra y tu nombre está grabado en él. ... Por lo general, a menos que se indique la causa de la muerte, el nombre de la persona que figura en este cuaderno morirá de un ataque cardíaco después de 40 segundos. Se recomienda usar solo en emergencias.", "pro/death_note.jpg"])
const Capa = new Producto(["Capa de Harry Potter", "$500", "Con esta capa puedes hacerte invisible a todas las personas y animales. Utilizar en caso de emergencia", "pro/invisible.jpg"])
const Varita = new Producto(["Varita de Sauco de Harry Potter", "$1500", "Esta es la varita más poderosa de la saga, con esta varita puedes hacer cualquier cosa. EN MUCHO CUIDADO, ES MUY FRAGIL", "pro/varita.jpg"])
console.clear();
function comprar(producto) {
    if(producto == 1){
        Death_Note.comprar();
            localStorage.setItem("Producto",Death_Note.nombre)
            localStorage.setItem("Precio", Death_Note.precio)
            localStorage.setItem("Image", Death_Note.image)
    } else if(producto == 2){
    Capa.comprar();
    localStorage.setItem("Producto",Capa.nombre)
    localStorage.setItem("Precio", Capa.precio)
    localStorage.setItem("Image", Capa.image)
    } else if(producto == 3){
        Varita.comprar();
        localStorage.setItem("Producto",Varita.nombre)
        localStorage.setItem("Precio", Varita.precio)
        localStorage.setItem("Image", Varita.image)
    }
}