import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { convertEnumToColumn } from 'ion-multi-picker';
import {CityServiceProvider} from "../../providers/city-service/city-service";

/**
 * Generated class for the MultiPickerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'multipicker'
})
@Component({
  selector: 'page-multi-picker',
  templateUrl: 'multi-picker.html',
})
export class MultiPickerPage {

  simpleColumns:any;

  dependentColumns:any;

  fruits: any[];  //枚举的数组
  fruit: Fruit;   //当前选中的枚举值

  cityData: any[]; //城市数据
  cityName:string = '北京市 北京市 东城区'; //初始化城市名
  code:string; //城市编码

  constructor(public navCtrl: NavController, public navParams: NavParams,public cityPickerSev: CityServiceProvider,) {
    this.simpleColumns = [
      {
        name: 'col1',
        options: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      },{
        name: 'col2',
        options: [
          { text: '1-1', value: '1-1' },
          { text: '1-2', value: '1-2' },
          { text: '2-1', value: '2-1' },
          { text: '2-2', value: '2-2' },
          { text: '3-1', value: '3-1' }
        ]
      },{
        name: 'col3',
        options: [
          { text: '1-1-1', value: '1-1-1' },
          { text: '1-1-2', value: '1-1-2' },
          { text: '1-2-1', value: '1-2-1' },
          { text: '1-2-2', value: '1-2-2' },
          { text: '2-1-1', value: '2-1-1' },
          { text: '2-1-2', value: '2-1-2' },
          { text: '2-2-1', value: '2-2-1' },
          { text: '2-2-2', value: '2-2-2' },
          { text: '3-1-1', value: '3-1-1' },
          { text: '3-1-2', value: '3-1-2' }
        ]
      }
    ];

    this.dependentColumns = [
      {
        options: [
          { text: '1', value: '1' },
          { text: '2', value: '2' },
          { text: '3', value: '3' }
        ]
      },{
        options: [
          { text: '1-1', value: '1-1', parentVal: '1' },
          { text: '1-2', value: '1-2', parentVal: '1' },
          { text: '2-1', value: '2-1', parentVal: '2' },
          { text: '2-2', value: '2-2', parentVal: '2' },
          { text: '3-1', value: '3-1', parentVal: '3' }
        ]
      }];

    this.fruit = Fruit.Melon;
    this.fruits = convertEnumToColumn(Fruit);

    this.setCityPickerData();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiPickerPage');
  }

  /**
   * 获取城市数据
   */
  setCityPickerData(){
    this.cityPickerSev.getCitiesData()
      .then( data => {
        this.cityData = data;
      });
  }

  /**
   * 城市选择器被改变时触发的事件
   * @param event
   */
  cityChange(event){
    console.log(event);
    this.code = event['region'].value
  }

}


enum Fruit {Apple, Orange, Melon, Banana, Pear}
