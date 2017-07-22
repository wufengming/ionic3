import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-list-details',
  templateUrl: 'list-details.html',
})
export class ListDetailsPage {
  selectedItem: any;
  name:any;
  send_content:any;
  messageDetils:Array<{isFromeMe:boolean,content:string,time:string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedItem = navParams.get('item');
    this.messageDetils=[];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListDetails');

    this.name=this.selectedItem.Name
    this.send_content='发送内容';
    
    this.messageDetils.push(
      {
            isFromeMe: false,
            content: "你好!",
            time: "2015-11-22 08:50:22"
        }, {
            isFromeMe: true,
            content: "你好, 你是谁?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "你在干什么?",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: true,
            content: "知道怎么搞的吗?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "这是一道可以测出一个人有没有商业头脑的数学题",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: false,
            content: "喝咖啡对身体好吗?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "在澳洲申请新西兰签证",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: true,
            content: "说走就走的旅行",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "ok",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: true,
            content: "拉玛西亚",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: true,
            content: "拉玛西亚影视学院招生简章",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: true,
            content: "去黑头产品排行榜",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "美国大使馆 北京",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: false,
            content: "被开水烫伤怎么办?",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "谁说菜鸟不会数据分析?",
            time: "2015-11-27 06:34:55"
        }, {
            isFromeMe: true,
            content: "谁念西风独自凉",
            time: "2015-11-22 08:51:02"
        }, {
            isFromeMe: false,
            content: "被酒莫惊春睡重，赌书消得泼茶香，当时只道是寻常",
            time: "2015-11-27 06:34:55"
        }
    )
  }

}
