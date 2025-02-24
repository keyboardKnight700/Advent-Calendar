/* const canvas = document.createElement("canvas");
canvas.style.position = "absolute";
canvas.style.zIndex = "-5";
document.body.appendChild(canvas);
const c = canvas.getContext("2d");

function startCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.backgroundColor = "#040A32";
}

startCanvas();

const eventTypes = ["resize", "load"];

eventTypes.forEach((eventType) => {
  window.addEventListener(eventType, startCanvas);
});

class Star {
  starArray = [];
  outerRadius;
  innerRadius;
  cx;
  cy;
  spikes = 5;

  constructor(numberOfStars = 150) {
    this.numberOfStars = numberOfStars;
    this.#fillStarArray();
    this.animateStars();
  }

  #getDistance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;

    return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
  }

  #fillStarArray() {
    for (let i = 0; i < this.numberOfStars; i++) {
      this.outerRadius = Math.trunc(Math.random() * (12 - 5 + 1) + 5);
      this.innerRadius = this.outerRadius / 2.1;
      this.cx =
        Math.random() * (innerWidth - 2 * this.outerRadius) + this.outerRadius;
      this.cy =
        Math.random() * (innerHeight - 2 * this.outerRadius) + this.outerRadius;

      if (i !== 0) {
        for (let j = 0; j < this.starArray.length; j++) {
          if (
            this.#getDistance(
              this.cx,
              this.cy,
              this.starArray[j].cx,
              this.starArray[j].cy
            ) -
              2 * (this.outerRadius + this.innerRadius) <
            0
          ) {
            this.cx =
              Math.random() * (innerWidth - 2 * this.outerRadius) +
              this.outerRadius;
            this.cy =
              Math.random() * (innerHeight - 2 * this.outerRadius) +
              this.outerRadius;

            j = -1;
          }
        }
      }

      this.starArray.push({
        outerRadius: this.outerRadius,
        innerRadius: this.innerRadius,
        cx: this.cx,
        cy: this.cy,
        spikes: this.spikes,
      });
    }
  }

  drawStar() {
    for (let i = 0; i < this.numberOfStars; i++) {
      const star = this.starArray[i];

      let rot = (Math.PI / 2) * 3;
      let x = star.cx;
      let y = star.cy;
      let step = Math.PI / this.spikes;

      c.beginPath();
      c.moveTo(star.cx, star.cy - star.outerRadius);

      for (let i = 0; i < this.spikes; i++) {
        x = star.cx + Math.cos(rot) * star.outerRadius;
        y = star.cy + Math.sin(rot) * star.outerRadius;
        c.lineTo(x, y);
        rot += step;

        x = star.cx + Math.cos(rot) * star.innerRadius;
        y = star.cy + Math.sin(rot) * star.innerRadius;
        c.lineTo(x, y);
        rot += step;
      }

      c.lineTo(star.cx, star.cy - star.outerRadius);
      c.closePath();
      c.fillStyle = "#FEFFDB";
      // c.fillStyle = "black";
      c.fill();
      // c.strokeStyle = "white";
      c.lineWidth = 2;
      // c.stroke();
    }
  }

  animateStars() {
    let randomlySelectedStars = [];
    for (let i = 0; i < this.starArray.length / 2; i++) {
      randomlySelectedStars.push({
        index: Math.trunc(Math.random() * this.starArray.length),
        growing: false,
      });
    }

    const animate = () => {
      randomlySelectedStars.forEach((star) => {
        const currentStar = this.starArray[star.index];

        if (!star.growing) {
          currentStar.outerRadius -= 0.1;
          currentStar.innerRadius -= 0.05;

          if (currentStar.outerRadius <= currentStar.outerRadius / 10) {
            star.growing = true;
          }
        } else {
          currentStar.outerRadius += 0.1;
          currentStar.innerRadius += 0.05;

          if (currentStar.outerRadius >= this.outerRadius) {
            star.growing = false;
            star.index = Math.trunc(Math.random() * this.starArray.length);
          }
        }
      });

      c.clearRect(0, 0, innerWidth, innerHeight);
      this.drawStar();

      requestAnimationFrame(animate);
    };

    animate();
  }
} */

// const newStar = new Star(150);

export default function createStar(count = 100) {
  let starNumber =
    count <= 300 &&
    count > 0 &&
    typeof count === "number" &&
    Number.isInteger(count)
      ? count
      : 100;

  for (let i = 0; i < starNumber; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    document.body.appendChild(star);

    const starWidth = Math.random() * (20 - 5) + 5;
    star.style.width = starWidth + "px";
    star.style.height = starWidth + "px";
    star.style.left =
      Math.random() * (100 - (starWidth / window.innerWidth) * 100) + "vw";
    star.style.top =
      Math.random() * (100 - (starWidth / window.innerHeight) * 100) + "vh";
    star.style.setProperty(
      "--starAnimationDuration",
      `${Math.random() * (5 - 2) + 2}` + "s"
    );

    const color = ["#9FC131", "#9FC131", "#DBF227", "#D6D58E"];

    star.style.backgroundColor =
      color[Math.trunc(Math.random() * color.length)];
  }
}
