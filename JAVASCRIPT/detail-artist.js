window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    let queryString = location.search
    let artistQuery = new URLSearchParams (queryString)
    let artistId = artistQuery.get('artistId')
    console.log(artistId)
    
    fetch(`${proxy}https://api.deezer.com/artist/${artistId}`)
        .then(function(response){
            return response.json ()
        })
        .then(function(datos){
            console.log(datos)

            let artistName = document.querySelector('.artistmorat')
            artistName.innerHTML += `
            <h1>${datos.name}</h1> 
            `;

            let artistFoto = document.querySelector('.imgmorat')
            artistFoto.innerHTML += `
            <img class="perfilmorat" src= "${datos.picture_big}"> 
            `;
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })
    

    fetch(`${proxy}https://api.deezer.com/artist/${artistId}/top`)
        .then(function(response){
            return response.json ()
        })
        .then(function(datos){
            console.log(datos)

            let albumTop = datos.data
            for (let index = 0; index < 5; index++) {
                let topSong1 = document.querySelector('.top5')
                topSong1.innerHTML += `
                <div class="divtop5"><a href="../HTML/detail-track.html?songId=${albumTop[index].id}"><h3>${albumTop[index].title}</h3></a></div>
                `;  
            }

        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })
   
})