export const keys: {[index: number]: boolean} = {};

export function registerKeys() {
    addEventListener('keydown', e => {
        keys[e.keyCode] = true;
    }, false);

    addEventListener('keyup', e => {
        delete keys[e.keyCode];
    }, false);
}


