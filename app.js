// reloading same page using h1
const reloading = document.querySelector("#head")

reloading.addEventListener("click", () => {
    window.location.reload();
});

// playing & pausing video on mouseover
const videos = document.querySelectorAll(".videos");
for (let i = 0; i < videos.length; i++) {
    videos[i].addEventListener("mouseenter", function (e) {
        videos[i].play();
    })
    videos[i].addEventListener("mouseout", function (e) {
        videos[i].pause();
    })
}

// Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el);
})
