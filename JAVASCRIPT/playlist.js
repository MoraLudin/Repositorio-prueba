let miPlaylist = document.querySelector('.miplaylist')

let favoritos = JSON.parse(localStorage.getItem('playlist'))

let infoArtista = [];

if (favoritos) {
    for (let index = 0; index < favoritos.length; index++) {
        infoArtista = favoritos[index];
        miPlaylist.innerHTML += `
            <div class="playlistsongs" id=${infoArtista.id}>
                <img class="playimage" src="${infoArtista.cover_big}">
                <a href="../HTML/detail-track.html?songId=${infoArtista.id}"><h3 class="cancnombre" >${infoArtista.title}</h3></a>
                <button type="submit" id="sacar" onclick='sacar(${infoArtista.id})'> Quitar de playlist</button>
            </div>`
    }
}

function sacar(songId) {
    let songIndex = favoritos.findIndex(song => song.id === songId)
    favoritos.splice(songIndex, 1) /* me saca el id de la cancion que presione, me saca una posicion del index que es la que estoy apretando */
    localStorage.setItem('playlist', JSON.stringify(favoritos));/* 'crea' denuevo playlist en el local storage una vez que se saco la que aprete */
    document.location.reload()
}