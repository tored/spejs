define(["require", "exports", "./image"], function (require, exports, image_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function loadAssets() {
        return Promise.all([
            image_1.loadImage('assets/SpaceShipSmall.png'),
            image_1.loadImage('assets/bullet.png')
        ]).then(data => {
            const [shipImage, bulletImage] = data;
            exports.shipAsset = {
                image: shipImage,
                angle: 0,
            };
            exports.bulletAsset = {
                image: bulletImage,
                angle: 0,
            };
        });
    }
    exports.loadAssets = loadAssets;
});
