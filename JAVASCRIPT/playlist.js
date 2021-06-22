

let miPlaylist = document.getElementById('songs1')

let favoritos = JSON.parse(localStorage.getItem('playlist'))

let infoArtistas = [];
let infoArtista = [];

if (favoritos) {
    for (let index = 0; index < favoritos.length; index++) {
        infoArtista = favoritos[index];
        probando.innerHTML += `
            <div id=${infoArtista.id}>
                <img class="playimage" src="${infoArtista.cover_big}">
                <a href="../HTML/detail-track.html?songId=${infoArtista.id}"><h3 class="titulo" >${infoArtista.title}</h3></a>
                <button type="submit" id="sacar" onclick='sacar(${infoArtista.id})'> Quitar de Fiesta🎉 </button>
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