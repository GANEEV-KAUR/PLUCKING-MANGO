class Stone{
    constructor(x,y,){

     var options = {
    'density' :1.2,
    'friction' : 1,
    'restitution' : 0,
        }
        
        this.image=loadImage("images/stone.png")
    this.body = Bodies.rectangle(200,250,50,50);
      World.add(world,this.body);
      }

       display(){

        imageMode(CENTER);
      image(this.image,this.body.position.x,this.body.position.y,80,80);
       }   
    
}