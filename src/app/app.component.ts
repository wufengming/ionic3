import { Component, ViewChild, Host } from '@angular/core';
import { Platform, Nav,IonicApp, ToastController, MenuController, Keyboard } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
//import { TabsPage } from '../pages/tabs/tabs';

//import { StartPage } from '../pages/start/start';

/**
 * app.component.ts 应用程序根组件
 * 
 * @Host 装饰器将把往上搜索的行为截止在 宿主组件
*/

declare const window: any;
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  backButtonPressed: boolean = false;  //用于判断返回键是否触发
  @ViewChild('myNav') nav: Nav;

  // 开始加载 启动页面的动画
  rootPage: any = 'start';
  pages: Array<{ title: string, component: any }>;
  local:Storage;

  constructor(private ionicApp: IonicApp,
    private platform: Platform,
    private Keyboard: Keyboard,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private toastCtrl: ToastController,
    public menu: MenuController,
    public storage: Storage) {

    if (window.cordova) {
      document.addEventListener("deviceready", () => {
        // retrieve the DOM element that had the ng-app attribute
        statusBar.styleLightContent();
        //延迟隐藏闪屏 防止有白屏
        window.setTimeout(() => {
          splashScreen.hide();
        }, 500);
        // 代码开始
        this.initializeApp();


        if (platform.is("ios")) {
          console.log('this is ios');
        } else if (platform.is("android")) {
          console.log('this is android');
        }

      }, false);
    } else {
      console.log('web 模式');
      // 代码开始
      this.initializeApp();

    }

    // this.local=new Storage(localStorage);
    // this.local.set('isStart',false);

    // this.local.get('isStart').then((result)=>{
    //   console.log('isStart:', result);
    // })


     storage.ready().then(() => {

       storage.set('isStart', false);

       storage.get('isStart').then((val) => {
         console.log('isStart:', val);
       })
     });



  }

  registerBackButtonAction() {
    this.platform.registerBackButtonAction(() => {

      if (this.Keyboard.isOpen()) { //如果键盘开启，则隐藏键盘
        this.Keyboard.close();
        return;
      }
      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() || this.ionicApp._loadingPortal.getActive() || this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive();
      if (activePortal) {
        activePortal.dismiss().catch(() => { });
        activePortal.onDidDismiss(() => { });
        return;
      }
      let activeVC = this.nav.getActive();
      let tabs = activeVC.instance.tabs;
      let activeNav = tabs.getSelected();
      return activeNav.canGoBack() ? activeNav.pop() : window['AppMinimize'].minimize();
    }, 1);
  }

  //双击退出提示框
  showExit() {
    if (this.backButtonPressed) { //当触发标志为true时，即2秒内双击返回按键则退出APP
      this.platform.exitApp();
    } else {
      this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'top'
      }).present();
      this.backButtonPressed = true;
      setTimeout(() => this.backButtonPressed = false, 2000);//2秒内没有再次点击返回则将触发标志标记为false
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.registerBackButtonAction();//注册返回按键事件

      this.pages = [
        { title: 'StartPage', component: 'start' },
        { title: 'TabsPage', component: 'tabs' }
      ];
    });
  }


  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
