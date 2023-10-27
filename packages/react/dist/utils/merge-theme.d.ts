type Entry = {
    [key: string]: any;
};
/**
 * Parse object entries from array to string and merge the tailwind css classes using `tailwind-merge`.
 * @param entry Object
 * @returns Object
 */
declare function mergeTheme(entry: Entry): {};

export { mergeTheme as default, mergeTheme };
