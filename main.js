let cvs = document.getElementById("cvs");
cvs.width = window.innerWidth;
cvs.height = window.innerHeight;
let globalThreshold = 200;
let ctx = cvs.getContext("2d");

//constants

const backgroundColor = "rgba(0,0,0,1)";

/////////

function clearCanvas() {
  ctx.fillStyle = backgroundColor;
  ctx.fillRect(0, 0, cvs.width, cvs.height);
}

clearCanvas();

//classes


let particles = [];

let population = 30;
for (let i = 0; i < population; i++) {
  particles[i] = new Particle();
}

particles[population] = new Particle();
particles[population].threshold *= 1.5;
particles[population].r *= 2;
cvs.addEventListener("mousemove", (e) => {
  particles[population].moveWithMouse(e.clientX, e.clientY);
});

setInterval(() => {
  clearCanvas();
  for (let i = 0; i < population; i++) {
    particles[i].threshold = globalThreshold;
    particles[i].show();
    particles[i].move();
    particles[i].drawLine(particles);
  }
  particles[population].show();
  particles[population].drawLine(particles);
}, 1);

let slider = document.getElementById("slider");

slider.oninput = function () {
  globalThreshold = this.value;
};
