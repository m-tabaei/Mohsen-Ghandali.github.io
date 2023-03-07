const btnClose = document.querySelector("div.cover>div.modal > button#close")
const cover = document.querySelector("div.cover")
const modal = document.querySelector("div.cover>div.modal")
const css ={
    animationDuration:"300ms",
    animationFunction:"linear",
    animationFillMode:"forwards",
}

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
      Object.assign(cover.style,{display:"block"}, {animationName:"fadeIn"}, css)

    setTimeout(function () {
     Object.assign(modal.style, {display:"block"}, {animationName:"fadeIn"}, css)
    }, 300);
  }, 1000);
})

btnClose.addEventListener("click", function(){
   Object.assign(modal.style, {display:"none"}, {animationName:"fadeOut"}, css)

setTimeout(function() {
   Object.assign(cover.style, {display:"none"}, {animationName:"fadeOut"}, css)
}, 600);
})

cover.addEventListener("click", function(e){
    if(e.target===cover){
        cover.style.display="none"
        modal.style.display="none"
    }
})