import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsService } from "../../providers/tabs-service";

/**
 * Generated class for the MyPopupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'my-popup'
})
@Component({
  selector: 'page-my-popup',
  templateUrl: 'my-popup.html',
})
export class MyPopupPage {
  private showBackdrop1: boolean = false;//声明显、隐弹窗判断，初始隐藏弹窗
  private showBackdrop2: boolean = false;//声明显、隐弹窗判断，初始隐藏弹窗

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public tabsserver: TabsService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPopupPage');
  }

  //显示蒙版===打开弹窗==
  showMypopup(L) {
    this.tabsserver.hide(); //隐藏tabs
    switch (L) {
      case '1': {
        this.showBackdrop1 = true;  //显示蒙版1
        break;
      }
      case '2': {
        this.showBackdrop2 = true; //显示蒙版2
        break;
      }
    }
  }

//显示蒙版===end==
 
//关闭蒙版--关闭弹窗
backdrop(n){
  this.tabsserver.show();  //显示tabs
  switch(n){
    case '1':{
      this.showBackdrop1=false; //隐藏蒙版1
      break;
    }
    case '2':{
      this.showBackdrop2=false; //隐藏蒙版2
      break;
    }
    //....扩展多个自定义弹窗
  }
}
 
closeTap(m){
  this.backdrop(m);
  if(m=="1"){
   //..更多的判断
    console.log('弹窗1关闭了');
  }
}
//关闭蒙版====end=====

}
