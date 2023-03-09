let html = ""
let root = document.getElementById("root")
let data = {
    id: 4,
    user: "Mani",
    pass: "87654321"
}
let btn = document.querySelector("button")

let post = () => {
return new Promise (resolve =>{
    let xhr = new XMLHttpRequest()
    xhr.open("POST", "http://localhost:3000/users")
    xhr.setRequestHeader("Content-type", "application/json")
    xhr.send(JSON.stringify(data))
    resolve()
})
}

let get = () => {
   return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:3000/users")
    xhr.responseType = "json"
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
resolve(xhr)
        }
    }
    xhr.onerror = xhr.ontimeout = function () {
   reject("Error Happened")
    }
    xhr.send(JSON.stringify(data))
   })
}

async function process() {
   await post() 
   await get().then(get).then((res)=>{
    res.response.forEach(function (elem) {
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
}).catch(e=>{console.log(e);})
}

btn.addEventListener("click", function () {
 process()
})






