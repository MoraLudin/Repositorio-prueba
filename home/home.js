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
    /* imagen y info track peaches desde api */
        let peachestrackimg = document.querySelector(".trackpeaches");
        peachestrackimg.innerHTML += `
        <img class="peaches" src= "${datos.album.cover_medium}"> 
        <h3>${datos.title}</h3> 
        `;
    
    /* no fucniona la info */

    /*     let peachestrackinfo = document.querySelector(".infopeaches");
        peachestrackinfo.innerHTML += `<h3>${datos.title}</h3>`; */


    })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    })
})
