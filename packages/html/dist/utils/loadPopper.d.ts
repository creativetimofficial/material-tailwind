declare global {
    interface Window {
        Popper?: typeof import('@popperjs/core');
    }
}
export declare function loadPopperJs(): Promise<typeof import('@popperjs/core') | undefined>;
