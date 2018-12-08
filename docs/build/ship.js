define(["require", "exports", "./asset"], function (require, exports, asset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createShip(x, y, angle) {
        return {
            x: x,
            y: y,
            vx: 0,
            vy: 0,
            angle: angle,
            turnSpeed: 180,
            acc: 10,
            engine: false,
            asset: asset_1.shipAsset,
        };
    }
    exports.createShip = createShip;
});
