define(["require", "exports", "./asset"], function (require, exports, asset_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createBullet(x, y, vx, vy, angle) {
        return {
            x: x,
            y: y,
            vx: vx,
            vy: vy,
            angle: angle,
            asset: asset_1.bulletAsset,
        };
    }
    exports.createBullet = createBullet;
});
