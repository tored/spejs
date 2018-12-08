define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createCanvas(width, height, parentElement) {
        const element = document.createElement('canvas');
        element.width = width;
        element.height = height;
        parentElement.appendChild(element);
        return {
            element: element,
            ctx: element.getContext('2d'),
        };
    }
    exports.createCanvas = createCanvas;
    function fillCanvas(canvas) {
        canvas.ctx.fillStyle = 'black';
        canvas.ctx.fillRect(0, 0, canvas.element.width, canvas.element.height);
    }
    exports.fillCanvas = fillCanvas;
    function drawParticle(canvas, particle) {
        canvas.ctx.save();
        canvas.ctx.translate(particle.x, particle.y);
        canvas.ctx.rotate((particle.asset.angle + particle.angle) * Math.PI / 180);
        canvas.ctx.drawImage(particle.asset.image, -particle.asset.image.width / 2, -particle.asset.image.width / 2);
        canvas.ctx.restore();
    }
    exports.drawParticle = drawParticle;
});
