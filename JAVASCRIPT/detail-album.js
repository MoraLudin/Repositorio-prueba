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

        let dancingalbum = document.querySelector('.Dancing')
        dancingalbum.innerHTML += 
        `<h1>${datos.title}</h1>`
    })
    .catch(function(error){
        console.log('Tu error es:' +error)
    })

})