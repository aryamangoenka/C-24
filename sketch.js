


var engine,world,box1,box2,box3,box4,box5,ground1,pig1,pig2,log1,bird1;
function setup() {
  createCanvas(1200,400);
  engine=Matter.Engine.create()
  world = engine.world;

  box1 = new Box(700,320,50,50);
  box2=new Box(930,320,50,50);
  box3 = new Box(700,240,50,50);
  box4=new Box(930,240,50,50);
  box5=new Box(810,150,50,50)
  ground1=new ground(600,350,1200,20);
  pig1=new pig(810,320,50,50);
  pig2=new pig(810,220,50,50)
  log1=new log(810,260,300,PI)
  bird1=new bird(810,260,50,50)
}
  function draw() 
  {
    background(0)
    Matter.Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird1.display();
    ground1.display();
  
    
  }
  
