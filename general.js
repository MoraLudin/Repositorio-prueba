window.addEventListener('load', function(){

/* validacion formulario busqueda header */

let formulariocompletar = document.querySelector("#busqueda");
let buscador = document.querySelector("#buscador")

formulariocompletar.addEventListener('submit', function (e) {
    e.preventDefault();
    if(buscador.value === ''||buscador.value.length < 3){
        alert("Escriba un artista!");
    } else {
        this.submit()
    }
 });
})