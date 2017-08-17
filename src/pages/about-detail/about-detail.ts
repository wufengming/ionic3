import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'about-detail'
})
@Component({
  selector: 'page-about-detail',
  templateUrl: 'about-detail.html',
})
export class AboutDetailPage {

  id:string;
  src:string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.id=navParams.get('id')
    this.src=navParams.get('src')
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AboutDetailPage');

    console.log('id:'+this.id+',src:'+this.src);
  }

}
