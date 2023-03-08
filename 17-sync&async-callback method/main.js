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
    ],
}

//create---------------------------------
let create=(callbackRemove)=> {
    setTimeout(() => {
        data.users.push({ id: 3, user: "mmd", pass: "m12m34m" })
        callbackRemove(read)
    }, 2000);
}

//read---------------------------------
let read=()=> {
    setTimeout(() => {
        console.table(data.users)
    }, 1000);
}

//remove---------------------------------

let remove= (callbackRead)=>{
    setTimeout(() => {
        data.users.shift()
        callbackRead()
    }, 1500);
}


//------------------------------------
create(remove)
