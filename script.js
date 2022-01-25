console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));




let songs = [
    {songName: "slow-slow Badshah", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tu mera Ho gaya hai ", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Ae Dilla Marjaaniyaan ", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Soch-Liya", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Dance Meri Rani", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Chaka-Chak", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Teri-Judai", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Main chaam chaam", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Rehne Lage Tum Dil mein", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Aaise Naa chodo", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
    {songName: "Tu mera Ho gaya hai ", filePath: "songs/2.mp3", coverPath: "covers/11.jpg"},
    {songName: "Ae Dilla Marjaaniyaan ", filePath: "songs/3.mp3", coverPath: "covers/12.jpg"},
    {songName: "Soch-Liya", filePath: "songs/4.mp3", coverPath: "covers/13.jpg"},
    {songName: "Dance Meri Rani", filePath: "songs/5.mp3", coverPath: "covers/14.jpg"},
    {songName: "Chaka-Chak", filePath: "songs/2.mp3", coverPath: "covers/15.jpg"},
    {songName: "Teri-Judai", filePath: "songs/2.mp3", coverPath: "covers/16.jpg"},
    {songName: "Main chaam chaam", filePath: "songs/2.mp3", coverPath: "covers/17.jpg"},
    {songName: "Soch-Liya", filePath: "songs/4.mp3", coverPath: "covers/18.jpg"}

]

songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

// Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{ 
    
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=17){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

    songIndex.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})