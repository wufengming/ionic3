import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import ECharts from 'echarts';
//import { MapPage } from '../map-page/map-page';
import {AutoFitLayout} from "../../components/auto-fit-layout/auto-fit-layout";
import {ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject} from '@ionic-native/themeable-browser';
import {BrowserServiceProvider} from '../../providers/browser-service/browser-service';

@IonicPage({
  name: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  viewProviders: [AutoFitLayout]
})
export class HomePage {

  private ALL: string = "all";
  private name_data: any = ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"];
  private value_data: any = [5, 20, 36, 10, 10, 20];

  //ionic2-rating初始化的值
  private rate: number = 3;

  hasmore = true;
  products: Array<any>;

  params = {
    pageNo: 1,
    favoritesId: 0,
  };

  spinner1: boolean = true;

  url: string = 'http://www.baidu.com';

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController,
              public navParams: NavParams) {

  }

  //页面
  ngOnInit() {
    console.log('ionViewDidLoad home');
    this.createCharts();
  }

  /**
   *
   */
  ionViewDidLoad() {
    this.getFavoritesItems();
    console.log('ionViewDidLoad ProductListPage');
  }

  getFavoritesItems() {
    this.products = [
      {PictUrl: 'assets/img/1.jpg', Title: '标题1', ZkFinalPrice: '10', ReservePrice: '10'},
      {PictUrl: 'assets/img/2.jpg', Title: '标题2', ZkFinalPrice: '11', ReservePrice: '11'},
      {PictUrl: 'assets/img/3.jpg', Title: '标题3', ZkFinalPrice: '12', ReservePrice: '12'},
      {PictUrl: 'assets/img/4.jpg', Title: '标题4', ZkFinalPrice: '13', ReservePrice: '13'}
    ];

    this.params.pageNo += 1;
    this.spinner1 = false;
  }

  /**
   * 滚动到底部加载数据
   * @param infiniteScroll
   */
  doInfinite(infiniteScroll) {
    if (this.hasmore == false) {
      infiniteScroll.complete();
      return;
    }

    if (this.params.pageNo <= 5) {
      this.products = this.products.concat([
        {PictUrl: 'assets/img/1.jpg', Title: '标题1', ZkFinalPrice: '10', ReservePrice: '10'},
        {PictUrl: 'assets/img/2.jpg', Title: '标题2', ZkFinalPrice: '11', ReservePrice: '11'},
      ]);
      this.params.pageNo += 1;

      console.log(this.params.pageNo);

    } else {
      this.hasmore = false;
      console.log("没有数据啦！")
    }
    infiniteScroll.complete();
  }

  /**
   * 下拉刷新
   */
  doRefresh() {
    this.params.pageNo = 0;
  }

  afterViewInit() {

  }

  //创建图标
  createCharts() {
    var myChart = ECharts.init(document.getElementById('main') as HTMLDivElement);
    // 指定图表的配置项和数据
    var option = {
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      legend: {
        data: ['销量']
      },
      xAxis: {
        data: this.name_data
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: this.value_data
      }]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }


  enterMap() {
    this.navCtrl.push('MapPage');
  }

  enterFileUpload() {
    this.navCtrl.push('FileUploadPage');
  }

  // ModalController 应用
  presentProfileModal() {
    let profileModal = this.modalCtrl.create('FileUploadPage', {userId: 8675309});
    profileModal.present();
  }


  /**
   *   ThemeableBrowser 案例
   */
  goBuy() {

    /*let options: ThemeableBrowserOptions = {
     statusbar: {                //状态栏的颜色
     color: '#f8285c'
     },
     toolbar: {                  //工具栏配置
     height: 44,
     color: '#f8285c'
     },
     title: {                    //标题的配置
     color: '#ffffffff',
     showPageTitle: true
     },
     backButton: {               //返回按钮配置
     image: 'back',
     imagePressed: 'back_pressed',
     align: 'left',
     event: 'backPressed'
     },
     backButtonCanClose: true
     };

     let themeableBrowser = new ThemeableBrowser();
     let browser: ThemeableBrowserObject = themeableBrowser.create(this.url, '_blank', options);   //_self  页面弹出  _blank页面在框架内
     */

    let browser: ThemeableBrowserObject = new BrowserServiceProvider(this.url, [
      {
        image: 'share',
        imagePressed: 'share_pressed',
        align: 'right',
        event: 'sharePressed'
      }
    ], {
      image: 'menu',
      imagePressed: 'menu_pressed',
      title: 'Test',
      cancel: 'Cancel',
      align: 'right',
      items: [
        {
          event: 'helloPressed',
          label: 'Hello World!'
        },
        {
          event: 'testPressed',
          label: 'Test8!'
        }
      ]
    }).launch();

    browser.on('sharePressed').subscribe((data) => {

      alert('share');
    }, (err) => {

      alert('share:error');
      console.error('onError');
    });

  }


  /**
   * Ion-Multi-Picker 案例
   */
  multiPicker() {
    this.navCtrl.push('multipicker');
  }

  //跳转到瀑布流图片
  pageAbout() {
    this.navCtrl.push('about');
  }


  /**
   * ionic2-rating 的change事件
   * @param evn
   */
  onModelChange(evn:any){

    console.log(evn);
  }

  sliderTab(){
    this.navCtrl.push('sliderTab');
  }

}
