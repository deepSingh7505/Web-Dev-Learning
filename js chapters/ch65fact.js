let arr=[1,2,3,44,5,6,7,8,9,10]

// using reduce
// function fact(a,b){
// return a*b
// }
// console.log(n.reduce(fact)
// )

//for loop
// let p=1;
// n.forEach(element => {
//    p *=element 
// });
// console.log(p)


// using recursion
// function fact(a)
// {
//     while(a>=1)
//         return a*fact(a-1)
//     return 1
// }
// console.log(fact(6))




// let it = Array.from(Array(11).keys())
// console.log(it.slice(1,))


// let ar=Array.from(Array(k+1).keys())

console.log(Array.from(Array(110).keys()).slice(1).reduce((a,b)=>a*b))
