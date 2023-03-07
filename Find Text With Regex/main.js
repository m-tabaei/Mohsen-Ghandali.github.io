let input = document.querySelector("input")
let p = document.querySelector("p")

input.addEventListener("keyup", function () {
    let pattern = new RegExp(input.value, "ig")
    p.innerHTML = p.textContent.replace(pattern, `<span style="background-color:yellow" >${input.value}</span>`)
})