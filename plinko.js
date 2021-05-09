class Plinko{
    constructor(x, y,radius) {
        var options = {
            isStatic:true,
            'restitution':0.3,
            'friction':5.0,
            'density':1.9,
        }
        this.body = Bodies.circle(x, y,radius,options);
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        fill("white")
        ellipse(0,0,10);
        pop();
      }
}