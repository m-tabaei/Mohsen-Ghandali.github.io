let root = document.getElementById("root")
let html = ``
const get = async () => {
    let request = await fetch("http://localhost:3000/user")
    let data = await request.json()

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
}


get()