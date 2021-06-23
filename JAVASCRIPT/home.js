window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    
/* tracks */
/* peaches track */
    let idPeaches = '1280165222'    
    let peaches = `${proxy}https://api.deezer.com/track/${idPeaches}`;

    fetch(peaches)
       .then(function(response){
           return response.json();
        })
       .then(function(datos){
           console.log(datos);
           /* localStorage.setItem("locationpeaches", JSON.stringify(datos)); */
   
       /* imagen y info track peaches */
           let peachesTrackImg = document.querySelector(".trackpeaches");
           peachesTrackImg.innerHTML += `
           <img class="peaches" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
        })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
        })

/* alaire track */
    let idAlaire = '1133364592'
    let alAire = `${proxy}https://api.deezer.com/track/${idAlaire}`;

    fetch(alAire)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
        
    /* imagen y info track alaire */
        let alAireTrackImg = document.querySelector(".trackalaire");
        alAireTrackImg.innerHTML += `
        <img class="alairesong" src= "${datos.album.cover_medium}"> 
        <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
        `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })

/* 22 track */
    let idVeintidos = '529139121'
    let veintidos = `${proxy}https://api.deezer.com/track/${idVeintidos}`;

    fetch(veintidos)
       .then(function(response){
           return response.json();
       })
       .then(function(datos){
           console.log(datos);
   
       /* imagen y info track 22 */
           let veintidosTrackImg = document.querySelector(".track22");
           veintidosTrackImg.innerHTML += `
           <img class="veintidos" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
       })

/* ropacara track */
    let idRopacara = '1260566352'
    let ropaCara = `${proxy}https://api.deezer.com/track/${idRopacara}`;

    fetch(ropaCara)
       .then(function(response){
           return response.json();
       })
       .then(function(datos){
           console.log(datos);
   
       /* imagen y info track ropacara */
           let ropaCaraTrackImg = document.querySelector(".trackropacara");
           ropaCaraTrackImg.innerHTML += `
           <img class="ropacara" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
       })

/* dakiti track */
    let idDakiti = '1155477862'
    let dakiti = `${proxy}https://api.deezer.com/track/${idDakiti}`;

    fetch(dakiti)
       .then(function(response){
           return response.json();
       })
       .then(function(datos){
           console.log(datos);
   
       /* imagen y info track dakiti */
           let dakitiTrackImg = document.querySelector(".trackdakiti");
           dakitiTrackImg.innerHTML += `
           <img class="dakiti" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
        })

/* albums */
/* devil album */
    let idDevil = '217940522'
    let devil = `${proxy}https://api.deezer.com/album/${idDevil}`;
    
    fetch(devil)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
       
        /* imagen y info album devil */
            let devilAlbumImg = document.querySelector(".albumdevil");
            devilAlbumImg.innerHTML += `
            <img class="devil" src= "${datos.cover_big}"> 
            <a href="../HTML/detail-album.html?albumId=${datos.id}"><h3 class="datos">${datos.title}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })
    
/* balas album */
    let idBalas = '76251542'
    let balas = `${proxy}https://api.deezer.com/album/${idBalas}`;
    
    fetch(balas)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
       
        /* imagen y info album balas */
            let balasAlbumImg = document.querySelector(".albumbalas");
            balasAlbumImg.innerHTML += `
            <img class="balas" src= "${datos.cover_big}"> 
            <a href="../HTML/detail-album.html?albumId=${datos.id}"><h3 class="datos">${datos.title}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })

/* tini album */
    let idTini = '189188362'
    let tini = `${proxy}https://api.deezer.com/album/${idTini}`;
    
    fetch(tini)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
       
        /* imagen y info album tini */
            let tiniAlbumImg = document.querySelector(".albumtini");
            tiniAlbumImg.innerHTML += `
            <img class="tini" src= "${datos.cover_big}"> 
            <a href="../HTML/detail-album.html?albumId=${datos.id}"><h3 class="datos">${datos.title}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })
    
/* manos album */
    let idManos = '156399462'
    let manos = `${proxy}https://api.deezer.com/album/${idManos}`;
    
    fetch(manos)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
       
        /* imagen y info album manos */
            let manosAlbumImg = document.querySelector(".albummanos");
            manosAlbumImg.innerHTML += `
            <img class="manos" src= "${datos.cover_big}"> 
            <a href="../HTML/detail-album.html?albumId=${datos.id}"><h3 class="datos">${datos.title}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })

/* colores album */
    let idColores = '136387572'
    let colores = `${proxy}https://api.deezer.com/album/${idColores}`;
    
    fetch(colores)
        .then(function(response){
               return response.json();
        })
        .then(function(datos){
            console.log(datos);
    
        /* imagen y info album colores */
            let coloresAlbumImg = document.querySelector(".albumcolores");
            coloresAlbumImg.innerHTML += `
            <img class="colores" src= "${datos.cover_big}"> 
            <a href="../HTML/detail-album.html?albumId=${datos.id}"><h3 class="datos">${datos.title}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })

/* artistas */
/* morat artist */
    let idMorat = '7327640'
    let morat = `${proxy}https://api.deezer.com/artist/${idMorat}`;
    
    fetch(morat)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
       
        /* imagen y info artist morat */
            let moratArtistImg = document.querySelector(".artistmorat");
            moratArtistImg.innerHTML += `
            <img class="morat" src= "${datos.picture_big}"> 
            <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })
        
/* miley artist */
    let idMiley = '12436'
    let miley = `${proxy}https://api.deezer.com/artist/${idMiley}`;
        
    fetch(miley)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
        
        /* imagen y info artist miley */
            let mileyArtistImg = document.querySelector(".artistmiley");
            mileyArtistImg.innerHTML += `
            <img class="miley" src= "${datos.picture_big}"> 
            <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a> 
            `;
        })
        .catch(function(error){ 
            console.log('Tu error es:' +error)
        })

/* camilo artist */
   let idCamilo = '58568762'
   let camilo = `${proxy}https://api.deezer.com/artist/${idCamilo}`;
      
    fetch(camilo)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
         
        /* imagen y info artist camilo */
            let camiloArtistImg = document.querySelector(".artistcamilo");
            camiloArtistImg.innerHTML += `
            <img class="camilo" src= "${datos.picture_big}">
            <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a>
            `;
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })

/* justin artist */
   let idJustin = '288166'
   let justin = `${proxy}https://api.deezer.com/artist/${idJustin}`;
      
    fetch(justin)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
         
        /* imagen y info artist justin */
            let justinArtistImg = document.querySelector(".artistjustin");
            justinArtistImg.innerHTML += `
            <img class="justin" src= "${datos.picture_big}">
            <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a>
            `;
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })

/* badbunny artist */
    let idBadbunny = '10583405'
    let badBunny = `${proxy}https://api.deezer.com/artist/${idBadbunny}`;
      
    fetch(badBunny)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            console.log(datos);
         
        /* imagen y info artist badbunny */
            let badBunnyArtistImg = document.querySelector(".artistbadbunny");
            badBunnyArtistImg.innerHTML += `
            <img class="badbunny" src= "${datos.picture_big}">
            <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a>
            `;
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })

})



















