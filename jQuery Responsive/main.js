let xl = window.matchMedia("(min-width:1200px)")
let lg = window.matchMedia("(min-width:992px) and (max-width:1200px")
let body = document.querySelector("body")
let div = document.querySelector("body>div")

window.addEventListener("resize", function(){
    if(xl.matches){
        body.classList.add("bg")
        div.classList.add("bgDiv")
    }else if(lg.matches){
        body.classList.add("bgDiv")
        div.classList.add("bg")
    }
})
