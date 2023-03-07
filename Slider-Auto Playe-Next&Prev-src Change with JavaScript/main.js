let images = document.querySelectorAll("div.thumbnail>div.cross>div.item>img")
let mainImage = document.querySelector("div.thumbnail>div.main>img")
let prev = document.getElementById("prev")
let next = document.getElementById("next")
let counter = 0

images.forEach(function (image) {
  image.addEventListener("click", function () {

    //     mainImage.src=this.src
    //    oder 
    mainImage.setAttribute("src", this.getAttribute("src"))
  })
})

next.addEventListener("click", function () {

  counter++

  if (counter > images.length - 1) {
    counter = images.length - 1
  }

  update()
})


prev.addEventListener("click", function () {

  counter--

  if (counter < 0) {
    counter = 0
  }

  update()
})

function update() {
  if (counter === images.length - 1) {
    next.disabled = true

  } else if (counter === 0) {
    prev.disabled = true

  } else {
    next.disabled = false
    prev.disabled = false
  }

  mainImage.src = images[counter].src
}


// .................Auto Player..............

 setInterval(function () {

   counter++

   if (counter>images.length-1) {
     counter = 0
   }

   update()

 }, 1500)


