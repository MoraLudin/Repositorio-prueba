const urlSearchParams = new URLSearchParams(window.location.search);
const songId = urlSearchParams.get('songId')
const proxy = 'https://cors-anywhere.herokuapp.com/';

let local = localStorage.getItem('locationpeaches')
let objetopeaches = JSON.parse(local);

let local1 = localStorage.getItem('locationalaire')
let objetoalaire = JSON.parse(local1);

let local2 = localStorage.getItem('location22')
let objeto22 = JSON.parse(local2)

let local3 = localStorage.getItem('locationropacara')
let objetoropacara = JSON.parse(local3)

let local4 = localStorage. getItem('locationdakiti')
let objetodakiti = JSON.parse(local4)


fetch(`${proxy}https://api.deezer.com/track/${songId}`)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

    /* imagen para detalle DE LA CANCION QUE HAYAS PRESIONADO EN EL HOME */
        let alairedetail = document.querySelector(".detailalaire");
        alairedetail.innerHTML += `
        <img class="alairesong" src= "${datos.album.cover_big}"> 
        `;
    
    /* info detalle cancion  DE LA CANCION QUE HAYAS PRESIONADO EN EL HOME*/
        let alairedata = document.querySelector(".infoalaire");
        alairedata.innerHTML += `
        <h1 class="alaire">${datos.title}</h1>
        <h2 class="alaire1">${datos.artist.name}</h2>
        `; 
    
        let addplaylist = document.querySelector(".addplaylist")
        addplaylist.addEventListener("click", function(e){
            e.preventDefault(); /* saca el comportamiento por defecto */
            localStorage.setItem('peachesimgplay', JSON.stringify(`${datos.album.cover_big}`));
            localStorage.setItem('peachestitleplay', JSON.stringify(`${datos.title}`));
        })
        /* let addplaylist1 = document.querySelector(".addplaylist")
        addplaylist1.addEventListener("click", function(e){
            e.preventDefault();
            localStorage.setItem('alaireimgplay', JSON.stringify(`${datos.album.cover_big}`)); /* PROBLEM 
            localStorage.setItem('alairetitleplay', JSON.stringify(`${datos.title}`));
        }) */

     })
    .catch(function(error){ 
        console.log('Tu error es:' +error)
    })

