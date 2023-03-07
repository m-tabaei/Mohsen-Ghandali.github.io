// ..............modal be ravesh CSS External...............
const btnOpen = document.getElementById("open")
const btnClose = document.querySelector("div.cover>div.modal > button#close")
const cover = document.querySelector("div.cover")
const modal = document.querySelector("div.cover>div.modal")


btnOpen.addEventListener("click", function () {
    cover.classList.add("cover1")
    setTimeout(function () {
        modal.classList.add("modal1")
    }, 300);
})


btnClose.addEventListener("click", function () {
    cover.classList.remove("cover1")
    setTimeout(function () {
        modal.classList.remove("modal1")
    }, 600);
})


cover.addEventListener("click", function (e) {

    if (e.target === cover) {
        cover.classList.remove("cover1")
        modal.classList.remove("modal1")
    }
})