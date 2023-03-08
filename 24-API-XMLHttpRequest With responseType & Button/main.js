let html = ""
let root = document.getElementById("root")
let btn = document.querySelector("button")
let get = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhr.responseType="json"
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
          xhr.response.forEach(function (elem) {
                html += `
<div>
<h1>${elem.id}</h1>
<h2>${elem.title}</h2>
<p>${elem.body}</p>
</div>
<hr/>
`
            })
            root.innerHTML = html
        }
    }
    xhr.onerror = xhr.ontimeout = function () {
        console.log("Error Happened");
    }
    xhr.send()
}
btn.addEventListener("click", function () {
    get()
})
