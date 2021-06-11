window.addEventListener('load', function(){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    
/* tracks */
/* peaches track */
    let peaches = `${proxy}https://api.deezer.com/track/1280165222`;

 fetch(peaches)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let peachestrack = document.querySelector(".trackpeaches");
        peachestrack.innerHTML += `<img class="peaches" src= "${datos.album.cover_medium}">`;
    })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    })
})
