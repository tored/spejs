define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function loadImage(url) {
        const image = new Image();
        return new Promise(resolve => {
            image.onload = () => {
                resolve(image);
            };
            image.src = url;
        });
    }
    exports.loadImage = loadImage;
});
