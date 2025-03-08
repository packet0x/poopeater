document.addEventListener("DOMContentLoaded", function () {
    let introVideo = document.getElementById("introVideo");
    let introContainer = document.getElementById("introContainer");
    let mainContent = document.getElementById("mainContent");
    let backgroundVideoContainer = document.getElementById("backgroundVideoContainer");
    let backgroundMusic = document.getElementById("backgroundMusic");
    let toggleMusicButton = document.getElementById("toggleMusicButton");
    let soundtrackContainer = document.getElementById("soundtrackContainer");
    let musicPlayer = document.getElementById("musicPlayer");
    let musicList = document.getElementById("musicList");
    let currentMusic = backgroundMusic; 

    introVideo.muted = true;
    introVideo.play();

    document.body.addEventListener("click", function enableAudio() {
        introVideo.muted = false;
        document.body.removeEventListener("click", enableAudio);
    });

    introVideo.addEventListener("ended", function () {
        introContainer.style.display = "none";
        backgroundVideoContainer.classList.remove("hidden");
        mainContent.classList.remove("hidden");
        soundtrackContainer.classList.remove("hidden");
        backgroundMusic.play();
        highlightCurrentMusic(document.querySelector(".default-music"));
    });

    if (toggleMusicButton) {
        toggleMusicButton.addEventListener("click", function () {
            if (!currentMusic.paused) {
                currentMusic.pause();
                toggleMusicButton.innerText = "🔇";
            } else {
                currentMusic.play();
                toggleMusicButton.innerText = "🔊";
            }
        });
    }

    musicList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            let songSrc = event.target.getAttribute("data-src");

            
            currentMusic.pause();
            currentMusic.currentTime = 0;
           
            if (event.target.classList.contains("default-music")) {
                currentMusic = backgroundMusic;
            } else {
                musicPlayer.src = songSrc;
                currentMusic = musicPlayer;
            }

            currentMusic.play();
            toggleMusicButton.innerText = "🔊";
            highlightCurrentMusic(event.target);
        }
    });
   
    function highlightCurrentMusic(selectedLi) {
        document.querySelectorAll("#musicList li").forEach(li => {
            if (li.classList.contains("default-music")) {
                li.style.color = "#ffcc00"; 
            } else {
                li.style.color = "white"; 
            }
            li.classList.remove("playing");
        });

        selectedLi.style.color = "#00ccff"; 
        selectedLi.classList.add("playing");
    }
});
