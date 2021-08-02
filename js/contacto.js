function validarnombre(){
let nombre = document.getElementById("nombre");
if (!nombre.value) {
    let vnombre = document.getElementById("vnombre");
    vnombre.innerHTML = "Nombre no puede estar vacío.";
}else{
    let vnombre = document.getElementById("vnombre");
    vnombre.innerHTML = "";
}
console.log(nombre.value)
}
function validarapellido() {
    let apellido = document.getElementById("apellido")
    if(!apellido.value){
        let ap = document.getElementById("ap");
        ap.innerHTML = "Es necesario dar un apellido."
    }else{
        let ap = Document.getElementById("ap")
        ap.innerHTML = ""
    }
}
function validartext() {
    let msg = document.getElementById("msg")
    if(!msg.value){
        let text = document.getElementById("text");
        text.innerHTML = "Es necesario dar un mensaje."
    }else{
        let text = Document.getElementById("text")
        text.innerHTML = ""
    }
}