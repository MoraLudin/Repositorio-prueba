/* let songs1= document.getElementById ("songs1")
let favoritos1 = JSON.parse(localStorage.getItem(`${songId}`));
songs1.innerHTML+= `<img class=playimage src="${favoritos1[0]}">
<h3>${favoritos1[1]}</h3>` */

let probando = document.getElementById('songs1')

let favoritos = JSON.parse(localStorage.getItem('playlist'))
console.log(favoritos)

let infoArtistas = [];
let infoArtista = [];

for (let index = 0; index < favoritos.length; index++) {
    console.log(localStorage.getItem(favoritos[index]));
    infoArtistaString = localStorage.getItem(favoritos[index]);
    infoArtista = JSON.parse(infoArtistaString);
    console.log(infoArtistaString)
    console.log(infoArtista)
    probando.innerHTML += `
        <img class="playimage" src="${infoArtista[0]}">
        <a href="../HTML/detail-track.html?songId=${favoritos[index]}"><h3 class="titulo" >${infoArtista[1]}</h3></a>
        <button type="submit" id="sacar"> Quitar de Fiesta🎉 </button>
       
    `
   
   
}


/* let sacarboton= document.getElementById('sacar')
sacarboton.addEventListener('click', function(){
    localStorage.removeItem(`${favoritos[index]}`)
})  */