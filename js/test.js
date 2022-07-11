var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var radioBalon = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paletaHeight = 10;
var paletaWidth = 75;
var paletaX = (canvas.width-paletaWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function dibujarPelota() {
    context.beginPath();
    context.arc(x, y,  radioBalon, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}
function dibujarPaleta() {
    context.beginPath();
    context.rect(paletaX, canvas.height-paletaHeight, paletaWidth, paletaHeight);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function dibujar() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    dibujarPelota();
    dibujarPaleta();
    
    if(x + dx > canvas.width- radioBalon || x + dx <  radioBalon) {
        dx = -dx;
    }
    if(y + dy <  radioBalon) {
        dy = -dy;
    }
    else if(y + dy > canvas.height- radioBalon) {
        if(x > paletaX && x < paletaX + paletaWidth) {
            dy = -dy;
        }
        else {
            alert("perdiste");
            document.location.reload();
        }
      
    }
    
    if(rightPressed &&  paletaX < canvas.width-paletaWidth) {
        paletaX += 7;
    }
    else if(leftPressed &&  paletaX > 0) {
        paletaX -= 7;
    }
    
    x += dx;
    y += dy;
}

setInterval(dibujar, 10);