export const PLAYER_DIGGING = 'DIGGING';
export const PLAYER_BUILDING = 'BUILDING';

export function digg(coordinates, value) {
    return {
        type: PLAYER_DIGGING,
        coordinates,
        value,
    };
}

export function build(coordinates, value) {
    return {
        type: PLAYER_BUILDING,
        coordinates,
        value,
    };
}

