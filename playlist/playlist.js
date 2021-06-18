window.addEventListener("load",function(){
    const proxy= `https://cors-anywhere.herokuapp.com/`;
    let api= `${proxy}https://api.deezer.com/track/`;

    fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        let songs1= document.getElementById ("songs1")
        let favoritos1 = JSON.parse(localStorage.getItem('peachesimgplay'));
        let favoritos1info = JSON.parse(localStorage.getItem('peachestitleplay'));
        songs1.innerHTML+= `<img class=playimage src="${favoritos1}">
        <h3>${favoritos1info}`
        ;
    })
})
    /* let songs1 = document.getElementById("songs1");
    let songs2 = document.getElementById("songs2");
    let songs3 = document.getElementById("songs3");
    let songs4 = document.getElementById("songs4");
    let songs5 = document.getElementById("songs5"); */
    /* let songs6 = document.getElementById("songs6");
    let songs7 = document.getElementById("songs7");
    let songs8 = document.getElementById("songs8");
    let songs9 = document.getElementById("songs9");
    let songs10 = document.getElementById("songs10");
    let songs11 = document.getElementById("songs11");
    let songs12 = document.getElementById("songs12");
    let songs13 = document.getElementById("songs13");
    let songs14 = document.getElementById("songs14");
 */
/*    songs1.innerHTML+= `
   <img src= "${datos.data[1].picture_medium}">
    <h3> ${datos.data[1].name} </h3> `
    ;
    songs2.innerHTML+= `
   <img src= "${datos.data[2].picture_medium}">
    <h3> ${datos.data[2].name} </h3>
    `;
    songs3.innerHTML+= `
   <img src= "${datos.data[3].picture_medium}">
    <h3> ${datos.data[3].name} </h3>
    `;
    songs4.innerHTML+= `
   <img src= "${datos.data[4].picture_medium}">
    <h3> ${datos.data[4].name} </h3>
     `;
    songs5.innerHTML+= `
   <img src= "${datos.data[5].picture_medium}">
    <h3> ${datos.data[5].name} </h3>
    `;
    songs6.innerHTML+= `
   <img src= "${datos.data[6].picture_medium}">
    <h3> ${datos.data[6].name} </h3>
    `;
    songs7.innerHTML+= `
   <img src= "${datos.data[7].picture_medium}">
    <h3> ${datos.data[7].name} </h3>
    `;
    songs8.innerHTML+= `
   <img src= "${datos.data[8].picture_medium}">
    <h3> ${datos.data[8].name} </h3>
    `;
    songs9.innerHTML+= `
   <img src= "${datos.data[9].picture_medium}">
    <h3> ${datos.data[9].name} </h3>
    `;
    songs10.innerHTML+= ` 
   <img src= "${datos.data[10].picture_medium}">
    <h3> ${datos.data[10].name} </h3>
    `;
    songs11.innerHTML+= `
   <img src= "${datos.data[11].picture_medium}">
    <h3> ${datos.data[11].name} </h3>
    `;
    songs12.innerHTML+= ` 
   <img src= "${datos.data[12].picture_medium}">
    <h3> ${datos.data[12].name} </h3>
    `;
    songs13.innerHTML+= `
   <img src= "${datos.data[13].picture_medium}>
    <h3> ${datos.data[13].name} </h3>
    `;
    songs14.innerHTML+= `
   <img src= "${datos.data[14].picture_medium}>
    <h3> ${datos.data[14].name} </h3>
    `;
    
    songs1.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Fiel`, JSON.stringify(`${datos.data[1].picture_medium}`));
    });
    songs2.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Baila Conmigo`, JSON.stringify(`${datos.data[2].picture_medium}`));
    });
    songs3.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Reloj`, JSON.stringify(`${datos.data[3].picture_medium}`));
    });
    songs4.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Hawai`, JSON.stringify(`${datos.data[4].picture_medium}`));
    });
    songs5.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Antes`, JSON.stringify(`${datos.data[5].picture_medium}`));
    });
    songs6.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`La Canción`, JSON.stringify(`${datos.data[6].picture_medium}`));
    });
    songs7.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Como Mirarte`, JSON.stringify(`${datos.data[7].picture_medium}`));
    });
    songs8.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Lonely`, JSON.stringify(`${datos.data[8].picture_medium}`));
    });
    songs9.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Jeans`, JSON.stringify(`${datos.data[9].picture_medium}`));
    });
    songs10.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Ghost Town`, JSON.stringify(`${datos.data[10].picture_medium}`));
    });
    songs11.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Otra Noche Sin Ti`, JSON.stringify(`${datos.data[11].picture_medium}`));
    });
    songs12.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Heartbreak Anniversary`, JSON.stringify(`${datos.data[12].picture_medium}`));
    });
    songs13.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Bandido`, JSON.stringify(`${datos.data[13].picture_medium}`));
    });
    songs14.addEventListener("click",function(e){
        e.preventDefault();
        localStorage.setItem(`Telepatía`, JSON.stringify(`${datos.data[14].picture_medium}`));
    });
    fetch(api)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);

        let favoritos1 = JSON.parse(localStorage.getItem(`Fiel`));
        songs1.innerHTML+= `<img src= "${favoritos1}">`;

        let favoritos2 = JSON.parse(localStorage.getItem(`Baila Conmigo`));
        songs1.innerHTML+= `<img src= "${favoritos2}">`;

        let favoritos3 = JSON.parse(localStorage.getItem(`Reloj`));
        songs1.innerHTML+= `<img src= "${favoritos3}">`;

        let favoritos4 = JSON.parse(localStorage.getItem(`Hawai`));
        songs1.innerHTML+= `<img src= "${favoritos4}">`;

        let favoritos5 = JSON.parse(localStorage.getItem(`Antes`));
        songs1.innerHTML+= `<img src= "${favoritos5}">`;

        let favoritos6 = JSON.parse(localStorage.getItem(`La canción`));
        songs1.innerHTML+= `<img src= "${favoritos6}">`;

        let favoritos7 = JSON.parse(localStorage.getItem(`Como Mirarte`));
        songs1.innerHTML+= `<img src= "${favoritos7}">`;

        let favoritos8 = JSON.parse(localStorage.getItem(`Lonely`));
        songs1.innerHTML+= `<img src= "${favoritos8}">`;

        let favoritos9 = JSON.parse(localStorage.getItem(`Jeans`));
        songs1.innerHTML+= `<img src= "${favoritos9}">`;

        let favoritos10 = JSON.parse(localStorage.getItem(`Ghsot Town`));
        songs1.innerHTML+= `<img src= "${favoritos10}">`;

        let favoritos11 = JSON.parse(localStorage.getItem(`Otra Noche Sin Ti`));
        songs1.innerHTML+= `<img src= "${favoritos11}">`;

        let favoritos12 = JSON.parse(localStorage.getItem(`Heartbreak Anniversary`));
        songs1.innerHTML+= `<img src= "${favoritos12}">`;

        let favoritos13 = JSON.parse(localStorage.getItem(`Bandido`));
        songs1.innerHTML+= `<img src= "${favoritos13}">`;

        let favoritos14 = JSON.parse(localStorage.getItem(`Telepatía`));
        songs1.innerHTML+= `<img src= "${favoritos14}">`;
    })
})
 */

 /*    
    [
        {
            songImage: 'src=${data.album.cover}',
            songName: 'Fiel',
            songId: '1224382782',
        },
        {
            songImage: '../playlist/imgplaylist/baila_conmigo.jpeg',
            songName: 'Baila Conmigo',
            songId: '1270927802'
        },
        {
            songImage: '../playlist/imgplaylist/reloj.jpeg',
            songName: 'Reloj',
            songId: '1113358942',
        },
        {
            songImage: '../playlist/imgplaylist/hawai.jpeg',
            songName: 'Hawai',
            songId: '1032957942',
        },
        {
            songImage: '../playlist/imgplaylist/antes.jpeg',
            songName: 'Antes',
            songId: '1210713802',
        },
        {
            songImage: '../playlist/imgplaylist/la-cancion.jpeg',
            songName: 'La Canción',
            songId: '702421822',
        },
        {
            songImage: '../playlist/imgplaylist/comomirarte.jpeg',
            songName: 'Cómo Mirarte',
            songId: '110446172',
        },
        {
            songImage: '../playlist/imgplaylist/lonely.jpeg',
            songName: 'Lonely',
            songId: '1110767312',
        },
        {
            songImage: '../playlist/imgplaylist/jeans.jpeg',
            songName: 'Jeans',
            songId: '1048019922', 
        },
        {
            songImage: '../playlist/imgplaylist/ghost-town.jpeg',
            songName: 'Ghost Town',
            songId: '98358966', 
        },
        {
            songImage: '../playlist/imgplaylist/otranochesinti.jpeg',
            songName: 'Otra Noche Sin Ti',
            songId: '1303233332', 
        },
        {
            songImage: '../playlist/imgplaylist/heratbreak.jpeg',
            songName: 'Heartbreak Anniversary',
            songId: '909312242', 
        },
        {
            songImage: '../playlist/imgplaylist/bandido.jpeg',
            songName: 'Bandido',
            songId: '1142380132', 
        },
        {
            songImage: '../playlist/imgplaylist/telepatia.jpeg',
            songName: 'Telepatía',
            songId: '1148585682', 
        }
    ]
    let songs= document.getElementById("songs")

}
)

/* let songs = [
    {
        songImage: 'src=${data.album.cover}',
        songName: 'Fiel',
        songId: '1224382782',
    },
    {
        songImage: '../playlist/imgplaylist/baila_conmigo.jpeg',
        songName: 'Baila Conmigo',
        songId: '1270927802'
    },
    {
        songImage: '../playlist/imgplaylist/reloj.jpeg',
        songName: 'Reloj',
        songId: '1113358942',
    },
    {
        songImage: '../playlist/imgplaylist/hawai.jpeg',
        songName: 'Hawai',
        songId: '1032957942',
    },
    {
        songImage: '../playlist/imgplaylist/antes.jpeg',
        songName: 'Antes',
        songId: '1210713802',
    },
    {
        songImage: '../playlist/imgplaylist/la-cancion.jpeg',
        songName: 'La Canción',
        songId: '702421822',
    },
    {
        songImage: '../playlist/imgplaylist/comomirarte.jpeg',
        songName: 'Cómo Mirarte',
        songId: '110446172',
    },
    {
        songImage: '../playlist/imgplaylist/lonely.jpeg',
        songName: 'Lonely',
        songId: '1110767312',
    },
    {
        songImage: '../playlist/imgplaylist/jeans.jpeg',
        songName: 'Jeans',
        songId: '1048019922', 
    },
    {
        songImage: '../playlist/imgplaylist/ghost-town.jpeg',
        songName: 'Ghost Town',
        songId: '98358966', 
    },
    {
        songImage: '../playlist/imgplaylist/otranochesinti.jpeg',
        songName: 'Otra Noche Sin Ti',
        songId: '1303233332', 
    },
    {
        songImage: '../playlist/imgplaylist/heratbreak.jpeg',
        songName: 'Heartbreak Anniversary',
        songId: '909312242', 
    },
    {
        songImage: '../playlist/imgplaylist/bandido.jpeg',
        songName: 'Bandido',
        songId: '1142380132', 
    },
    {
        songImage: '../playlist/imgplaylist/telepatia.jpeg',
        songName: 'Telepatía',
        songId: '1148585682', 
    }
]
/*  */

/* for (let index = 0; index < songs.length; index++){
    const currentSong = songs[index];
    document.querySelector('.miplaylist').innerHTML+=`
        <div class="playlistsongs">
            <img class="playimage" src=${currentSong.songImage} alt=${currentSong.songName}>
            <a class="cancnombre" href="../details/track/detail-track.html?songId=${currentSong.songId}">
                <h3>${currentSong.songName}</h3>
            </a>
        </div>
    
} */