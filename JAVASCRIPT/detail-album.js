window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search
    let albumQuery = new URLSearchParams (queryString)
    let albumId = albumQuery.get('albumId')
    console.log(albumId)


    fetch(`${proxy}https://api.deezer.com/album/${albumId}`)
        .then(function(response){
            return response.json ()
        })
        .then(function(datos){
            console.log(datos)

            let albumName = document.querySelector('.dancing')
            albumName.innerHTML += 
            `<h1 class="dancing">${datos.title}</h1>`;

            let albumFoto = document.querySelector('.albumpic')
            albumFoto.innerHTML += `
            <img class="demialbum" src="${datos.cover_big}">
            `;

            let albumData = document.querySelector('.Demi')
            albumData.innerHTML += `
            <a class="deminame" href="../HTML/detail-artist.html?artistId=${datos.artist.id}"><h3>${datos.artist.name}</h3></a>
            <a class="deminame" href="../HTML/detail-genres.html?id=${datos.genres.data[0].id}"><h3> Género: ${datos.genres.data[0].name}</h3></a>
            <h3 class="deminame"> Fecha de publicación: ${datos.release_date}</h3>
            `;

            let albumSongs = document.querySelector('.seccion1')
            let tracks = datos.tracks.data

            for (let index = 0; index < tracks.length; index++) {
                albumSongs.innerHTML += `
                <div class="dancingsongs">
                <a class="songtext" href="../HTML/detail-track.html?songId=${tracks[index].id}"><h4>${tracks[index].title}</h4></a>
                </div>
                `;
            }
        })
        .catch(function(error){
        console.log('Tu error es:' +error)
        })

})



 

