let html = ""
const get = async () => {
    let req = await axios.get("http://localhost:3000/user")
    let res = await req.data

   await res.map((elem) => {
        html += `
<div>
<h1>${elem.id}</h1>
<h1>${elem.firstName}</h1>
<h1>${elem.lastName}</h1>
<img src="${elem.img}" alt="">

</div>
`
    })
    document.getElementById("root").innerHTML = html
}
get()