define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.keys = {};
    function registerKeys() {
        addEventListener('keydown', e => {
            exports.keys[e.keyCode] = true;
        }, false);
        addEventListener('keyup', e => {
            delete exports.keys[e.keyCode];
        }, false);
    }
    exports.registerKeys = registerKeys;
});
