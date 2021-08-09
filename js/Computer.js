class Computer {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

  

    World.add(world, this.body);

    this.life1 = "white";
    this.life2 = "white";
    this.life3 = "white";
  }

  life(){
    push();
    textSize(20);
    fill("blue");
    text("Computer",930,40);

    fill(this.life1);
    rect(870,50,70,30);
    fill(this.life2);
    rect(940,50,70,30);
    fill(this.life3);
    rect(1010,50,70,30);
    pop();
  }
 
  
  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
