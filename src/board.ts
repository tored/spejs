import {Ship} from "./ship";
import {Canvas, drawParticle, fillCanvas} from "./canvas";
import {keys} from "./keys";
import {Bullet, createBullet} from "./bullet";

interface Board {
    readonly width: number;
    readonly height: number;
    readonly ship: Ship;
    bullets: Bullet[];
}

export function createBoard(width: number, height: number, ship: Ship): Board {
    return {
        width: width,
        height: height,
        ship: ship,
        bullets: [],
    };
}

export function updateBoard(board: Board, fraction: number) {
    if (38 in keys) { //  up
        board.ship.engine = true;
    } else {
        board.ship.engine = false;
    }

    /*if (40 in keys) { // down

    }*/
    if (37 in keys) { // left
        board.ship.angle -= board.ship.turnSpeed * fraction;
    }
    if (39 in keys) { // right
        board.ship.angle += board.ship.turnSpeed * fraction;
    }

    const radians = board.ship.angle * Math.PI / 180;

    if (32 in keys) { // space

        const x = board.ship.x + Math.cos(radians) * board.ship.asset.width;
        const y = board.ship.y + Math.sin(radians) * board.ship.asset.width;
        const vx = Math.cos(radians) * board.ship.x * fraction;
        const vy = Math.sin(radians) * board.ship.y * fraction;

        board.bullets.push(createBullet(x, y, vx, vy, board.ship.angle));

    }

    if (board.ship.engine) {
        board.ship.vx += Math.cos(radians) * board.ship.acc * fraction;
        board.ship.vy += Math.sin(radians) * board.ship.acc * fraction;
    }

    board.ship.vx *= 0.98;
    board.ship.vy *= 0.98;

    board.ship.x += board.ship.vx;
    board.ship.y += board.ship.vy;

    if (board.ship.x < 0) {
        board.ship.x = board.width;
    }
    if (board.ship.x > board.width) {
        board.ship.x = 0;
    }
    if (board.ship.y < 0) {
        board.ship.y = board.height;
    }
    if (board.ship.y > board.height) {
        board.ship.y = 0;
    }

    board.bullets = board.bullets.filter(bullet => {
        bullet.x += bullet.vx;
        bullet.y += bullet.vy;

        if (bullet.x < 0) {
            return false;
        }
        if (bullet.x > board.width) {
            return false;
        }
        if (bullet.y < 0) {
            return false;
        }
        if (bullet.y > board.height) {
            return false;
        }
        return true;
    });
}

export function renderBoard(board: Board, canvas: Canvas) {
    fillCanvas(canvas);
    drawParticle(canvas, board.ship);
    board.bullets.forEach(bullet => {
        drawParticle(canvas, bullet);
    });
}