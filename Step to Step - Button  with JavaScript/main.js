let circles = document.querySelectorAll("div.container>div.circles>div.circle")
let progressBar = document.querySelector("div.container>div.progress>div.progress-bar")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let counter = 0

next.addEventListener("click", function () {
  counter++
  circles[counter].classList.add("active");
  update()
})

prev.addEventListener("click", function () {

  circles[counter].classList.remove("active")
  counter--
  update()
})

function update() {
  progressBar.style.width = `${100 / (circles.length - 1) * counter}%`
  //.....................................................
  
  prev.disabled = counter === 0
  next.disabled = counter === circles.length - 1

  // ...........................or......................

  //  if (counter === circles.length - 1) {
  //    next.setAttribute("disabled", "disabled")
  //  } else if (counter === 0) {
  //    prev.setAttribute("disabled", "disabled")
  //  } else {
  //    next.removeAttribute("disabled", "disabled")
  //    prev.removeAttribute("disabled", "disabled")
  //  }

}