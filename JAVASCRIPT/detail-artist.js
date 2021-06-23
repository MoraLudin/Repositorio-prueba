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

            let topSong1 = document.querySelector('.top5')
            topSong1.innerHTML += `
            <div class="divtop5"><a href="../HTML/detail-track.html?songId=${datos.data[0].id}"><h3>${datos.data[0].title}</h3></a></div>
            `;

            let topSong2 = document.querySelector('.top5b')
            topSong2.innerHTML += `
            <div class="divtop5b"><a href="../HTML/detail-track.html?songId=${datos.data[1].id}"><h3>${datos.data[1].title}</h3></a></div> 
            `;

            let topSong3 = document.querySelector('.top5c')
            topSong3.innerHTML += `
            <div class="divtop5c"><a href="../HTML/detail-track.html?songId=${datos.data[2].id}"><h3>${datos.data[2].title}</h3></a></div> 
            `;

            let topSong4 = document.querySelector('.top5d')
            topSong4.innerHTML += `
            <div class="divtop5d"><a href="../HTML/detail-track.html?songId=${datos.data[3].id}"><h3>${datos.data[3].title}</h3></a></div> 
            `;

            let topSong5 = document.querySelector('.top5e')
            topSong5.innerHTML += `
            <div class="divtop5e"><a href="../HTML/detail-track.html?songId=${datos.data[4].id}"><h3>${datos.data[4].title}</h3></a></div> 
            `;
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })
   
})