class BaseClass
{
    constructor(x,y)
    {
       var options = {isStatic : false, density : 1.5, restitution : 0.3, density : 5.1}
       this.body = Matter.Bodies.circle(x, y, 15, options);
       this.radius = 150;

       World.add(world, this.body);
    }

    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 70, 70);
        pop();
    }
}