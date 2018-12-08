import {loadImage} from "./image";

export interface Asset {
    image: HTMLImageElement,
    angle: number,
    width: number,
    height: number,
}

export let shipAsset: Asset;
export let bulletAsset: Asset;

export function loadAssets(): Promise<void> {

    return Promise.all([
        loadImage('assets/SpaceShipSmall.png'),
        loadImage('assets/bullet.png')
    ]).then(data => {
        const [shipImage, bulletImage] = data;
        shipAsset = {
            image: shipImage,
            angle: 90,
            width: 68,
            height: 100,
        };
        bulletAsset = {
            image: bulletImage,
            angle: 90,
            width: 26,
            height: 10,
        };
    });
}