import { Component, Injectable, ViewChild } from '@angular/core';
import { Tabs ,IonicPage } from 'ionic-angular';
//import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
//import { HomePage } from '../home/home';
//import { ChatPage } from '../chat/chat';
//import { LoginPage } from '../login/login';

@IonicPage({
  name:'tabs'
})
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabRef: Tabs;

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;
  private tab4Root: any;

  constructor() {
    this.tab1Root = 'chat';
    this.tab2Root = 'home'; //此处改成了字符串
    this.tab3Root = 'contact';
    this.tab4Root = 'login';

  }

  //页面已经进入的时候
  ionViewDidEnter() {
    this.tabRef.select(0);

    this.tabRef.getByIndex(3).tabBadge = '4';
    this.tabRef.getByIndex(3).tabBadgeStyle = 'danger';
  }

   //tab的点击chang事件没有触发

  selecttab4Root(tab){
    tab.tabBadge = '';
  }

}
