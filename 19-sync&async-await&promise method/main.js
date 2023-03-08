// The data that comes from the user---------------------------
let data = {
    users: [
        {
            id: 1,
            user: "jack",
            pass: "123456"
        },

        {
            id: 2,
            user: "mani",
            pass: "abcdef"
        }
    ]
}
let btn = document.querySelector("button")

//create---------------------------------
let create = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            data.users.push({ id: 3, user: "mmd", pass: "m12m34m" })
            let status = 200
            if (status === 200) {
                resolve()
            } else {
                reject("Error Happened")
            }
        }, 2000);

    })
}

//read---------------------------------
let read = () => {
    setTimeout(() => {
        console.table(data.users)
    }, 1000);
}

//remove---------------------------------
let remove = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            data.users.shift()
            resolve()
        }, 1500);
    })
}

//------------------------------------

async function process(){
    await create()
    await remove()
    read()
}

btn.addEventListener("click", process)

