const videos = document.querySelectorAll(".videos");
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseenter", function (e) {
        videos[i].play();
    })
    videos[i].addEventListener("mouseout", function (e) {
        videos[i].pause();
    })
}