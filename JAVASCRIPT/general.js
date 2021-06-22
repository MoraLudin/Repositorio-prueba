window.addEventListener('load', function(){

/* validacion formulario busqueda header */

let formularioCompletar = document.querySelector("#busqueda");
let buscador = document.querySelector("#buscador")

formularioCompletar.addEventListener('submit', function (e) {
    e.preventDefault();
    if(buscador.value === ''){
        alert("Busque algo!");
    } else if (buscador.value.length < 3) {
        alert("Su busqueda debe ser mayor a 3 caracteres")
    } else {
        this.submit()
    }
 });
})