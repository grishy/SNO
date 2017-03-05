'use strict'
var CIRCLE = Math.PI * 2;
var degreesToRadians = (degrees) => degrees * Math.PI / 180;
var fastCeil = x => x == (x=x|0) ? x : x+1;

var level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var WORLD = {
    sizeBlock: 24,
    playerRadius: 6
}

class Control {
    constructor() {
        this.codes = {
            37: 'left',
            39: 'right',
            38: 'forward',
            40: 'backward'
        };
        this.status = {
            'left': false,
            'right': false,
            'forward': false,
            'backward': false
        };
        document.addEventListener('keydown', this.onKey.bind(this, true), false);
        document.addEventListener('keyup', this.onKey.bind(this, false), false);
    }

    onKey(val, e) {
        var state = this.codes[e.keyCode];
        if (typeof state === 'undefined') return;
        this.status[state] = val;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
    }
}

class Player {

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = 3.5;
    }

    walk(distance) {
        var dx = Math.cos(this.direction) * distance;
        var dy = Math.sin(this.direction) * distance;

        var radiusPlaterInMap = WORLD.playerRadius / WORLD.sizeBlock;
        var collisionX = dx > 0 ? radiusPlaterInMap : -radiusPlaterInMap;
        var collisionY = dy > 0 ? radiusPlaterInMap : -radiusPlaterInMap;

        if (map.collision(this.x + collisionX, this.y) <= 0) this.x += dx;
        if (map.collision(this.x, this.y + collisionY) <= 0) this.y += dy;
    }

    rotate(angle) {
        this.direction = (this.direction + angle) % (CIRCLE);
    }

    update(seconds) {
        if (controls.status.left) this.rotate(-Math.PI * seconds * 0.5);
        if (controls.status.right) this.rotate(Math.PI * seconds * 0.5);
        if (controls.status.forward) this.walk(this.speed * seconds);
        if (controls.status.backward) this.walk(-this.speed * seconds);
    }
}

class Map {
    constructor() {
        this.width = level[0].length;
        this.height = level.length;
    }

    castRay(angle, range) {
        var sin = Math.sin(angle);
        var cos = Math.cos(angle);
        var tan = sin / cos;
        var cot = cos / sin;
        var cosNegative = cos < 0;
        var sinNegative = sin < 0;

        var currentX = player.x;
        var currentY = player.y;
        var hit = [];

        var distance = 0;

        while (distance < range) {
            // Collision with the nearest axis X
            var dxx = cosNegative ?
                fastCeil(currentX - 1) - currentX :
                ((currentX + 1) << 0) - currentX; // Math.floor
            var dxy = dxx * tan;
            var lengthX2 = dxx * dxx + dxy * dxy;
            // Collision with the nearest axis Y
            var dyx = sinNegative ?
                fastCeil(currentY - 1) - currentY :
                ((currentY + 1) << 0) - currentY; // Math.floor
            var dyy = dyx * cot;
            var lengthY2 = dyx * dyx + dyy * dyy;

            var collision = 0;

            if (lengthX2 < lengthY2) {
                currentX = currentX + dxx;
                currentY = currentY + dxy;
                distance = distance + Math.sqrt(lengthX2);

                var shift = cosNegative ? 1 : 0;
                collision = this.collision(currentX - shift, currentY);
            } else {
                currentX = currentX + dyy;
                currentY = currentY + dyx;
                distance = distance + Math.sqrt(lengthY2);

                var shift = sinNegative ? 1 : 0;
                collision = this.collision(currentX, currentY - shift);
            }

            if (collision > 0) break;

        }
        return {
            x: currentX,
            y: currentY
        };
    }

    collision(x, y) {
        x = x << 0; // Math.floor
        y = y << 0; // Math.floor
        if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return -1;
        return level[x][y];
    }
}

class Camera {
    constructor() {
        this.width = map.width * WORLD.sizeBlock;
        this.height = map.height * WORLD.sizeBlock;
        this.focalLength = 0.8;
        this.resolution = 250;
        this.rayLength = 40;
    }

    drawRay(startX, startY, endX, endY, color) {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.closePath();
        ctx.stroke();
    }

    renderRays() {
        for (var column = 0; column < this.resolution; column++) {
            // -0.5 < x < 0.5
            var x = column / this.resolution - 0.5;
            var angle = player.direction + Math.atan2(x, this.focalLength);

            var ray = map.castRay(angle, this.rayLength);
            this.drawRay(
                player.x * WORLD.sizeBlock,
                player.y * WORLD.sizeBlock,
                ray.x * WORLD.sizeBlock,
                ray.y * WORLD.sizeBlock,
                "rgba(33, 243, 100, .8)"
            )
        }
    }

    renderPlayer() {
        var x = player.x * WORLD.sizeBlock;
        var y = player.y * WORLD.sizeBlock;

        ctx.fillStyle = "#F4511E";
        ctx.beginPath();
        ctx.arc(x, y, WORLD.playerRadius, 0, CIRCLE, false);
        ctx.fill();

        var lineEndX = x + Math.cos(player.direction) * 40;
        var lineEndY = y + Math.sin(player.direction) * 40;
        this.drawRay(x, y, lineEndX, lineEndY, '#E64A19')
    }

    renderMap() {
        for (var y = 0; y < map.width; y++) {
            for (var x = 0; x < map.height; x++) {
                var wall = level[x][y];

                ctx.fillStyle = "#BDBDBD";
                if (wall > 0) {
                    ctx.fillRect(
                        x * WORLD.sizeBlock, // X
                        y * WORLD.sizeBlock, // Y
                        WORLD.sizeBlock, WORLD.sizeBlock // Width, Height
                    );
                }
            }
        }
    }


    render(seconds) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.renderMap();
        this.renderRays();
        this.renderPlayer();
    }
}

class GameLoop {
    constructor() {
        this.frame = this.frame.bind(this);
        this.lastTime = 0;
        this.callback = function() {};
    }

    start(callback) {
        this.callback = callback;
        requestAnimationFrame(this.frame);
    }
    frame(time) {
        var seconds = (time - this.lastTime) / 1000;
        this.lastTime = time;
        this.callback(seconds);
        requestAnimationFrame(this.frame);
    };
}

var canvas = document.getElementById("display");
var ctx = canvas.getContext("2d");
var map = new Map();
var player = new Player(15, 10, degreesToRadians(90));
var сamera = new Camera();
var controls = new Control();

canvas.width = сamera.width;
canvas.height = сamera.height;

var loop = new GameLoop();

window.addEventListener("load", loop.start(function(seconds) {
    player.update(seconds);
    сamera.render();
}));
