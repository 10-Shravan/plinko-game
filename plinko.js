class Plinko{
    constructor(x,y,radius){
        var options={
            restitution:0.04
        }
        this.r=radius;
        this.body=Bodies.circle(x,y,this.r,options)
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        circle(this.body.x,this.body.y);
    }
}