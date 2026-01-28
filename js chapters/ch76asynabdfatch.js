function getdata(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
              resolve(324)              
            },2000)
        });
    }
function timepass(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
              reject("failed")              
            },3000)
        });
    }


async function main() {
    

    console.log('i am first');
    console.log('i am second');
    console.log('i am before calling getdata');
    let x=  getdata();
    let y = await timepass().catch((err)=>console.log(err));
   
    console.log('i called data');

    console.log(x)
    console.log(y + " i am  y")
    console.log('i data is printed before me');
}
main()
    