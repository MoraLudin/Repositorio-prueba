let songs = [
    {
        songImage: '../playlist/imgplaylist/fiel.jpeg',
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

for (let index = 0; index < songs.length; index++) {
    const currentSong = songs[index];
    document.querySelector('.miplaylist').innerHTML+=`
        <div class="playlistsongs">
            <img class="playimage" src=${currentSong.songImage} alt=${currentSong.songName}>
            <a class="cancnombre" href="../details/track/detail-track.html?songId=${currentSong.songId}">
                <h3>${currentSong.songName}</h3>
            </a>
        </div>
    `
}

/* fetch("https://api.deezer.com/search?q=track:'Telepatía'")
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})

 */