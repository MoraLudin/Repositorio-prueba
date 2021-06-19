/* window.addEventListener('load', function(){ */
    /* const proxy = 'https://cors-anywhere.herokuapp.com/';
    let genredetail = `${proxy}/https://api.deezer.com/genre/${idgenero}`;
    let genredetailartist = `${proxy}/https://api.deezer.com/genre/${idgenero}/artists`; */

/* let querystring = location.search;
let datos = new URLSearchParams(querystring);
let idartist = datos.get("id");
 */
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
    })

