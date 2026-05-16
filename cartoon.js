// Get canvas and context
const canvas = document.getElementById("cartoonCanvas");
const ctx = canvas.getContext("2d");

// Draw sky background
ctx.fillStyle = "skyblue";
ctx.fillRect(0, 0, 800, 500);

// Draw sun
ctx.beginPath();
ctx.arc(680, 80, 50, 0, Math.PI * 2);
ctx.fillStyle = "yellow";
ctx.fill();
ctx.stroke();

// Draw ground
ctx.fillStyle = "lightgreen";
ctx.fillRect(0, 360, 800, 140);

// Draw house body
ctx.fillStyle = "burlywood";
ctx.fillRect(260, 220, 250, 180);

// Draw roof
ctx.beginPath();
ctx.moveTo(240, 220);
ctx.lineTo(385, 120);
ctx.lineTo(530, 220);
ctx.closePath();
ctx.fillStyle = "brown";
ctx.fill();
ctx.stroke();

// Draw door
ctx.fillStyle = "saddlebrown";
ctx.fillRect(360, 300, 60, 100);

// Draw windows
ctx.fillStyle = "lightcyan";
ctx.fillRect(290, 250, 50, 50);
ctx.fillRect(440, 250, 50, 50);

// Draw fence using loop and translate
for (let i = 0; i < 8; i++) {
  ctx.save();
  ctx.translate(40 + i * 70, 380);

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 20, 70);

  ctx.restore();
}

// Draw caption text
ctx.font = "28px Arial";
ctx.fillStyle = "black";
ctx.fillText("Welcome to my cartoon house!", 230, 470);
