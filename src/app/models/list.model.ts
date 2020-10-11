import { ItemList } from './item-list.model';

export class List {
    id: number;
    title: string;
    created: Date;
    endedDate: Date;
    completada: boolean;
    items: ItemList[];

    constructor(title: string) {
        this.title = title;
        this.created = new Date();
        this.completada = false;
        this.items = [];

        this.id = new Date().getTime();

    }
}