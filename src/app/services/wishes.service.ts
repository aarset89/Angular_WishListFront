import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {


  lists: List[] = [];

  constructor() {
    console.log("Service started!")

    this.readLists();
  }

  createNewList(title: string) {

    const newList = new List(title);
    this.lists.push(newList)
    this.saveList();

    return newList.id;
  }

  loadList(listId: string | number) {
    listId = Number(listId);

    return this.lists.find(l => l.id === listId);
  }

  saveList() {
    localStorage.setItem('data', JSON.stringify(this.lists));
  }

  readLists() {
    if (localStorage.getItem('data')) {
      this.lists = JSON.parse(localStorage.getItem('data'));
    }


  }

}
