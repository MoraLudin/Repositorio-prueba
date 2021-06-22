/* let songs1= document.getElementById ("songs1")
let favoritos1 = JSON.parse(localStorage.getItem(`${songId}`));
songs1.innerHTML+= `<img class=playimage src="${favoritos1[0]}">
<h3>${favoritos1[1]}</h3>` */

let probando = document.getElementById('songs1')

let favoritos = JSON.parse(localStorage.getItem('playlist'))

let infoArtistas = [];
let infoArtista = [];

if (favoritos) {
    for (let index = 0; index < favoritos.length; index++) {
        infoArtista = favoritos[index];
        probando.innerHTML += `
            <div class="canc1" id=${infoArtista.id}>
                <img class="playimage" src="${infoArtista.cover_big}">
                <a href="../HTML/detail-track.html?songId=${infoArtista.id}"><h3 class="titulo" >${infoArtista.title}</h3></a>
                <button class="boton" type="submit" id="sacar" onclick='sacar(${infoArtista.id})'> Quitar de Fiesta🎉 </button>
            </div>
        `
    }
}

function sacar(songId) {
    let songIndex = favoritos.findIndex(song => song.id === songId)
    favoritos.splice(songIndex, 1)
    localStorage.setItem('playlist', JSON.stringify(favoritos));
    document.location.reload()
}