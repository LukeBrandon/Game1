const map = {
    height: 1000,
    width: 1000
};
const canvas = document.getElementById("myCanvas");
canvas.width = map.width;
canvas.height = map.height;
var ctx = canvas.getContext("2d");
ctx.textAlign = "center";
const sw = window.innerWidth;
const sh = window.innerHeight;
var img = new Image();
canvas.style.top = -(map.height - sh) + "px";
var fallpy = new Image();
fallpy.src = "http://vignette2.wikia.nocookie.net/fantendo/images/4/4d/Flappy_Bird_sprite.png/revision/latest?cb=20140219124056";
class Game {
}
class Sprite {
    constructor() {
        xPos = 0;
        yPos = 0;
    }
}
//# sourceMappingURL=app.js.map