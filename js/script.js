document.addEventListener("DOMContentLoaded", function () {
    let introVideo = document.getElementById("introVideo");
    let introContainer = document.getElementById("introContainer");
    let mainContent = document.getElementById("mainContent");
    let backgroundVideoContainer = document.getElementById("backgroundVideoContainer");
    let backgroundMusic = document.getElementById("backgroundMusic");
    let toggleMusicButton = document.getElementById("toggleMusicButton");

    let userInteracted = false; 

    introVideo.muted = true;
    introVideo.play();

    document.body.addEventListener("click", function enableAudio() {
        userInteracted = true;
        introVideo.muted = false; 
        document.body.removeEventListener("click", enableAudio); 
    });
   
    introVideo.addEventListener("ended", function () {
        introContainer.style.display = "none";
        backgroundVideoContainer.classList.remove("hidden");
        mainContent.classList.remove("hidden");

        if (userInteracted) {
            backgroundMusic.play(); 
        }
    });

    if (toggleMusicButton && backgroundMusic) {
        toggleMusicButton.addEventListener("click", function () {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                toggleMusicButton.innerText = "🔊";
            } else {
                backgroundMusic.pause();
                toggleMusicButton.innerText = "🔇";
            }
        });
    }
});
