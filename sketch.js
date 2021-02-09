
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var groundSprite, ground;
var dustbinBox;
var paper, paperSprite, paperImage;

function setup() 
{
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	groundSprite = createSprite(400, 400, 1000, 10);
	groundSprite.shapeColor = "red";

	var ground_options = {isStatic : true}
	ground = Bodies.rectangle(400, 400, 1000, 10, ground_options);
	World.add(world, ground);
	
	dustbinBox = new dustbin(650, 330);

	paperSprite = createSprite(100, 300, 15, 15);
	paper = new crumpledpaper(100, 300);
	
	Engine.run(engine);  
}


function draw() 
{
    rectMode(CENTER);
    background("brown");

    paperSprite.x = paper.body.x;
	paperSprite.y = paper.body.y;

    dustbinBox.display();
	paper.display();

	keyPressed();
    drawSprites(); 
}

function keyPressed()
{
	if(keyCode === UP_ARROW)
    {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:12, y:-12});
	}
}