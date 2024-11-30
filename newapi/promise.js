// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

const promise1 = new Promise(function(resolve,reject){
    // Do an async task
    // Database calls , cryptography
    setTimeout(function() {
        console.log("Async task is complete")
        resolve()
    },1000)
})

promise1.then(function () {
    console.log("Promise consumed");
})

const promise2 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        resolve({username : "Harsh" , ID : "Aizen"})
    },1000)
})

promise2.then(function (user) {
    console.log(user)
})

const promise3 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username : "Harsh" , ID : "Aizen"})
        }
        else {
            reject('Error !!!')
        }
    },1000)
})

promise3
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("Either resolved or rejected ."))

const promise4 = new Promise(function (resolve,reject) {
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username : "JavaScript" , ID : "js"})
        }
        else {
            reject('Error !!!')
        }
    },1000)
})

async function consumepromise4() {
    try {
        const response = await promise4
        console.log(response);
    } catch (error) {
        console.log("Error in js haha lol")
    }
}

consumepromise4()

// async function getusers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     } 
//     catch (error) {
//         console.log("E : ",error)
//     }
// }

// getusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log("Error !!!"))