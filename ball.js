class Ball {
    constructor(x, y,r) {
      var options = {
        'density':1,
        'friction': 5,
        'restitution':0.3
      };

      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      World.add(world, this.body);
    };
    display() { var ball=this.body.position; push() 
        translate(ball.x, ball.y); 
        rectMode(CENTER) 
        strokeWeight(4);
         stroke("black"); 
        fill("darkblue");
         ellipse(0,0,this.r, this.r);
          pop() }
  };
  