const canvas = document.getElementById("cartoonCanvas");
const ctx = canvas.getContext("2d");

// Background sky
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 800, 500);

// Sun
ctx.beginPath();
ctx.arc(680, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.strokeStyle = "orange";
ctx.lineWidth = 4;
ctx.stroke();

// Ground
ctx.fillStyle = "lightgreen";
ctx.fillRect(0, 360, 800, 140);

// House body
ctx.fillStyle = "burlywood";
ctx.fillRect(260, 220, 250, 180);
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.strokeRect(260, 220, 250, 180);

// Roof
ctx.beginPath();
ctx.moveTo(240, 220);
ctx.lineTo(385, 120);
ctx.lineTo(530, 220);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();
ctx.strokeStyle = "black";
ctx.stroke();

// Door
ctx.fillStyle = "saddlebrown";
ctx.fillRect(360, 300, 60, 100);
ctx.strokeRect(360, 300, 60, 100);

// Door knob
ctx.beginPath();
ctx.arc(410, 350, 5, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();

// Left window
ctx.fillStyle = "lightcyan";
ctx.fillRect(290, 250, 50, 50);
ctx.strokeRect(290, 250, 50, 50);

// Right window
ctx.fillStyle = "lightcyan";
ctx.fillRect(440, 250, 50, 50);
ctx.strokeRect(440, 250, 50, 50);

// Window lines
ctx.beginPath();
ctx.moveTo(315, 250);
ctx.lineTo(315, 300);
ctx.moveTo(290, 275);
ctx.lineTo(340, 275);
ctx.moveTo(465, 250);
ctx.lineTo(465, 300);
ctx.moveTo(440, 275);
ctx.lineTo(490, 275);
ctx.stroke();

// Fence using for loop and translate
for (let i = 0; i < 8; i++) {
  ctx.save();
  ctx.translate(40 + i * 70, 380);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 20, 70);
  ctx.strokeStyle = "black";
  ctx.strokeRect(0, 0, 20, 70);

  ctx.restore();
}

// Fence rails
ctx.fillStyle = "white";
ctx.fillRect(30, 400, 560, 15);
ctx.fillRect(30, 430, 560, 15);
ctx.strokeStyle = "black";
ctx.strokeRect(30, 400, 560, 15);
ctx.strokeRect(30, 430, 560, 15);

// Caption text on canvas
ctx.font = "28px Arial";
ctx.fillStyle = "black";
ctx.fillText("Welcome to my cartoon house!", 230, 470);
