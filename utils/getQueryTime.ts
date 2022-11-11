import type { PRODUCT } from 'Types/product';
interface TimesI<T> {
    times: T[];
    pushTime(): void;
    getTime(): number;
    clearArr: () => void;
    fetching: boolean;
}

export const getQueryTime: TimesI<number> = {
    times: [],
    fetching: false,
    pushTime() {
        const time = Date.now();
        this.times.push(time);
    },
    getTime() {
        return this.times[1] - this.times[0];
    },
    clearArr() {
        this.times = [];
    },
};

export function setLocalItems(item: PRODUCT) {
    const storageArray = window.localStorage.getItem('searched');

    if (!storageArray) {
        window.localStorage.setItem('searched', JSON.stringify([item]));
        return null;
    }
    const parsed: PRODUCT[] = JSON.parse(storageArray);
    parsed.push(item);
    window.localStorage.setItem('searched', JSON.stringify(parsed));
}
