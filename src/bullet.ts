import {Asset, bulletAsset} from "./asset";

export interface Bullet {
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    asset: Asset;
}

export function createBullet(x: number, y: number, vx: number, vy: number, angle: number): Bullet {
    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        angle: angle,
        asset: bulletAsset,
    };
}
