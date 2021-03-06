window.addEventListener('load', function(){
    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let resultados = datos.get("search");

    let titulo = document.querySelector(".semuestran")
    titulo.innerHTML='Se muestran resultados para: '+resultados+''

    /* agarrar de la api la info de search */
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/track?q="+resultados) 
        .then(function(response){
            return response.json();
        })

        .then (function(data){
            let busqueda = data.data
            console.log(busqueda);
            let loading = document.querySelector(".loading") 
            loading.remove()
        
            if (busqueda.length == 0) {
                titulo.innerHTML='No encontramos nada para: '+resultados+''
            }
        
            let lista = document.querySelector(".lista")
        
            for (let index = 0; index < busqueda.length; index++) {
                lista.innerHTML += '<a href="detail-track.html?songId='+busqueda[index].id+'"><li> '+busqueda[index].title+', '+busqueda[index].artist.name+' </li></a>'   
            }
        })
        .catch(function(error){
            console.log('Tu error es:' +error)
        })      
})





