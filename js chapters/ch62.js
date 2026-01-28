function give(a,b,c)
{
   let n=Math.floor(Math.random()*3)
    if(n==0)
        return a
    else if(n==1)
        return b
    else if(n==2)
        return c
}
let k=0;
while(k<100)
{
    console.log("Your Business name :"+ give("Crazy","Amazing","Fire") +give("Engine","Foods","Garments")+ give("Bros","Limited","Hub"));
    k++
}