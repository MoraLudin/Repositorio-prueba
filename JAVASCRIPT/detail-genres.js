window.addEventListener('load', function(){

    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idGenero = datos.get("id");

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+idGenero)
        .then(function(response){
             return response.json();
        })
        .then (function(data){
            let titulo = document.querySelector(".titulo")
            titulo.innerHTML += data.name
        });

    fetch ("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/"+idGenero+"/artists")
        .then(function(response){
            return response.json();
        })
        .then (function(data){
            console.log(data);

            let bandas = data.data

            let fila1 = document.querySelector(".generos1")
            for (let index = 0; index < 5; index++) {
                fila1.innerHTML += '<div class="rockgenero1"> <a href="../HTML/detail-artist.html?artistId='+bandas[index].id+'"><h2>'+bandas[index].name+'</h2></a> <img class="rock" src="'+bandas[index].picture_big+'" alt="'+bandas[index].name+'" ></div>'
            }

            let fila2 = document.querySelector(".generos2")
            for (let index = 5; index < 10; index++) {
                fila2.innerHTML += '<div class="rockgenero1"> <a href="../HTML/detail-artist.html?artistId='+bandas[index].id+'"><h2>'+bandas[index].name+'</h2></a> <img class="rock" src="'+bandas[index].picture_big+'" alt="'+bandas[index].name+'" ></div>'
            }
        });
})
