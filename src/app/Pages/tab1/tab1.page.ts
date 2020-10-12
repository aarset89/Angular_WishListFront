import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
lists :List[]=[];
  constructor(public whishsesService: WishesService,
    private router:Router) {
    this.lists = this.whishsesService.lists;
  }



  addItem(){
    console.log("asdasd");
    this.router.navigateByUrl('/tabs/tab1/add');
  }
}
