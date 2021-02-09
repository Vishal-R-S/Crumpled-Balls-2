class dustbin
{
    constructor(x, y)
    {
       var options = {isStatic : true}
       this.body = Bodies.rectangle(x, y, 10, 100, options);
       this.width = 10;
       this.height = 100;
       this.image = loadImage("sprites/dustbin.png");
       World.add(world, this.body);
    }

    display()
    {
       var pos = this.body.position;
       imageMode(CENTER);
       image(this.image, pos.x, pos.y, 130, 130);
    }
}