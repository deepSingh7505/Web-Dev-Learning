let a=[1,2,3,4,5,6,7,8,9,10]
let obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10
};

// let k=Object.keys(obj)
// console.log(k)
//object.key reuturn a array 


// different methods
// let arr =[1,2,3,4,5,6]
// let a =["w","f","e","r"]
// let b =[1,2,3,4,5,6]
// console.log(arr.toString())
// console.log(arr.join("or"))
// console.log(arr.concat(a,b))
// arr=arr.concat(a,b)
// console.log(arr)
// let n=arr.splice(3,5)
// console.log(arr)
// console.log(n)
// arr=arr.splice(1,2,345,5467,57,567,456)
// console.log(arr)




// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
//                11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(n);
// a=n.splice(7,2)
// console.log(a)
// splice will work form 7 and cut next 2 


// for(let i=0;i<a.length;i++)
// {
//     const element=a[i]
//     console.log(element)
// }


// foreach loop
// a.forEach((i,e,p) => {
//     console.log(i +"   gap    " + e +"    gap   "+ p)
// });



// map function
// console.log(a.map(e=>e**2))


// filter function 
// console.log(a.filter((e)=>{
//     if(e>7) 
//            return true 

//      return false
//     }))

//     let ar=a.filter((e)=> e==1)
//     console.log(ar)


//reduce method
// function add (a,b,c)
// {
//     return a+b+c
// }
// console.log(a.reduce(add))


// let objs ={
//     a:"hello",
//     b:"i" ,
//     c:"am" ,
//     d:"deep",
//     e:"singh",
//     f:"and" ,
//     g:"you",
// }

// let s="Deep Singh"
// console.log(Array.from(Object.keys(obj)))
// console.log(Array.from(Object.keys(objs)))
// console.log(Array.from(Object.values(obj)))
// console.log(Array.from(Object.values(objs)))
// console.log(Array.from(Object.entries(obj)))
// console.log(Array.from(Object.entries(objs)))