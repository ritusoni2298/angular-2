class graph{
/*traditional way
private x: number;
private y: number;
constructor(x?: number, y?: number){
    this.x=x;
    this.y=y;
    
}*/

// another way

//note- constructor should have a body {}
 constructor(private x:number, private y:number){
    // the ts compiler wll initialize the field 
    //with the same name with the value of this argument
 }
// by making function get and set
 getX(){
     return this.x;
 }

 setX(value){
     if(value<0){
         throw new Error('value can\'t be less than 0');
     }
     this.x=value;
 }
 
 //by making properties
 get X(){
     return this.x;
 }

 set X(value){
    if(value<0){
        throw new Error('value can\'t be less than 0');
    }
    this.x=value;
 }

 draw(){
     console.log('x:'+this.x+'  y:'+this.y);
 }
}

let point=new graph(2,3);
point.draw(); 
let c= point.getX();
console.log(c);
point.setX(15);

let x=point.X;

point.X=16;
point.draw();


//problem: we can't access the x value from outside and access it
// solution make a getX function in class and setX function to change the value 
//this is called as PROPERTIES

