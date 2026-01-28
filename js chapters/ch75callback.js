function prom1 (){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('i am inside');
        resolve("No random number was not supporting you 1");
        console.log('i am also inside');
    }, 2000);  
})
}
function getdata(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
             resolve(324)              
            },2000)
        });
    }
console.log(' i am printing');
let x= prom1();
console.log("i have called");
console.log(x)





// let sc1= document.createElement("div")
// sc1.innerHTML= "i am div create using js"
// document.querySelector(".box").prepend(sc1)
// let sc= document.createElement("span")
// sc.innerHTML= "i am script create using js"
// document.querySelector(".box").prepend(sc)
// document.queryselector('.box')