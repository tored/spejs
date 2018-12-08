define(["require", "exports", "./canvas", "./ship", "./keys", "./board", "./asset"], function (require, exports, canvas_1, ship_1, keys_1, board_1, asset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const width = 800;
    const height = 640;
    asset_1.loadAssets().then(() => {
        const ship = ship_1.createShip(width / 2, height / 2, 0);
        const canvas = canvas_1.createCanvas(width, height, document.body);
        const board = board_1.createBoard(width, height, ship);
        keys_1.registerKeys();
        let then = Date.now();
        const main = () => {
            const now = Date.now();
            const delta = now - then;
            board_1.updateBoard(board, delta / 1000);
            board_1.renderBoard(board, canvas);
            then = now;
            window.requestAnimationFrame(main);
        };
        main();
    });
});
