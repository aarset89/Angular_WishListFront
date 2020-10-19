import { ItemList } from './item-list.model';

export class List {
    id: number;
    title: string;
    created: Date;
    endedDate: Date;
    ended: boolean;
    items: ItemList[];


    constructor(title: string) {
        this.id = new Date().getTime();
        this.title = title;
        this.created = new Date();
        this.ended = false;
        this.items = [];


    }
}