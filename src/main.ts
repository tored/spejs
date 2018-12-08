import {createCanvas} from "./canvas";
import {createShip} from "./ship";
import {registerKeys} from "./keys";
import {createBoard, renderBoard, updateBoard} from "./board";
import {loadAssets} from "./asset";

const width = 800;
const height = 640;

loadAssets().then(() => {
    const ship = createShip(width / 2, height / 2, 0);
    const canvas = createCanvas(width, height, document.body);
    const board = createBoard(width, height, ship);
    registerKeys();

    let then = Date.now();
    const main = () => {
        const now = Date.now();
        const delta = now - then;

        updateBoard(board, delta / 1000);
        renderBoard(board, canvas);

        then = now;
        window.requestAnimationFrame(main);
    };
    main();
});



