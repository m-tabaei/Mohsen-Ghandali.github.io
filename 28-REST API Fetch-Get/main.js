let root = document.getElementById("root")
let html = ""
const get = () => {
    fetch("http://localhost:3000/user")
        .then((res) => res.json())
        .then((data) => {
            data.map((elem) => {
                html += `
                <div>
                <span>${elem.id}</span>
                <h2>${elem.firstName}</h2>
                <h2>${elem.lastName}</h2>
                </div>
                <hr>
                `
            })
            root.innerHTML = html
        })
        .catch(function (e) {
            alert(e.message)
        })
}

get()