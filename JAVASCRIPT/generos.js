window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let genre = `${proxy}https://api.deezer.com/genre`;

fetch (genre) 
.then(function(response){
    return response.json();
})
.then (function(data){

let generos = data.data 

let fila1 = document.querySelector(".boxgenero1");
for (let index = 0; index < 4; index++) {
    console.log(generos[index].name);
    fila1.innerHTML += '<div class="buttongeneros1"> <a href="../HTML/detail-genres.html?id='+generos[index].id+'"><h3> '+generos[index].name+'</h3> </div>'  
}

let fila2 = document.querySelector(".boxgenero2")
for (let index = 4; index < 8; index++) {
    console.log(generos[index].name);
    fila2.innerHTML += '<div class="buttongeneros1"> <a href="../HTML/detail-genres.html?id='+generos[index].id+'"><h3> '+generos[index].name+'</h3> </div>'  
}
let fila3 = document.querySelector(".boxgenero3")
for (let index = 8; index < 12; index++) {
    console.log(generos[index].name);
    fila3.innerHTML += '<div class="buttongeneros1"> <a href="../HTML/detail-genres.html?id='+generos[index].id+'"><h3> '+generos[index].name+'</h3> </div>'  
}

let fila4 = document.querySelector(".boxgenero4")
for (let index = 12; index < 16; index++) {
    console.log(generos[index].name);
    fila4.innerHTML += '<div class="buttongeneros1"> <a href="../HTML/detail-genres.html?id='+generos[index].id+'"><h3> '+generos[index].name+'</h3> </div>'  
}

});
})
/*"https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"  */