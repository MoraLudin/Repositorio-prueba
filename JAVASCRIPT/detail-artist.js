/* window.addEventListener('load', function(){ */
    /* const proxy = 'https://cors-anywhere.herokuapp.com/';
    let genredetail = `${proxy}/https://api.deezer.com/genre/${idgenero}`;
    let genredetailartist = `${proxy}/https://api.deezer.com/genre/${idgenero}/artists`; */

/* let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idartist = datos.get("id");

const urlSearchParams = new URLSearchParams(window.location.search);
const artistId = urlSearchParams.get('artistId')
const proxy = 'https://cors-anywhere.herokuapp.com/';

let storage = localStorage.getItem('locationmorat')
let storagemorat = JSON.parse(storage)

let storage1 = localStorage.getItem('locationmiley')
let storagemiley = JSON.parse(storage1)

let storage2 = localStroage.getItem('locationcamilo')
let storagecamilo = JSON.parse(storage2)

let storage3 = localStorage.getItem('locationjustin')
let storagejustin = JSON.parse(storage3)

let storage4 = localStorage.getItem('locationbadbunny')
let storagebadbunny = JSON.parse(storage4)

fetch(`${proxy}https://api.deezer.com/artist/${artistId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

    let moratartist = document.querySelector(".imgmorat")
    moratartist.innerHTML += `
    <img class="perfilmorat" src= "${datos.picture_big}">
    `

     })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    }) */

window.addEventListener('load', function(){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        let querystring = location.search
        let artistquery = new URLSearchParams (querystring)
        let artistId = artistquery.get('artistId')
    console.log(artistId)
    
    fetch(`${proxy}https://api.deezer.com/artist/${artistId}`)
        .then(function(response){
            return response.json ()
        })
        .then(function(datos){
            console.log(datos)

            let artistname = document.querySelector('.artistmorat')
            artistname.innerHTML += `
            <h1>${datos.name}</h1> 
            `;
            let artistfoto = document.querySelector('.imgmorat')
            artistfoto.innerHTML += `
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

        let topsong1 = document.querySelector('.top5')
        topsong1.innerHTML += `
        <div class="divtop5"><h3>${datos.data[0].title}</h3></div> 
        `;

        let topsong2 = document.querySelector('.top5b')
        topsong2.innerHTML += `
        <div class="divtop5b"><h3>${datos.data[1].title}</h3></div> 
        `;

        let topsong3 = document.querySelector('.top5c')
        topsong3.innerHTML += `
        <div class="divtop5c"><h3>${datos.data[2].title}</h3></div> 
        `;

        let topsong4 = document.querySelector('.top5d')
        topsong4.innerHTML += `
        <div class="divtop5d"><h3>${datos.data[3].title}</h3></div> 
        `;

        let topsong5 = document.querySelector('.top5e')
        topsong5.innerHTML += `
        <div class="divtop5e"><h3>${datos.data[4].title}</h3></div> 
        `;
       

    })
    .catch(function(error){
        console.log('Tu error es:' +error)
    })
   
     /*   https://api.deezer.com/artist/58568762/top
            /* let artisttop5 = document.querySelector('.top')
            artisttop5.innerHTML += ` */
            /* let artisttop5 = document.querySelector('.prueba')
            for (let index = 0; index < 5; index++) {
                artisttop5.innerHTML += '<div class="hola"><h2>'+datos.tracklist.data[0].title+'</h2></div>' 
                
            }
            <div class="artistsongs">
             <h1="morat5" src="${}" alt="El embrujo"><a href="detail-track.html"><h2>El Embrujo</h2></a>
            </div> 
             <a href="../HTML/detail-track.html?id='+datos.tracklist.data[0].id+'">
            `; 
            */
})