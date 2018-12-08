import {Asset} from "./asset";

export interface Canvas {
    readonly element: HTMLCanvasElement;
    readonly ctx: CanvasRenderingContext2D;
}

interface Particle {
    readonly x: number;
    readonly y: number;
    readonly angle: number;
    readonly asset: Asset;
}

export function createCanvas(width: number, height: number, parentElement: HTMLElement): Canvas {
    const element = document.createElement('canvas');
    element.width = width;
    element.height = height;
    parentElement.appendChild(element);
    return {
        element: element,
        ctx: element.getContext('2d'),
    };
}

export function fillCanvas(canvas: Canvas) {
    canvas.ctx.fillStyle = 'black';
    canvas.ctx.fillRect(0, 0, canvas.element.width, canvas.element.height);
}

export function drawParticle(canvas: Canvas, particle: Particle) {
    canvas.ctx.save();
    canvas.ctx.translate(particle.x, particle.y);
    canvas.ctx.rotate((particle.asset.angle + particle.angle) * Math.PI / 180);
    canvas.ctx.drawImage(particle.asset.image, -particle.asset.image.width / 2, -particle.asset.image.width / 2);
    canvas.ctx.restore();
}