class carinfo{
    constructor(brand,milage){
        console.log("car of brand =", brand, "is created");
        this.carbrand=brand; 
        this.milage=milage;       
    }
    changecarbrand(newbrand){
        console.log("changing car brand.... ");
        this.carbrand=newbrand;
        this.age=20;
        console.log(this,"brand name is =",this.carbrand);
        console.log("brand age is =",this.age);
    }
    autobrand(){
        this.carbrand="redbull"
    }
}
let f1=new carinfo("audi",100);

