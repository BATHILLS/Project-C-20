var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height/2);
  car.velocityX = speed;
  wall.shapeColour = (80, 80, 155);

  
}

function draw() {
  background(255,255,255); 
  console.log(speed);
  
  car.collide(wall);

  if(car.x-wall.x < (car.width+wall.width)/2)
  {
    var deformation = (0.5 * weight * speed * speed)/22509;
    //car.velocityX = 0;
    if(deformation>180)
    {
      car.shapeColour = ("blue");
    }
    
    if(deformation>180 && deformation<100)
    {
      car.shapeColour = ("red");
    }

    if(deformation<100)
    {
       car.shapeColour = ("green");
    }

  }
  drawSprites();
}