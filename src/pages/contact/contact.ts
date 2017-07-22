import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage({
  name:'contact'
})
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  public contacts = [];

  constructor(public navCtrl: NavController) {
    this.contacts = [
      {
        Letter: 'A',
        content: [
          { firstName: 'Ahr1', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Ahr2', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Ahr3', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Ahr4', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' }
        ]
      },
      {
        Letter: 'J',
        content: [
          { firstName: 'Json', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json1', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json2', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json3', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json4', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json5', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json6', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json7', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json8', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' },
          { firstName: 'Json9', lastName: 'MK', phone: '12345678901', email: 'json@qq.com' }
        ]
      }

    ]

  }


  addItem() {

  }

  viewItem(item) {
    console.log(item);
  }

}
