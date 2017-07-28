import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import ECharts from 'echarts';
//import { MapPage } from '../map-page/map-page';
import { AutoFitLayout } from "../../components/auto-fit-layout/auto-fit-layout";



@IonicPage({
  name:'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  viewProviders:[AutoFitLayout]
})
export class HomePage {

  private ALL:string="all";
  private name_data:any=["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"];
  private value_data:any=[5, 20, 36, 10, 10, 20];

  constructor(public navCtrl: NavController) {
   
  }

  //页面
  ngOnInit() {
    console.log('ionViewDidLoad home');
     this.createCharts();
  }

  afterViewInit(){
    
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


  enterMap(){
    this.navCtrl.push('MapPage');
  }

  enterFileUpload(){
    this.navCtrl.push('FileUploadPage');
  }

}
