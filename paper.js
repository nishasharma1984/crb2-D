class paper {
constructor(x,y,r){

var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}

this.body=Bodies.circle(this.x,this.y,this.r/2,options);
this.x=x;
this.y=y;
this.r=r;
this.image = loadImage("sprites/base.png");

World.add(world,this.body);

}
display(){
var paperPos = this.body.position;
push();
translate(this.paperPos.position.x, this.paperPos.position.y);
rotate(angle);
imageMode(CENTER);
image(this.image, this.x, this.y, this.width, this.height);
pop();
}

}