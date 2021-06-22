window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let querystring = location.search
    let albumquery = new URLSearchParams (querystring)
    let albumId = albumquery.get('albumId')
console.log(albumId)

fetch(`${proxy}https://api.deezer.com/album/${albumId}`)
    .then(function(response){
        return response.json ()
    })
    .then(function(datos){
        console.log(datos)

        let albumname = document.querySelector('.dancing')
        albumname.innerHTML += 
        `<h1 class="dancing">${datos.title}</h1>`;

        let albumfoto = document.querySelector('.albumpic')
        albumfoto.innerHTML += `
        <img class="demialbum" src="${datos.cover_big}">
        `;

        let albumdata = document.querySelector('.Demi')
        albumdata.innerHTML += `
        <a class="deminame" href="../HTML/detail-artist.html?artistId=${datos.artist.id}"><h3>${datos.artist.name}</h3></a>
        <a class="deminame" href="../HTML/detail-genres.html?id=${datos.genres.data[0].id}"><h3> Género: ${datos.genres.data[0].name}</h3></a>
        `;

{/* <a class="deminame" href="../HTML/detail-genres.html?id=${datos.genres.data[0].id}"><h3>Género:${datos.genres.data[1].id}</h3></a>
        <h3 class="deminame">Fecha de publicación: 2/04/21</h3> */
    }
 /*    <a class="deminame" href="../HTML/detail-genres.html?id=${datos.genres.data[0].id}"><h3>Género:${datos.genres.data[1].name}</h3></a> */
    
        /* let albuminfo = document.queryselector ('.dancingsongs')/* NO ANDA 
        albuminfo.innerHTML += `
        <a class="deminame" href="../HTML/detail-artist.html?artistId=${datos.artist.id}"><h3>${datos.artist.name}</h3></a>
        <a class="deminame" href="../../generos/genres.html"><h3>Género: Pop</h3></a>
        <h3 class="deminame">Fecha de publicación: 2/04/21</h3>
        `;

        let cancionesalbum = document.querySelector(".dancingsongs") /* no anda 
        for (let index = 0; index < 8; index++) {
        cancionesalbum.innerHTML += `
        <a class="songtext" href="../HTML/detail-track.html?songId=${datos.tracks.data[0].id}"><h4>${datos.tracks.data[0].title}</h4></a>
        ` */
    




    })
    .catch(function(error){
        console.log('Tu error es:' +error)
    })

})



 

