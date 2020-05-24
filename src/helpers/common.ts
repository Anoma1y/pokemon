export function debounce(fn: any, delay = 200): any {
    let timeoutID: null | NodeJS.Timeout = null;

    return function () {
        if (timeoutID) {
            clearTimeout(timeoutID)
        }
        const args = arguments;
        // @ts-ignore
        const that = this;
        timeoutID = setTimeout(function () {
            fn.apply(that, args)
        }, delay)
    }
}

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const getFormat = (obj: { [key: string]: any }, key: string) => obj[key] || key;
