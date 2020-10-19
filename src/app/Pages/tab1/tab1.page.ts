import { ReturnStatement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {



  lists: List[] = [];
  constructor(public whishsesService: WishesService,
    private router: Router,
    private alertController: AlertController) {
    this.lists = this.whishsesService.lists;
  }

  editTask(listId: string) {
    this.router.navigateByUrl('/tabs/tab1/add/' + listId);
  }

  async addItem() {
    console.log("asdasd");
    // this.router.navigateByUrl('/tabs/tab1/add');

    const alert = await this.alertController.create({
      header: "New list",
      inputs: [
        {
          name: "title",
          type: "text",
          placeholder: "Write new list name"

        }
      ], buttons: [
        {
          text: "cancel",
          role: "cancel",
          handler: () => {
            console.log("canceled")
          }
        },
        {
          text: "Create",
          cssClass: "color:dark",

          handler: (data) => {
            if (data.title.length === 0) {
              return;
            }

            console.log("Created")

            const newListId = this.whishsesService.createNewList(data.title);

            return this.router.navigateByUrl('/tabs/tab1/add/' + newListId);


          }
        }
      ]
    });

    alert.present();
  }




}
