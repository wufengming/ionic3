import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { ThemeableBrowser, ThemeableBrowserOptions, ThemeableBrowserObject } from '@ionic-native/themeable-browser';
/*
  Generated class for the BrowserServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BrowserServiceProvider {

  // can add options from the original InAppBrowser in a JavaScript object form (not string)
  // This options object also takes additional parameters introduced by the ThemeableBrowser plugin
  // This example only shows the additional parameters for ThemeableBrowser
  // Note that that `image` and `imagePressed` values refer to resources that are stored in your app

  // 打开浏览器的配置
  private options: ThemeableBrowserOptions = {
    statusbar: {
      color: '#2eb3feff'
    },
    toolbar: {
      height: 44,
      color: '#2eb3feff'
    },
    title: {
      color: '#ffffffff',
      showPageTitle: true
    },
    backButton: {
      image: 'back',
      imagePressed: 'back_pressed',
      align: 'left',
      event: 'backPressed'
    },
    forwardButton: {
      image: 'forward',
      imagePressed: 'forward_pressed',
      align: 'left',
      event: 'forwardPressed'
    },
    closeButton: {
      image: 'close',
      imagePressed: 'close_pressed',
      align: 'left',
      event: 'closePressed'
    },
    /*customButtons: [
      {
        image: 'share',
        imagePressed: 'share_pressed',
        align: 'right',
        event: 'sharePressed'
      }
    ],
    menu: {
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
          label: 'Test!'
        }
      ]
    },*/
    backButtonCanClose: true
  };

  constructor(private url: string, customButtons: any, menu: any) {
    //console.log('Hello BrowserServiceProvider Provider');
    this.options.customButtons = customButtons;
    this.options.menu = menu;
  }

  launch() {
    let themeableBrowser = new ThemeableBrowser();
    let browser: ThemeableBrowserObject =themeableBrowser.create(this.url, '_blank', this.options);   //_self  页面弹出  _blank页面在框架内

    return browser;
  }

}
