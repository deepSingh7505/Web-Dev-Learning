console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 1")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am  1")
            resolve("Harry 1")
        },5620 );
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, );
    }
})

let prom3 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 3")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 3")
            resolve("Harry 3")
        }, );
    }
})
let prom4 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 4")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 4")
            resolve("Harry 4")
        }, );
    }
})

 let prom5 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 5")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 5")
            resolve("Harry 5")
        }, );
    }
})
let p3 = Promise.allSettled([prom1, prom2, prom3, prom4, prom5])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})