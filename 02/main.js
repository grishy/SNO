'use strict'
const CIRCLE = Math.PI * 2;
const degreesToRadians = (degrees) => degrees * Math.PI / 180;
const sradiansToDegrees = (radians) => radians * 180 / Math.PI;

const level = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

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
        let state = this.codes[e.keyCode];
        if (typeof state === 'undefined') return;
        this.status[state] = val;
        e.preventDefault && e.preventDefault();
        e.stopPropagation && e.stopPropagation();
    }
}

class Player {

    constructor(x, y, direction, map) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.map = map;
    }

    walk(distance) {
        let dx = Math.cos(this.direction) * distance;
        let dy = Math.sin(this.direction) * distance;
        if (this.map.collision(this.x + dx, this.y) <= 0) this.x += dx;
        if (this.map.collision(this.x, this.y + dy) <= 0) this.y += dy;
    }

    rotate(angle) {
        this.direction = (this.direction + angle + CIRCLE) % (CIRCLE);
    }

    update(seconds, controls) {
        let speed = 2.5;
        if (controls.status.left) this.rotate(-Math.PI * seconds);
        if (controls.status.right) this.rotate(Math.PI * seconds);
        if (controls.status.forward) this.walk(speed * seconds);
        if (controls.status.backward) this.walk(speed * seconds);
    }
}

class Map {
    constructor(map) {
        this.level = map;
        this.width = map[0].length;
        this.height = map.length;
    }
    update(s) {}

    collision(x, y) {
        x = Math.floor(x);
        y = Math.floor(y);
        if (x < 0 || x > this.width - 1 || y < 0 || y > this.height - 1) return -1;
        return this.level[x][y];
    }
}

class Camera {
    constructor(ctx, map, player) {
        this.ctx = ctx;
        this.map = map;
        this.player = player;
        this.scale = 16;
        this.width = map.width * this.scale;
        this.height = map.height * this.scale;
    }

    renderPlayer() {
        let radius = 5;
        let x = this.player.x * this.scale;
        let y = this.player.y * this.scale;
        let direction = this.player.direction

        this.ctx.fillStyle = "#F4511E";
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        this.ctx.fill();


        this.ctx.strokeStyle = '#E64A19';
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(
            (x + Math.cos(direction) * 40),
            (y + Math.sin(direction) * 40)
        );
        this.ctx.closePath();
        this.ctx.stroke();
    }

    renderMap() {
        for (let y = 0; y < this.map.width; y++) {
            for (let x = 0; x < this.map.height; x++) {
                let wall = this.map.level[x][y];
                // Если в ячейке значение положительно...
                this.ctx.fillStyle = "#BDBDBD";
                if (wall > 0) {
                    this.ctx.fillRect( // ... нарисовать блок на холсте
                        x * this.scale, // X
                        y * this.scale, // Y
                        this.scale, this.scale // Width, Height
                    );

                }
            }
        }
    }

    render(seconds) {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.renderMap()
        this.renderPlayer()
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
        let seconds = (time - this.lastTime) / 1000;
        this.lastTime = time;
        if (seconds < 0.2) this.callback(seconds);
        requestAnimationFrame(this.frame);
    };
}

let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
let map = new Map(level);
let player = new Player(15, 15, degreesToRadians(-60), map);
let сamera = new Camera(ctx, map, player);
let controls = new Control();

canvas.width = сamera.width;
canvas.height = сamera.height;

let loop = new GameLoop();

window.addEventListener("load", loop.start(function(seconds) {
    // map.update(seconds);
    player.update(seconds, controls);
    сamera.render();
}));
