const precio = localStorage.getItem("Precio")
document.getElementById("$").innerHTML = precio;
const compra2 = localStorage.getItem("Producto" )
document.getElementById("compra2").innerHTML = compra2;
const image = localStorage.getItem("Image")
document.getElementById("Image").innerHTML = "<img src='" + image + "'></img>"
