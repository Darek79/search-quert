import Dexie, { Table } from 'dexie';
import { PRODUCT } from 'Types/product';

export class DexieDb extends Dexie {
    products!: Table<PRODUCT>;

    constructor() {
        super('productsDb');
        this.version(1).stores({
            products: '++id, title ', // Primary key and indexed props
        });
    }
}

export const db = new DexieDb();
