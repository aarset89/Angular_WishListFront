import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishesService {
  
  
  lists: List[] = [];

  constructor() { 
    console.log("Service started!")

    const list1 = new List("Title list one");
    const list2 = new List("title list two");


    this.lists.push(list1,list2);

console.log(this.lists);
  }




}
