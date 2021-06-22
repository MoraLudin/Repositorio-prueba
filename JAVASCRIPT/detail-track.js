const urlSearchParams = new URLSearchParams(window.location.search);
const songId = urlSearchParams.get('songId')
const proxy = 'https://cors-anywhere.herokuapp.com/';


fetch(`${proxy}https://api.deezer.com/track/${songId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        console.log(`${datos.album.cover_big}`);
        console.log(`${datos.title}`);
        console.log(`${datos.artist.id}`)
        console.log(`${datos.album.title}`)

        let addPlaylist = document.querySelector(".addplaylist")
        addPlaylist.addEventListener("click", function(e){
        e.preventDefault(); 

        let playlist = []

        if (localStorage.getItem('playlist') === null) {
                localStorage.setItem(songId, JSON.stringify(infoTrack));
                playlist.push(songId); 
                localStorage.setItem('playlist', JSON.stringify(playlist));
            
        }else {
                localStorage.setItem(songId, JSON.stringify(infoTrack));
                let playlist = JSON.parse(localStorage.getItem('playlist'));
                console.log(playlist);
                playlist.push(songId);
                localStorage.setItem('playlist', JSON.stringify(playlist));

        }
        })
    
        console.log(datos);
            let infoTrack = [
                `${datos.album.cover_big}`,
                `${datos.title}`,
                `${datos.id}`,
                `${datos.preview}`
            ]

    /* imagen para detalle DE LA CANCION QUE HAYAS PRESIONADO*/
        let alAireDetail = document.querySelector(".detailalaire");
        alAireDetail.innerHTML += `
        <img class="alairesong" src= "${datos.album.cover_big}"> 
        `;
    
    /* info detalle cancion  DE LA CANCION QUE HAYAS PRESIONADO*/
        let alAireData = document.querySelector(".infoalaire");
        alAireData.innerHTML += `
       
        <h2 class="alaire">Titulo: ${datos.title}</h2> 
        <a href="../HTML/detail-artist.html?artistId=${datos.artist.id}"><h2 class="alaire1">Artista: ${datos.artist.name}</h2></a>
        <a href="../HTML/detail-album.html?albumId=${datos.album.id}"><h2 class="alaire2">Album: ${datos.album.title}</h2></a>
        `; 

        let alAireRep = document.querySelector(".player");
        alAireRep.innerHTML += `
        <iframe class="reproductor" title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${songId}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        `; 
      
     })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    })

