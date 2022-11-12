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

export function setItemLocal(item: PRODUCT) {
    const parsed = getItemLocal();

    if (!parsed) {
        console.log('1');
        window.localStorage.setItem('searched', JSON.stringify([item]));
        return null;
    }
    const index = parsed.findIndex(el => el.product_name.toLocaleLowerCase() === item.product_name.toLocaleLowerCase());
    console.log(index);
    if (index >= 0) {
        return null;
    }
    // if (parsed.length === 10) {
    //     parsed.shift();
    // }
    parsed!.push(item);
    window.localStorage.setItem('searched', JSON.stringify(parsed));
}

export function deleteLocalItem(item: string) {
    const parsed = getItemLocal();
    const arr = parsed!.filter(el => el.id !== item);
    if (!arr?.length) {
        window.localStorage.removeItem('searched');
        return arr;
    }
    window.localStorage.setItem('searched', JSON.stringify(arr));
    return arr;
}

export function getItemLocal(): PRODUCT[] | null {
    const storageArray = window.localStorage.getItem('searched');
    if (!storageArray) {
        return null;
    }
    return JSON.parse(storageArray);
}
// export function setLocalItems(item: PRODUCT) {
//     if (!storageArray) {
//         return null;
//     }
//     const parsed: PRODUCT[] = JSON.parse(storageArray);
//     parsed.push(item);
//     window.localStorage.setItem('searched', JSON.stringify(parsed));
// }
