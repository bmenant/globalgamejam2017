export const PLAYER_DIGGING = 'DIGGING';
export const PLAYER_BUILDING = 'BUILDING';

export const PLAYER_SELECTING_TOOL = 'SELECTING_TOOL';

export const DIGGING_TOOL = 'DIGGING_TOOL';
export const BUILDING_TOOL = 'BUILDING_TOOL';

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

export function selectTool(tool) {
    return {
        type: PLAYER_SELECTING_TOOL,
        tool,
    }
}