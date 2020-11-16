class Division {
    constructor(x,y,w,h){
        var options = {
             'restitution':0.8,
             'friction':1.0,
             'density':1.0 
        }
        this.body = Body.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.postion;
        rectMode(CENTER);
        fill("white")
        rect(pos.x, pos.y, 480, 50);
    }
}