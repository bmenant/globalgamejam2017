export const PLAYER_DIGGING = 'DIGGING';
export const PLAYER_BUILDING = 'BUILDING';

export function digg(coordonates) {
    return {
        type: PLAYER_DIGGING,
        coordonates,
    };
}

export function build(coordonates) {
    return {
        type: PLAYER_BUILDING,
        coordonates,
    };
}
