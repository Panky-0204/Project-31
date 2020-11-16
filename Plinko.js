class Plinko {
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0 
       } 
       this.body = Bodies.circle(x, y, 10, options);
       World.add(world, this.body);  
    }
    display(){
        var pos = this.body.postion;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0, 0, 10, 10);
    }
}