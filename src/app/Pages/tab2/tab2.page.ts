import { Component } from '@angular/core';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private whishsesService: WishesService) {}

}
