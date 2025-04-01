import { lyrics } from "./day2-lyricsText.js";

export default function CGRD_Player() {
  window.addEventListener("DOMContentLoaded", () => {
    //prettier-ignore
    const lyricsContainer = document.querySelector(".day2-container__lyricsContainer");
    const audioPlayer = document.querySelector(".day2-container__audioPlayer");
    const parentContainer = document.querySelector(".day2-container");
    let currentPlayTime = 0;

    const createLyrics = function () {
      currentPlayTime = audioPlayer.currentTime;

      let currentLyricLine = lyrics.findIndex((lyricLine, index) => {
        const nextLyricLine = lyrics[index + 1];
        return (
          currentPlayTime >= lyricLine.time &&
          (!nextLyricLine || currentPlayTime < nextLyricLine.time)
        );
      });

      lyricsContainer.textContent = lyrics[currentLyricLine].text;
    };

    audioPlayer.addEventListener("timeupdate", createLyrics);

    // custom audio player
    //prettier-ignore
    const customAudioPlayer = document.querySelector(".day2-container__audioPlayer");
    // progressbar
    const progressBar = document.createElement("input");
    progressBar.type = "range";
    progressBar.value = "0";
    progressBar.className = "progressBar";
    parentContainer.appendChild(progressBar);
    // parent container for play and pause buttons
    const controls = document.createElement("div");
    controls.className = "controls";
    parentContainer.appendChild(controls);
    // play button
    const playButton = document.createElement("img");
    playButton.src = "./Day1-To-Day25/Day2/play.png";
    playButton.className = "play";
    playButton.alt = "play button";
    controls.appendChild(playButton);
    // pause button
    const pauseButton = document.createElement("img");
    pauseButton.src = "./Day1-To-Day25/Day2/pause.png";
    pauseButton.className = "pause";
    pauseButton.alt = "pause button";
    controls.appendChild(pauseButton);

    customAudioPlayer.addEventListener("timeupdate", () => {
      progressBar.max = customAudioPlayer.duration;
      progressBar.value = customAudioPlayer.currentTime;

      if (customAudioPlayer.currentTime === customAudioPlayer.duration) {
        customAudioPlayer.currentTime = 0;
        playButton.style.zIndex = 1;
        pauseButton.style.zIndex = -1;
      }
    });

    progressBar.addEventListener("input", () => {
      customAudioPlayer.play();
      customAudioPlayer.currentTime = progressBar.value;
      playButton.style.zIndex = -1;
      pauseButton.style.zIndex = 1;
    });

    playButton.addEventListener("click", () => {
      playButton.style.zIndex = -1;
      pauseButton.style.zIndex = 1;
      customAudioPlayer.play();
    });
    pauseButton.addEventListener("click", () => {
      playButton.style.zIndex = 1;
      pauseButton.style.zIndex = -1;
      customAudioPlayer.pause();
    });
  });
}
