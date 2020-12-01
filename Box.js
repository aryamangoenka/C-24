class Box {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true
          
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
     Matter.World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      stroke("green")
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
      
    }
  }

  class ground {
    constructor(x, y, width, height) {
      var options = {
          'isStatic':true
          
      }
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
     Matter.World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
  fill("brown")
      rectMode(CENTER)
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  }
  