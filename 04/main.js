'use strict'
var CIRCLE = Math.PI * 2;
var degreesToRadians = (degrees) => degrees * Math.PI / 180;
var fastCeil = x => x == (x = x | 0) ? x : x + 1;

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

class Bitmap {
    constructor(src, width, height) {
        this.image = new Image();
        this.image.src = src;
        this.width = width;
        this.height = height;
    }
}


class Control {
    constructor() {
        this.codes = {
            37: 'left',
            39: 'right',
            38: 'forward',
            40: 'backward',
            87: 'forward',
            83: 'backward',
            65: 'leftward',
            68: 'rightward'
        };
        this.status = {
            'left': false,
            'right': false,
            'forward': false,
            'backward': false,
            'leftward': false,
            'rightward': false,
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
        this.rot = Math.PI * 0.5;
        this.speed = 3;
        this.strafe = 2.5;
    }

    walk(distance, angle = 0) {
        var dx = Math.cos(this.direction - angle) * distance;
        var dy = Math.sin(this.direction - angle) * distance;

        var radiusPlaterInMap = WORLD.playerRadius / WORLD.sizeBlock;
        var collisionX = dx > 0 ? radiusPlaterInMap : -radiusPlaterInMap;
        var collisionY = dy > 0 ? radiusPlaterInMap : -radiusPlaterInMap;

        if (map.collision(this.x + collisionX, this.y) <= 0) this.x += dx;
        if (map.collision(this.x, this.y + collisionY) <= 0) this.y += dy;
    }

    rotate(angle) {
        this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
    }

    update(seconds) {
        if (controls.status.left) this.rotate(-this.rot * seconds);
        if (controls.status.right) this.rotate(this.rot * seconds);
        if (controls.status.forward) this.walk(this.speed * seconds);
        if (controls.status.backward) this.walk(-this.speed * seconds);
        if (controls.status.leftward) this.walk(this.strafe * seconds, Math.PI / 2);
        if (controls.status.rightward) this.walk(-this.strafe * seconds, Math.PI / 2);
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

        while (true) {
            // Collision with the nearest axis X
            var dxx = cosNegative ?
                Math.ceil(currentX - 1) - currentX :
                Math.floor(currentX + 1) - currentX;
            var dxy = dxx * tan;
            var lengthX2 = dxx * dxx + dxy * dxy;
            // Collision with the nearest axis Y
            var dyx = sinNegative ?
                Math.ceil(currentY - 1) - currentY :
                Math.floor(currentY + 1) - currentY;
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

            if (collision == -1) {
                break;
            } else if (collision != 0) {
                hit.push({
                    distance: distance,
                    type: collision
                })
            }

        }
        return hit;
    }

    collision(x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return -1;
        return level[x][y];
    }
}

class Camera {
    constructor() {
        this.width = 1920;
        this.height = 720;
        this.focalLength = 0.8;
        this.resolution = 1920;
        this.rayLength = 40;
    }

    renderWall() {
        for (var column = 0; column < this.resolution; column++) {
            // -0.5 < x < 0.5
            var x = column / this.resolution - 0.5;
            var angle = Math.atan2(x, this.focalLength);

            var ray = map.castRay(player.direction + angle);

            var z = ray[0].distance * Math.cos(angle);
            var wallHeight = 1000 / z;
            var top = (this.height - wallHeight) / 2;
            var a = 300 / (z * z);
            a = Math.min(1, a);

            ctx.fillStyle = `rgba(0,255,0,${a})`;
            ctx.fillRect(column, top, 1, wallHeight);
        }
    }
    render(seconds) {
        ctx.clearRect(0, 0, this.width, this.height);
        this.renderWall();
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
var images = new Bitmap('assets/wall_texture1.jpg', 1024, 1024);

window.addEventListener("load", loop.start(function(seconds) {
    player.update(seconds);
    сamera.render();
}));
