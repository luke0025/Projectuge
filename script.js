// codes for dogs - basically lines formed into a box, into a dog's head.
var c = document.getElementById("dog");
var ctx = c.getContext("2d");
ctx.fillStyle = "red"; 
// ctx.fillRect(column, row, width, height)
ctx.fillRect(230, 220, 170, 100);
ctx.fillRect(150, 120, 200, 200);
// Eyes
ctx.clearRect(260, 150, 20, 20);
ctx.clearRect(210, 150, 20, 20);
// Mouth
ctx.clearRect(170, 270, 80, 10);
// Ears
ctx.fillStyle = "darkblue";
ctx.fillRect(350, 130, 10, 90);
ctx.fillRect(130, 130, 30, 100);
// nose
ctx.fillRect(390, 220, 10, 10);



// codes for stars - made the same way as the dog, but into stars
var c = document.getElementById('stars').getContext('2d');
function rgba(r,g,b,a) {
    return 'rgba('+[r,g,b,a].join(',')+')';
}

function rgb(r,g,b,a) {
    return 'rgb('+[r,g,b].join(',')+')';
}

var Counter = 0;
var Execute = setInterval(function() { 
    Counter = 0; 
}, 10000);

document.stopExecutionMonitor = function() { 
clearInterval(Execute); 
}

c.fillStyle = 'hsl(' + 360 * Math.random() + ', 80%, 80%)'; // random generated color
var n = 200;
var size = 10;
var w = c.canvas.width;
var h = c.canvas.height;
// loop to make multiple stars
for (var i = 0; i < n; i = i + 1) {
  Counter++; 
  var x = (w - size) * Math.random(); 
  var y = (h - size) * Math.random();
  fillStar(x, y, size);
}
//random generated locations
function fillStar(x, y, s) {
  Counter++; 
  c.beginPath();
  c.moveTo(x, y + s * 0.4);
  c.lineTo(x + s, y + s * 0.4);
  c.lineTo(x + s * 0.15, y + s * 0.9);
  c.lineTo(x + s / 2, y);
  c.lineTo(x + s * 0.85, y + s * 0.9);
  c.lineTo(x, y + s * 0.4);
  c.fill();
}



// codes for tunnel - linse pointing into the center
var c = document.getElementById('tunnel').getContext('2d');
function myFunction(e) {
var x = e.clientX;
var y = e.clientY;
var coor = "Coordinates: (" + x + "," + y + ")";
document.getElementById("tunnel").innerHTML = coor;
}
  
function clearCoor() {
document.getElementById("tunnel").innerHTML = "";
}

var num = 100;
var px = 300;
var py = 250;
var w = c.canvas.width;
var h = c.canvas.height;
// loops for repeating the affect for each sides
for (var i = 0; i < num; i = i + 1) {
  var y = i * h / (num - 1);
  drawLine(w, y, px, py);
  var x = y * w / h;
  drawLine(x, h, px, py);
  drawLine(x, 0, px, py);
  drawLine(0, y, px, py);
}

function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}



// codes to drawings - the same as before, but the lines are pointing towards two edges wile each lines 
// have rng coloring
var c = document.getElementById('drawing').getContext('2d');
var num = 50;
var w = c.canvas.width;
var h = c.canvas.height;

c.lineWidth = 2;
for (var i = 0; i < num; i = i + 1) {
  var x = i * w / (num - 5);
  var y = i * h / (num - 5);
  c.strokeStyle = randomRGBA();
  drawLine(0, y, x, h);
  c.strokeStyle = randomRGBA();
  drawLine(x, 0, w, y);
}

function randomRGBA() {
  var r = randInt(255);
  var g = randInt(255);
  var b = randInt(255);
  var a = Math.random();
  var rgba = [r,g,b,a].join(",");
  return "rgba(" + rgba + ")";
}
function randInt(limit) {
  var x = Math.random() * limit;
  return Math.floor(x);
}
function drawLine(x1, y1, x2, y2) {
  c.beginPath();
  c.moveTo(x1, y1);
  c.lineTo(x2, y2);
  c.stroke();
}
// drawing - center eye basically boxes looped in the center with different angles
var angle = 1;
var num = 10;
c.lineWidth = 3;
c.translate(350, 220);
for (var i = 0; i < num; i = i + 1) {
  c.strokeRect(-75, -75, 140, 140);
  c.rotate(angle);
}

// codes for tree - lines formed into branches and bended to look like a tree
var c = document.getElementById('tree').getContext('2d');
function drawBranch(l, direction) {
c.save();
c.fillRect(-2, 0, 3, -l);
c.translate(0, -l);
  if (l > 4) {
    drawBranch(l * 0.9, -direction);
    c.rotate(0.5 * direction);
    drawBranch(l * 0.8, -direction);
  } else {
    c.fillStyle = "pink"; // coloring only the top branches of the tree
    c.fillRect(-2, -20, 5, 4);
 }
    c.restore();
}
  
c.translate(340, 360);
drawBranch(50, 1);


// overlay
function on1() {
  document.getElementById("cdog").style.display = "block";
}

function off1() {
  document.getElementById("cdog").style.display = "none";
}


function on2() {
  document.getElementById("cstars").style.display = "block";
}

function off2() {
  document.getElementById("cstars").style.display = "none";
}

function on3() {
  document.getElementById("ctunnel").style.display = "block";
}

function off3() {
  document.getElementById("ctunnel").style.display = "none";
}

function on4() {
  document.getElementById("cdrawing").style.display = "block";
}

function off4() {
  document.getElementById("cdrawing").style.display = "none";
}

function on5() {
  document.getElementById("ctree").style.display = "block";
}

function off5() {
  document.getElementById("ctree").style.display = "none";
}