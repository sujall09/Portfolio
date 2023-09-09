const videos = document.querySelectorAll(".videos");
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseenter", function (e) {
        videos[i].play();
    })
    videos[i].addEventListener("mouseout", function (e) {
        videos[i].pause();
    })
}

// const snakeInfo = document.getElementById("snakeInfo")

// videos[0].addEventListener("mouseenter", function (e) {
//     snakeInfo.style.display = "block";
//     console.log("Hello")
// })
// videos[0].addEventListener("mouseout", function (e) {
//     snakeInfo.style.display = "none";
//     console.log("Hello")
// })

