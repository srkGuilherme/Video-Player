const video_display = document.getElementById("video_display");
const playing_video = document.getElementById("video_source");
const previous_button = document.getElementById("previous_button");
const next_button = document.getElementById("next_button");
const video_name = document.getElementById("video_name");
const playlist = document.getElementById("playlist_ul");

/* Vídeos */

let videos = [
  {
    artist: "Ghostemane",
    name: "Fed up",
    source: "./assets/videos/video1.mp4",
  },
  {
    artist: "Ghostemane",
    name: "Mercury",
    source: "./assets/videos/video2.mp4",
  },
  { artist: "Tyga", name: "Taste", source: "./assets/videos/video3.mp4" },
];

/* Vídeo inicial */

let current_video = 0;
playing_video.volume = 0.3;

/* Display de nome do artista + nome da música */

playing_video.setAttribute("src", videos[current_video].source);
video_display.load();
video_name.innerText =
  videos[current_video].artist + " - " + videos[current_video].name;

/* Iniciar reprodução */

function play_musicvideo() {
  if (video_display.paused == false) {
    video_display.pause();
  } else {
    video_display.play();
  }
}

/* Executar reprodução */

function execute_play_video() {
  playing_video.setAttribute("src", videos[current_video].source);
  video_display.load();
  video_display.play();
  video_name.innerText =
    videos[current_video].artist + " - " + videos[current_video].name;
}

/* Próximo vídeo */

function proximo_video() {
  console.log("teste proximo video");
  if (current_video == videos.length) {
    next_button.disabled = true;
  } else {
    next_button.disabled = false;
    current_video++;
    execute_play_video();
  }
}

/* Vídeo anterior */

function video_anterior() {
  console.log("teste video anterior");
  if (current_video == 0) {
    previous_button.disabled = true;
  } else {
    previous_button.disabled = false;
    current_video--;
    execute_play_video();
    console.log(current_video);
  }
}

/* Lista de vídeos */

for (
  let videos_playlist_length = 0;
  videos_playlist_length <= videos.length;
  videos_playlist_length++
) {
  playlist.innerHTML +=
    "<li>" +
    videos[videos_playlist_length].artist +
    " - " +
    videos[videos_playlist_length].name +
    "</li>";
  console.log("teste");
}
