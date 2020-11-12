class dustbin{
    constructor(x,y){
        this.x=x;
        this.y=y;
        this.width=200;
        this.height=100;
        this.wallthickness=20;
        this.angle=0;
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.wallthickness,{isStatic:true});
        this.leftwallBody=Bodies.rectangle(this.x-this.width/2,this.y-this.width/2,this.wallthickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.leftwallBody,this.angle);
        this.rightwallBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.wallthickness,this.height,{isStatic:true});
        Matter.Body.setAngle(this.rightwallBody,-1*this.angle);
        World.add(world,this.bottomBody);
        World.add(world,this.leftwallBody);
        World.add(world,this.rightwallBody);
    }
keyPressed() {   
    if (keyCode===UP_ARROW) {
        Matter.Body.applyForce(paperObject.body, paperObject.body.position,{x:85, y:-85});
    }
}
display(){
    var posBottom=this.bottomBody.position;
    var posLeft=this.leftwallBody.position;
    var posRight=this.rightwallBody.position;
    push();
    translate(posLeft.x,posLeft.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(-1*this.angle);
    rect(0,0,this.wallthickness,this.height);
    pop();
    
    push();
    translate(posBottom.x,posBottom.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rect(0,0,this.width,this.wallthickness);
    
    pop();
    push();
    translate(posRight.x,posRight.y);
    rectMode(CENTER);
    angleMode(RADIANS);
    fill(255);
    stroke(255);
    rotate(-1*this.angle);
    rect(0,0,this.wallthickness,this.height);
    pop();
}
}