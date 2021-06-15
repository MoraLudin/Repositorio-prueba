window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';

/* cancion al aire */
    let alaire = `${proxy}https://api.deezer.com/track/1133364592`;

    fetch(alaire)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
    
        /* imagen para detalle alaire */
            let alairedetail = document.querySelector(".detailalaire");
            alairedetail.innerHTML += `
            <img class="alairesong" src= "${datos.album.cover_big}"> 
            `;
        
        /* info detalle cancion alaire */
            let alairedata = document.querySelector(".infoalaire");
            alairedata.innerHTML += `
            <h1 class="alaire">${datos.title}</h1>
            <h2 class="alaire1">${datos.artist.name}</h2>
            `; 
            
            /* reproductor */
            let reproductorpeaches = document.querySelector(".reproductor");
            reproductorpeaches.attribute ()
        
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })





})