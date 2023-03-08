let get = () => {
    let xhr = new XMLHttpRequest()
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts")
    xhr.onload = function () {
        if (xhr.status === 200 && xhr.readyState === 4) {
            console.table(JSON.parse(xhr.response))
        }
    }
xhr.onerror = xhr.ontimeout = function(){
    console.log("Error Happened");
}
    xhr.send()
    console.log(xhr);
}
get()