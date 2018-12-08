import {Asset, shipAsset} from "./asset";

export interface Ship {
    x: number;
    y: number;
    vx: number;
    vy: number;
    angle: number;
    turnSpeed: number;
    acc: number;
    engine: boolean;
    asset: Asset;
}

export function createShip(x: number, y: number, angle: number): Ship {
    return {
        x: x,
        y: y,
        vx: 0,
        vy: 0,
        angle: angle,
        turnSpeed: 180,
        acc: 10,
        engine: false,
        asset: shipAsset,
    };
}