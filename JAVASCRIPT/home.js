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
           let peachestrackimg = document.querySelector(".trackpeaches");
           peachestrackimg.innerHTML += `
           <img class="peaches" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
       })


/* alaire track */
    let idAlaire = '1133364592'
    let alaire = `${proxy}https://api.deezer.com/track/${idAlaire}`;

 fetch(alaire)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        /* localStorage.setItem("locationalaire", JSON.stringify(datos)); */

    /* imagen y info track alaire */
        let alairetrackimg = document.querySelector(".trackalaire");
        alairetrackimg.innerHTML += `
        <img class="alaire" src= "${datos.album.cover_medium}"> 
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
           /* localStorage.setItem("location22", JSON.stringify(datos)); */
   
       /* imagen y info track 22 */
           let veintidostrackimg = document.querySelector(".track22");
           veintidostrackimg.innerHTML += `
           <img class="veintidos" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
       })

    /* ropacara track */
    let idRopacara = '1260566352'
    let ropacara = `${proxy}https://api.deezer.com/track/${idRopacara}`;

    fetch(ropacara)
       .then(function(response){
           return response.json();
       })
       .then(function(datos){
           console.log(datos);
           /* localStorage.setItem("locationropacara", JSON.stringify(datos)); */
   
       /* imagen y info track ropacara */
           let ropacaratrackimg = document.querySelector(".trackropacara");
           ropacaratrackimg.innerHTML += `
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
           /* localStorage.setItem("locationdakiti", JSON.stringify(datos)); */
   
       /* imagen y info track dakiti */
           let dakititrackimg = document.querySelector(".trackdakiti");
           dakititrackimg.innerHTML += `
           <img class="dakiti" src= "${datos.album.cover_medium}"> 
           <a href="../HTML/detail-track.html?songId=${datos.id}"><h3 class="datos">${datos.title}, ${datos.artist.name}</h3> </a>
           `;
       })
       .catch(function(error){ 
           console.log('Tu error es:' +error)
        })

    /* albums */
    /* devil album */
    let idDevil = '217802232'
    let devil = `${proxy}https://api.deezer.com/album/${idDevil}`;
    
        fetch(devil)
           .then(function(response){
               return response.json();
           })
           .then(function(datos){
               console.log(datos);
               /* localStorage.setItem("locationdevil", JSON.stringify(datos)); */
       
           /* imagen y info album devil */
               let devilalbumimg = document.querySelector(".albumdevil");
               devilalbumimg.innerHTML += `
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
               /* localStorage.setItem("locationbalas", JSON.stringify(datos)); */
       
           /* imagen y info album balas */
               let balasalbumimg = document.querySelector(".albumbalas");
               balasalbumimg.innerHTML += `
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
               /* localStorage.setItem("locationtini", JSON.stringify(datos)); */
       
           /* imagen y info album tini */
               let tinialbumimg = document.querySelector(".albumtini");
               tinialbumimg.innerHTML += `
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
               /* localStorage.setItem("locationmanos", JSON.stringify(datos)); */
       
           /* imagen y info album manos */
               let manosalbumimg = document.querySelector(".albummanos");
               manosalbumimg.innerHTML += `
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
               /* localStorage.setItem("locationcolores", JSON.stringify(datos)); */
       
           /* imagen y info album colores */
               let coloresalbumimg = document.querySelector(".albumcolores");
               coloresalbumimg.innerHTML += `
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
               /* localStorage.setItem("locationmorat", JSON.stringify(datos)); */
       
           /* imagen y info artist morat */
               let moratartistimg = document.querySelector(".artistmorat");
               moratartistimg.innerHTML += `
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
                   /* localStorage.setItem("locationmiley", JSON.stringify(datos)); */
           
               /* imagen y info artist miley */
                   let mileyartistimg = document.querySelector(".artistmiley");
                   mileyartistimg.innerHTML += `
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
                  /* localStorage.setItem("locationcamilo", JSON.stringify(datos)); */
         
              /* imagen y info artist camilo */
                  let camiloartistimg = document.querySelector(".artistcamilo");
                  camiloartistimg.innerHTML += `
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
                  /* localStorage.setItem("locationjustin", JSON.stringify(datos)); */
         
              /* imagen y info artist justin */
                  let justinartistimg = document.querySelector(".artistjustin");
                  justinartistimg.innerHTML += `
                  <img class="justin" src= "${datos.picture_big}">
                   <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a>
                  `;
              })
               .catch(function(error){
               console.log('Tu error es:' +error)
               })

    /* badbunny artist */
   let idBadbunny = '10583405'
   let badbunny = `${proxy}https://api.deezer.com/artist/${idBadbunny}`;
      
           fetch(badbunny)
              .then(function(response){
                  return response.json();
              })
              .then(function(datos){
                  console.log(datos);
                  /* localStorage.setItem("locationbadbunny", JSON.stringify(datos)); */
         
              /* imagen y info artist badbunny */
                  let badbunnyartistimg = document.querySelector(".artistbadbunny");
                  badbunnyartistimg.innerHTML += `
                  <img class="badbunny" src= "${datos.picture_big}">
                   <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos">${datos.name}</h3> </a>
                  `;
              })
               .catch(function(error){
               console.log('Tu error es:' +error)
               })

        })
{


     
    

     /* <a href="../HTML/detail-artist.html?artistId=${datos.id}"><h3 class="datos"> ${datos.name}</h3> </a> */}



















