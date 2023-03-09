let html = ""
let root = document.getElementById("root")
let btn = document.querySelector("button")
let get = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3000/users")
    xhr.responseType="json"
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
          xhr.response.forEach(function (elem) {
                html += `
<div>
<p>${elem.id}</p>
<p>${elem.user}</p>
<p>${elem.pass}</p>
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
