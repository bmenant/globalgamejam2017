
export const HELLO_SOMEBODY = 'HELLO_SOMEBODY';

export function hello(somebody) {
    return {
        type: HELLO_SOMEBODY,
        somebody,
    }
}
