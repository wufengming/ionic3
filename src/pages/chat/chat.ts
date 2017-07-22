import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { chatTopics } from "./../../model/chatTopics";
import { ListDetailsPage } from '../list-details/list-details';
/**
 * Generated class for the Chat page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'chat'
})
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  private topics: chatTopics[];

  //主题列表默认参数
  private params = {
    page: 1,
    tab: 'all',
    limit: 20
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  //初始化加载
  ngOnInit() {
    this.topics = [
      {
        ID: 1,
        type: '1',
        Name: '审批任务',
        Image: 'assets/img/ica-slidebox-img-1.png',
        Description: '张三发起的审批',
        Datetime:'2017-04-28 15:30'
      },
      {
        ID: 2,
        type: '2',
        Name: '小明',
        Image: 'assets/img/ica-slidebox-img-1.png',
        Description: '5:30 会议室开会',
        Datetime:'2017-04-28 15:30'
      }
    ];

    this.params.page++;
  }

  //页面
  ionViewDidLoad() {
    console.log('ionViewDidLoad Chat');
  }
  //页面已经进入的时候  
  ionViewDidEnter() {

  }

  //点击item的选项
  itemClick(event, item) {
    this.navCtrl.push(ListDetailsPage, {
      item: item
    });
  }

  //下拉刷新
  doRefresh(refresher) {
    console.log('doRefresh');
    this.params.page = 1;
    setTimeout(() => {
      //先清空，在赋值
      this.topics = [
        {
          ID: 1,
          type: '1',
          Name: '审批任务-new',
          Image: 'assets/img/ica-slidebox-img-1.png',
          Description: '张三发起的审批',
          Datetime:'2017-04-28 15:30'
        },
        {
          ID: 2,
          type: '2',
          Name: '小明-new',
          Image: 'assets/img/ica-slidebox-img-1.png',
          Description: '5:30 会议室开会',
          Datetime:'2017-04-28 15:30'
        }
      ];
      refresher.complete();
    }, 500);// 延迟500ms
  }

  //分页加载
  doInfinite(infiniteScroll) {
    console.log('doInfinite');

    setTimeout(() => {
      this.topics = [
        {
          ID: 1,
          type: '1',
          Name: '审批任务-page' + this.params.page,
          Image: 'assets/img/ica-slidebox-img-1.png',
          Description: '张三发起的审批',
          Datetime:'2017-04-28 15:30'
        },
        {
          ID: 2,
          type: '2',
          Name: '小明-page' + this.params.page,
          Image: 'assets/img/ica-slidebox-img-1.png',
          Description: '5:30 会议室开会',
          Datetime:'2017-04-28 15:30'
        }
      ];
      this.params.page++;
      infiniteScroll.complete();
    }, 500); // 延迟500ms
  }

}
