import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemList } from 'src/app/models/item-list.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  itemName = '';

  constructor(private route: ActivatedRoute, private wishesServices: WishesService) {

    const listId = this.route.snapshot.paramMap.get("listId");
    this.list = wishesServices.loadList(listId);

  }

  ngOnInit() {
  }


  createNewItem() {
    if (this.itemName.length === 0) {
      return;
    }

    const newItem = new ItemList(this.itemName);
    this.list.items.push(newItem);
    this.itemName = '';
    this.wishesServices.saveList();
    console.log(newItem);
  }


  changeTaskStatus(item: ItemList) {

    const pending = this.list.items.filter(itemData => !itemData.Completado).length;
    console.log({ pending });
    console.log(item);

    if (pending === 0) {
      this.list.ended = true;
      this.list.endedDate = new Date();
    } else {
      this.list.ended = false;
      this.list.endedDate = null;
    }

    this.wishesServices.saveList();

    console.log(this.wishesServices.lists)
  }

  deleteTask(i: number) {
    this.list.items.splice(i, 1);

    this.wishesServices.saveList();
  }
}
