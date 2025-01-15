const btns = document.querySelectorAll(".btns");

const sounds = [
  "Music/music-1.mp3", 
  "Music/music-2.mp3",
  "Music/music-3.mp3",
  "Music/music-4.mp3",
  "Music/music-5.mp3",
  "Music/music-6.mp3",
  "Music/music-7.mp3",
  "Music/music-8.mp3",
  "Music/music-9.mp3",
  "Music/music-10.mp3",
  "Music/music-11.mp3",
  "Music/music-12.mp3"
];

const audioPlayers = sounds.map((src) => {
  const audio = new Audio();
  audio.src = src;
  return audio;
});

function playSound(index) {
  audioPlayers.forEach((audio, i) => {
    if(i === index) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}

btns.forEach((btn, index) => {
  btn.addEventListener("click", () => playSound(index));
});