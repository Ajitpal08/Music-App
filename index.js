let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let playBtn = document.getElementById("playBtn");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById('gif')
let masterSongName = document.getElementById('masterSong')
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))



let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath:"songs/1.mp3", coverpath:"covers/1.jpg"},
    {songName: "Jarico", filePath:"songs/2.mp3", coverpath:"covers/2.jpg"},
    {songName: "Dopamine", filePath:"songs/3.mp3", coverpath:"covers/3.jpg"},
    {songName: "Ncs Cool", filePath:"songs/4.mp3", coverpath:"covers/4.jpg"},
    {songName: "Wariyo", filePath:"songs/5.mp3", coverpath:"covers/5.jpg"},
    {songName: "NCS cool", filePath:"songs/6.mp3", coverpath:"covers/6.jpg"},
    {songName: "Dopamine", filePath:"songs/7.mp3", coverpath:"covers/7.jpg"},
]

 songItems.forEach((element,i) => {
    console.log(element,i)    
    element.getElementsByTagName("img")[0].src = songs[i].coverpath
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName
 });

playBtn.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        playBtn.classList.remove('fa-pause-circle');
        playBtn.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100
})

const makeAllPlays = ()=>{
    songItemPlay.forEach((element) =>{
        
       
            element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
      
    })
}

songItemPlay.forEach((element) =>{
    element.addEventListener('click',(e) =>{
        console.log(e);
        makeAllPlays();
       
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src= `songs/${songIndex}.mp3`;
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
    }
      )
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>6){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        playBtn.classList.remove('fa-play-circle');
        playBtn.classList.add('fa-pause-circle');
})

