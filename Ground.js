class Ground {
    constructor(x,y){
        var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0 
        }
        this.body = Body.rectangle(x, y, 480, 20, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER);
        fill("brown")
        rect(pos.x, pos.y, 480, 50);
    }
}