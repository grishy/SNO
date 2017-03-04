'use strict'
const CIRCLE = Math.PI * 2;
const degreesToRadians = (degrees) => degrees * Math.PI / 180;

const level = [
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

const WORLD = {
    sizeBlock: 30,
    playerRadius: 3
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

    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speed = 3.5;
    }

    walk(distance) {
        let dx = Math.cos(this.direction) * distance;
        let dy = Math.sin(this.direction) * distance;

        let radiusPlaterInMap = WORLD.playerRadius / WORLD.sizeBlock;
        let collisionX = dx > 0 ? radiusPlaterInMap : -radiusPlaterInMap;
        let collisionY = dy > 0 ? radiusPlaterInMap : -radiusPlaterInMap;

        if (map.collision(this.x + collisionX, this.y) <= 0) this.x += dx;
        if (map.collision(this.x, this.y + collisionY) <= 0) this.y += dy;
    }

    rotate(angle) {
        this.direction = (this.direction + angle) % (CIRCLE);
    }

    update(seconds) {
        if (controls.status.left) this.rotate(-Math.PI * seconds * 0.3);
        if (controls.status.right) this.rotate(Math.PI * seconds * 0.3);
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
        const sin = Math.sin(angle);
        const cos = Math.cos(angle);
        const tan = sin / cos;
        const cot = cos / sin;
        let hit = [];

        let currentX = player.x;
        let currentY = player.y;

        let distance = 0;
        let length2;

        while (distance < range) {
            let dxx = cos > 0 ? Math.floor(currentX + 1) - currentX :
                Math.ceil(currentX - 1) - currentX;
            let dxy = dxx * tan;
            let lengthX2 = dxx * dxx + dxy * dxy;

            let dyx = sin > 0 ? Math.floor(currentY + 1) - currentY :
                Math.ceil(currentY - 1) - currentY;
            let dyy = dyx * cot;
            let lengthY2 = dyx * dyx + dyy * dyy;

            let collisionX = 0;
            let collisionY = 0;

            if (lengthX2 < lengthY2) {
                currentX += dxx;
                currentY += dxy;
                length2 = lengthX2;
                collisionX = cos < 0 ? 1 : 0;
            } else {
                currentX += dyy;
                currentY += dyx;
                length2 = lengthY2;
                collisionY = sin < 0 ? 1 : 0;
            }

            distance += Math.sqrt(length2);

            let collision = this.collision(currentX - collisionX, currentY - collisionY);

            if (collision === -1) {
                break;
            } else if (collision > 0) {
                hit.push({
                  x: currentX,
                  y: currentY
                })
            }

        }

        сamera.drawRay(
            player.x * WORLD.sizeBlock,
            player.y * WORLD.sizeBlock,
            hit[0].x * WORLD.sizeBlock,
            hit[0].y * WORLD.sizeBlock,
            `rgba(200,150,20,0.1)`);

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
        this.width = map.width * WORLD.sizeBlock;
        this.height = map.height * WORLD.sizeBlock;
        this.focalLength = 0.8;
        this.resolution = 800;
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
        let log = []
        for (let column = 0; column < this.resolution; column++) {
            // -0.5 < x < 0.5
            let x = column / this.resolution - 0.5;
            let angle = player.direction + Math.atan2(x, this.focalLength);

            var ray = map.castRay(angle, this.rayLength);
            log.push(ray)
            // this.drawRay(
            //     player.x * WORLD.sizeBlock,
            //     player.y * WORLD.sizeBlock,
            //     ray[1].x * WORLD.sizeBlock,
            //     ray[1].y * WORLD.sizeBlock,
            //     "rgba(33, 243, 100, .2)"
            // )
        }
        // console.table(log)
        // xxx
    }

    renderPlayer() {
        let x = player.x * WORLD.sizeBlock;
        let y = player.y * WORLD.sizeBlock;

        ctx.fillStyle = "#F4511E";
        ctx.beginPath();
        ctx.arc(x, y, WORLD.playerRadius, 0, CIRCLE, false);
        ctx.fill();

        let lineEndX = x + Math.cos(player.direction) * 40;
        let lineEndY = y + Math.sin(player.direction) * 40;
        this.drawRay(x, y, lineEndX, lineEndY, '#E64A19')
    }

    renderMap() {
        for (let y = 0; y < map.width; y++) {
            for (let x = 0; x < map.height; x++) {
                let wall = level[x][y];

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
        let seconds = (time - this.lastTime) / 1000;
        this.lastTime = time;
        if (seconds < 0.2) this.callback(seconds);
        requestAnimationFrame(this.frame);
    };
}

let canvas = document.getElementById("display");
let ctx = canvas.getContext("2d");
let map = new Map();
let player = new Player(15, 15, degreesToRadians(90));
let сamera = new Camera();
let controls = new Control();

canvas.width = сamera.width;
canvas.height = сamera.height;

let loop = new GameLoop();

window.addEventListener("load", loop.start(function(seconds) {
    player.update(seconds);
    сamera.render();
}));
