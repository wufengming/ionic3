import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MapPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-map-page',
  templateUrl: 'map-page.html',
})
export class MapPage {
  public map: any;
  public latitude=116.397428;
  public longitude=39.90923;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.getLocation();

    this.loadMap();
  }

  loadMap() {
    var curmap = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 8,
      center: [this.latitude, this.longitude]
    });

    //工具条,比例尺
    AMap.plugin(['AMap.ToolBar', 'AMap.Scale', 'AMap.Geolocation'],
      function () {
        curmap.addControl(new AMap.ToolBar());

        curmap.addControl(new AMap.Scale());

        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,//是否使用高精度定位，默认:true
          timeout: 10000,          //超过10秒后停止定位，默认：无穷大
          maximumAge: 0,           //定位结果缓存0毫秒，默认：0
          convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          showButton: true,        //显示定位按钮，默认：true
          buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
          buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
          showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
          zoomToAccuracy: true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        });

        geolocation.getCurrentPosition(function (status, result) {
          if (status == 'complete') {
            onLocateSuccess(result) //定位成功
          } else if (status == 'error') {
            //定位失败
            if (result.message.indexOf('Geolocation permission denied.') !== -1) {
              //Geolocation permission denied.表示用户禁用了浏览器或者APP的定位权限或者关闭了手机的定位服务
              //或者当前页面为非安全页面,Chrome或者IOS10等系统会禁用非安全页面的定位请求
              //如果您的页面还没有支持HTTPS请尽快升级
              //安全页面指的是支持HTTPS的Web站点，而且是通过https协议打开的页面。安全页面也包括本地页面
              console.log('您好，请在系统的隐私设置中打开当前应用的定位权限。');
            } else {
              console.log('无法获取精确位置,将定位您所在的城市。');
            }
            onLocateFailed();
          }
        })
        //定位失败之后进行城市定位
        var onLocateFailed = function () {
          geolocation.getCityInfo(function (status, result) {
            console.log('城市定位.');
            curmap.setZoom(14);
          })
        };
        //定位成功
        var onLocateSuccess = function (result) {
          console.log('定位成功,拖动地图可微调.');
          curmap.setZoom(14);

        };

        curmap.addControl(new AMap.Geolocation());
      });


    this.map = curmap;
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
    } else {
      console.log("浏览器不支持地理定位。");
    }
  }

  showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("定位失败,用户拒绝请求地理定位");
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("定位失败,位置信息是不可用");
        break;
      case error.TIMEOUT:
        console.log("定位失败,请求获取用户位置超时");
        break;
      case error.UNKNOWN_ERROR:
        console.log("定位失败,定位系统失效");
        break;
    }
  }

  showPosition(position) {
    this.latitude = position.coords.latitude; //纬度   
    this.longitude = position.coords.longitude; //经度   
    console.log('纬度:' + this.latitude + ',经度:' + this.longitude);
  }


}
