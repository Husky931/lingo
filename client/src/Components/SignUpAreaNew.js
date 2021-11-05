import React, { useEffect, useRef } from "react";

export default function SignUpAreaNew() {
  var canvasCtx;
  var canvasWidth;
  var canvasHeight;
  var canvas = useRef();

  window.requestAnimationFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (cb) {
        window.setTimeout(cb, 1000 / 60);
      }
    );
  })();

  useEffect(() => {
    if (!canvas.current) return;
    canvasCtx = canvas.current.getContext("2d");
    canvas.current.width = canvasWidth = window.innerWidth;
    canvas.current.height = canvasHeight = window.innerHeight;

    canvas.current.addEventListener("mousemove", function (e) {
      e.preventDefault();
      mouse.x = e.pageX - canvas.current.offsetLeft;
      mouse.y = e.pageY - canvas.current.offsetTop;
    });

    canvas.current.addEventListener("mousedown", function (e) {
      e.preventDefault();
      mouse.down = true;
    });

    canvas.current.addEventListener("mouseup", function (e) {
      e.preventDefault();
      mouse.down = false;
    });

    var fireworks = [];
    var particles = [];
    var mouse = { down: false, x: 0, y: 0 };
    var currentHue = 120;
    var clickLimiterTotal = 10;
    var clickLimiterTick = 0;
    var timerTotal = 80;
    var timerTick = 0;

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }
    function calculateDistance(p1x, p1y, p2x, p2y) {
      var xDistance = p1x - p2x;
      var yDistance = p1y - p2y;
      return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
    }
    function Firework(sx, sy, tx, ty) {
      this.x = this.sx = sx;
      this.y = this.sy = sy;
      this.tx = tx;
      this.ty = ty;
      this.distanceToTarget = calculateDistance(sx, sy, tx, ty);
      this.distanceTraveled = 0;
      this.coordinates = [];
      this.coordinateCount = 3;

      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }

      this.angle = Math.atan2(ty - sy, tx - sx);
      this.speed = 2;
      this.acceleration = 1.03;
      this.brightness = random(50, 80);
      this.targetRadius = 1;
      this.targetDirection = false;
    }

    Firework.prototype.update = function (index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);

      if (!this.targetDirection) {
        if (this.targetRadius < 8) this.targetRadius += 0.15;
        else this.targetDirection = true;
      } else {
        if (this.targetRadius > 1) this.targetRadius -= 0.15;
        else this.targetDirection = false;
      }

      this.speed *= this.acceleration;

      var vx = Math.cos(this.angle) * this.speed;
      var vy = Math.sin(this.angle) * this.speed;
      this.distanceTraveled = calculateDistance(
        this.sx,
        this.sy,
        this.x + vx,
        this.y + vy
      );

      if (this.distanceTraveled >= this.distanceToTarget) {
        createParticles(this.tx, this.ty);
        fireworks.splice(index, 1);
      } else {
        this.x += vx;
        this.y += vy;
      }
    };

    Firework.prototype.draw = function () {
      var lastCoordinate = this.coordinates[this.coordinates.length - 1];

      canvasCtx.beginPath();
      canvasCtx.moveTo(lastCoordinate[0], lastCoordinate[1]);
      canvasCtx.lineTo(this.x, this.y);
      canvasCtx.strokeStyle =
        "hsl(" + currentHue + ",100%," + this.brightness + "%)";
      canvasCtx.stroke();

      canvasCtx.beginPath();
      canvasCtx.arc(this.tx, this.ty, this.targetRadius, 0, Math.PI * 2);
      canvasCtx.stroke();
    };

    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.coordinates = [];
      this.coordinateCount = 5;

      while (this.coordinateCount--) {
        this.coordinates.push([this.x, this.y]);
      }

      this.angle = random(0, Math.PI * 2);
      this.speed = random(1, 10);
      this.friction = 0.95;
      this.gravity = 1;
      this.hue = random(currentHue - 20, currentHue + 20);
      this.brightness = random(50, 80);
      this.alpha = 1;
      this.decay = random(0.01, 0.03);
    }

    Particle.prototype.update = function (index) {
      this.coordinates.pop();
      this.coordinates.unshift([this.x, this.y]);
      this.speed *= this.friction;
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed + this.gravity;
      this.alpha -= this.decay;
      if (this.alpha <= this.decay) {
        particles.splice(index, 1);
      }
    };

    Particle.prototype.draw = function () {
      var lastCoordinate = this.coordinates[this.coordinates.length - 1];

      canvasCtx.beginPath();
      canvasCtx.moveTo(lastCoordinate[0], lastCoordinate[1]);
      canvasCtx.lineTo(this.x, this.y);
      canvasCtx.strokeStyle =
        "hsla(" +
        this.hue +
        ",100%," +
        this.brightness +
        "%," +
        this.alpha +
        ")";
      canvasCtx.stroke();
    };

    function createParticles(x, y) {
      var particleCount = 30;
      while (particleCount--) {
        particles.push(new Particle(x, y));
      }
    }

    function gameLoop() {
      requestAnimationFrame(gameLoop);
      currentHue += 0.5;
      canvasCtx.globalCompositeOperation = "destination-out";
      canvasCtx.fillStyle = "rgba(0, 0, 0, 0.5)";
      canvasCtx.fillRect(0, 0, canvasWidth, canvasHeight);
      canvasCtx.globalCompositeOperation = "lighter";

      var i = fireworks.length;
      while (i--) {
        fireworks[i].draw();
        fireworks[i].update(i);
      }
      var i = particles.length;
      while (i--) {
        particles[i].draw();
        particles[i].update(i);
      }
      if (timerTick >= timerTotal) {
        if (!mouse.down) {
          fireworks.push(
            new Firework(
              canvasWidth / 2,
              canvasHeight,
              random(0, canvasWidth),
              random(0, canvasHeight / 2)
            )
          );
          timerTick = 0;
        }
      } else {
        timerTick++;
      }
      if (clickLimiterTick >= clickLimiterTotal) {
        if (mouse.down) {
          fireworks.push(
            new Firework(canvasWidth / 2, canvasHeight, mouse.x, mouse.y)
          );
          clickLimiterTick = 0;
        }
      } else {
        clickLimiterTick++;
      }
    }
    window.onload = gameLoop();
  });

  return (
    <div className="form-container">
      <h2 className="form-header">Get Early Access</h2>
      <p className="form-text">
        Join the appointment list and experience Lingo3D for the first time
      </p>
      <form id="main" className="form-register">
        <input className="input" placeholder="EMAIL or PHONE NUMBER" />
        <button className="cta">Reserve</button>
      </form>
      <canvas id="stage" ref={canvas}></canvas>
    </div>
  );
}
