const urlSearchParams = new URLSearchParams(window.location.search);
const songId = urlSearchParams.get('songId')
const proxy = 'https://cors-anywhere.herokuapp.com/';


/* let local = localStorage.getItem('locationpeaches')
let objetopeaches = JSON.parse(local);

let local1 = localStorage.getItem('locationalaire')
let objetoalaire = JSON.parse(local1);

let local2 = localStorage.getItem('location22')
let objeto22 = JSON.parse(local2)

let local3 = localStorage.getItem('locationropacara')
let objetoropacara = JSON.parse(local3)

let local4 = localStorage. getItem('locationdakiti')
let objetodakiti = JSON.parse(local4) */


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

        let addplaylist = document.querySelector(".addplaylist")
        addplaylist.addEventListener("click", function(e){
            e.preventDefault();

            if (localStorage.getItem('playlist') === null) {
                let playlist = []
                playlist.push(infoTrack); 
                localStorage.setItem('playlist', JSON.stringify(playlist));
                
            } else {
                let playlist = JSON.parse(localStorage.getItem('playlist'));
                if (!playlist.find(song => song.id === infoTrack.id)) {
                    playlist.push(infoTrack);
                    localStorage.setItem('playlist', JSON.stringify(playlist));
                }
            }
        })
    
       /*  let trackGuardado = JSON.parse(localStorage.getItem('playlist'));
        console.log(trackGuardado) */

       /* if (typeof(localStorage.getItem('playlist')) != 'null') {
        playlist = JSON.parse(localStorage.getItem('playlist'));
        }
        console.log(playlist)
 */
       /*  if (typeof(localStorage.getItem('playlist')) == 'null') {
            playlist = [];
        } else{
            playlist = JSON.parse (localStorage.getItem('playlist'));
        }
 */
        let infoTrack = {
            cover_big: datos.album.cover_big,
            title: datos.title,
            id: datos.id,
            preview: datos.preview
        }
            /* `${}`,
            `${datos.title}`,
            `${datos.id}`,
            `${datos.preview}`
        ] */

    /* imagen para detalle DE LA CANCION QUE HAYAS PRESIONADO*/
        let alairedetail = document.querySelector(".detailalaire");
        alairedetail.innerHTML += `
        <img class="alairesong" src= "${datos.album.cover_big}"> 
        `;
       
    
    /* info detalle cancion  DE LA CANCION QUE HAYAS PRESIONADO*/
        let alairedata = document.querySelector(".infoalaire");
        alairedata.innerHTML += `
       
        <h2 class="alaire">Titulo: ${datos.title}</h2> 
        <a href="../HTML/detail-artist.html?artistId=${datos.artist.id}"><h2 class="alaire1">Artista: ${datos.artist.name}</h2></a>
        <a href="../HTML/detail-album.html?albumId=${datos.album.id}"><h2 class="alaire2">Album: ${datos.album.title}</h2></a>
        `; 

        let alairerep = document.querySelector(".player");
        alairerep.innerHTML += `
        <iframe class="reproductor" title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${songId}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>
        `; 
        
    
       /*  let addplaylist = document.querySelector(".addplaylist")
        addplaylist.addEventListener("click", function(e){
            e.preventDefault(); 
            localStorage.setItem(`${songId}`, JSON.stringify(`${infoTrack}`));
            console.log(playlist)
            playlist.push(songId)
            console.log(playlist)
            localStorage.setItem('playlist', JSON.stringify(`${playlist}`));
        })  */

        

        
        /* let addplaylist1 = document.querySelector(".addplaylist")
        addplaylist1.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.setItem('alaireimgplay', JSON.stringify(`${datos.album.cover_big}`)); /* PROBLEM 
            localStorage.setItem('alairetitleplay', JSON.stringify(`${datos.title}`));
        }) */
      
     })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    })

