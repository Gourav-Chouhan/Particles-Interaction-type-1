//written by Gourav Chouhan

class Particle {
  constructor() {
    this.x = Math.random() * cvs.width;
    this.y = Math.random() * cvs.height;
    this.threshold = globalThreshold;
    this.r = 4;
    this.color = "rgba(255,255,255, 0.4)";
    this.vx = Math.random() * 2 - 1;
    this.vx =
      Math.abs(this.vx) < 0.2
        ? this.vx + (0.1 * this.vx) / Math.abs(this.vx)
        : this.vx;
    this.vy = Math.random() * 2 - 1;
    this.vy =
      Math.abs(this.vy) < 0.2
        ? this.vy + (0.1 * this.vy) / Math.abs(this.vy)
        : this.vy;
    this.chaos = 0.007;
  }

  show() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.closePath();
  }

  move() {
    // this.x += Math.random() * 4 - 2;
    // this.y += Math.random() * 4 - 2;
    if (Math.random() < this.chaos) {
      Math.random() > 0.5 ? (this.vx *= -1) : (this.vy *= -1);
      l;
    }
    this.x += this.vx;
    this.y += this.vy;

    // version one: particles bounces back upon hitting the wall
    // if (this.x > cvs.width || this.x < 0) this.vx *= -1;
    // if (this.y > cvs.height || this.y < 0) this.vy *= -1;

    // versoin two: particels teleport from other side upon hitting the wall
    if (this.x > cvs.width) this.x = 2;
    if (this.x < 0) this.x = cvs.width;
    if (this.y < 0) this.y = cvs.height;
    if (this.y > cvs.height) this.y = 2;
  }

  drawLine(particleArray) {
    for (let i = 0; i < particleArray.length; i++) {
      ctx.strokeStyle = "#62ff0055";
      ctx.lineWidth = 0.5;
      if (
        Math.abs(this.x - particleArray[i].x) < this.threshold &&
        Math.abs(this.y - particleArray[i].y) < this.threshold
      ) {
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(particleArray[i].x, particleArray[i].y);
        ctx.stroke();
        // if (Math.random() > 0.15) {
        //   this.vx *= -1;
        // } else {
        //   this.vy *= -1;
        // }
      }
    }
  }

  moveWithMouse(x, y) {
    this.x = x;
    this.y = y;
  }
}
