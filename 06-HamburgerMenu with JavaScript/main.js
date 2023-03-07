let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.querySelector("section.hamburgerMenu")
let cover = document.createElement("div");


open.addEventListener("click", function () {
    cover.className = "cover";
    document.body.append(cover);
    menu.classList.add("active")
});

close.addEventListener("click", function () {
    menu.classList.remove("active")
    cover.classList.remove("cover")
    cover.remove()
})

cover.addEventListener("click", function () {
    menu.classList.remove("active")
    cover.classList.remove("cover")
    cover.remove()
})


