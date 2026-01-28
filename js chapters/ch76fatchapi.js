const link = "https://dummyjson.com/products";
const btn=document.querySelector("#btn")
const info=document.querySelector("#info")
let a = 0;
const fact = async()=>{
    let response =await fetch(link);
    let data = await response.json();
   info.innerText=info.innerText+data.products[a].description;
   a++;
} 
btn.addEventListener("click",fact);
















// const URL = "https://cat-fact.herokuapp.com/facts";
// const getFacts = async () => {
// console.log("getting data .....");
// let response = await fetch(URL);
// console.log(response); //JSON format
// let data = await response.json();
// console.log(data);
// };