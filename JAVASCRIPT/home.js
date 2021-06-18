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
           localStorage.setItem("locationpeaches", JSON.stringify(datos));
   
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
        localStorage.setItem("locationalaire", JSON.stringify(datos));

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
    let idVeintidos = '1156603822'
    let veintidos = `${proxy}https://api.deezer.com/track/${idVeintidos}`;

    fetch(veintidos)
       .then(function(response){
           return response.json();
       })
       .then(function(datos){
           console.log(datos);
           localStorage.setItem("location22", JSON.stringify(datos));
   
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
    
    
})




















