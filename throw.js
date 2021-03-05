class Throw{
   constructor(bodyA,bodyB){
       var options = {
           bodyA:boadyA,
           pointB:pointB,
           stiffness:0.01,
           length:10
       }
       this.pointB=pointB;
       this.throw = Constraint.create(options);
       World.add(world,tthis.throw);
   }
    
   fly(){
       this.throw.bodyA=null;
   }

   launch(){
       this.throw.bodyA=bodyA;
   }
    
     display(){

     }
    }