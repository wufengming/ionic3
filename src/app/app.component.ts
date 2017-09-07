import { Component, ViewChild, Host } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Platform, Nav,IonicApp, ToastController, MenuController,ModalController, Keyboard,Events } from 'ionic-angular';
import {NativeService} from "../providers/NativeService";
import {ENABLE_FUNDEBUG} from "../providers/Constants";
import {GlobalData} from "../providers/GlobalData";

/**
 * app.component.ts 应用程序根组件
 *
 * @Host 装饰器将把往上搜索的行为截止在 宿主组件
*/

declare const window: any;
declare var fundebug;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('myNav') nav: Nav;
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  rootPage: any = 'start';// 开始加载 启动页面的动画



  pages: Array<{ title: string, component: any }>;
  local:Storage;

  constructor(private platform: Platform,
              private ionicApp: IonicApp,
              private keyboard: Keyboard,
              public storage: Storage,
              private globalData: GlobalData,
              private events: Events,
              private toastCtrl: ToastController,
              private modalCtrl: ModalController,
              public menu: MenuController,
              private nativeService: NativeService) {

    platform.ready().then(() => {

      if (ENABLE_FUNDEBUG && this.nativeService.isMobile()) {//设置日志监控app的版本号
        this.nativeService.getVersionNumber().subscribe(version => {
          fundebug.appversion = version;
        })
      }
      //this.helper.initJpush();//初始化极光推送

      this.storage.ready().then(() => {

        this.storage.set('isStart', false);

        this.storage.get('isStart').then((val) => {
          console.log('isStart:', val);
        })
      });

      this.nativeService.statusBarStyleDefault();
      this.nativeService.splashScreenHide();        //隐藏启动页面
      this.registerBackButtonAction();              //注册返回按键事件
      this.assertNetwork();                         //检测网络
      // this.helper.assertUpgrade().subscribe(res => {//检测app是否升级
      //   res.update && this.nativeService.downloadApp();
      // })

      this.pages = [{ title: 'StartPage', component: 'start' },
                    { title: 'TabsPage', component: 'tabs' }];
    });

  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  /**
   * 检测网络方法
   */
  assertNetwork() {
    if (!this.nativeService.isConnecting()) {
      this.toastCtrl.create({
        message: '未检测到网络,请连接网络',
        showCloseButton: true,
        closeButtonText: '确定'
      }).present();
    }
  }
  /**
   * 注册返回按键事件
   */
  registerBackButtonAction() {
    if (!this.nativeService.isAndroid()) {
      return;
    }
    this.platform.registerBackButtonAction(() => {
      if (this.keyboard.isOpen()) {//如果键盘开启则隐藏键盘
        this.keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        activePortal.onDidDismiss(() => {});
        return;
      }
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      return activeNav.canGoBack() ? activeNav.pop() : this.nativeService.minimize();//this.showExit()

    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.nativeService.showToast('再按一次退出应用');
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }

}
