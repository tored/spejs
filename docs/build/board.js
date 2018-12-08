define(["require", "exports", "./canvas", "./keys", "./bullet"], function (require, exports, canvas_1, keys_1, bullet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createBoard(width, height, ship) {
        return {
            width: width,
            height: height,
            ship: ship,
            bullets: [],
        };
    }
    exports.createBoard = createBoard;
    function updateBoard(board, fraction) {
        if (38 in keys_1.keys) {
            board.ship.engine = true;
        }
        else {
            board.ship.engine = false;
        }
        if (37 in keys_1.keys) {
            board.ship.angle -= board.ship.turnSpeed * fraction;
        }
        if (39 in keys_1.keys) {
            board.ship.angle += board.ship.turnSpeed * fraction;
        }
        const radians = board.ship.angle * Math.PI / 180;
        if (32 in keys_1.keys) {
            const x = board.ship.x + Math.cos(radians) * board.ship.asset.width;
            const y = board.ship.y + Math.sin(radians) * board.ship.asset.width;
            const vx = Math.cos(radians) * board.ship.x * fraction;
            const vy = Math.sin(radians) * board.ship.y * fraction;
            board.bullets.push(bullet_1.createBullet(x, y, vx, vy, board.ship.angle));
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
    exports.updateBoard = updateBoard;
    function renderBoard(board, canvas) {
        canvas_1.fillCanvas(canvas);
        canvas_1.drawParticle(canvas, board.ship);
        board.bullets.forEach(bullet => {
            canvas_1.drawParticle(canvas, bullet);
        });
    }
    exports.renderBoard = renderBoard;
});
