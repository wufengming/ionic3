import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the TabsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class TabsService {

  constructor(public http: Http) {
    console.log('Hello TabsService Provider');
  }

  public hide() {  //隐藏tabs的方法（函数）
    let tabs = document.querySelectorAll('.tabbar'); //选择所有的.tabbar并赋给tabs
    let footer = document.querySelectorAll('.footer');
    let scrollContent = document.querySelectorAll('.scroll-content');
    if (tabs !== null) {  //当tabs存在时，如隐藏了tabs就===null
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'none';   //隐藏tabs 这时就是null~~~
      });

      // fix for removing the margin if you got scorllable content
      setTimeout(() => {
        Object.keys(scrollContent).map((key) => {
          scrollContent[key].style.marginBottom = '0'; //使content默认marginBoottom清零
        });
        Object.keys(footer).map((key) => {
          footer[key].style.bottom = '0px';    //使footer默认bootom清零
        });
      }, 10)        //10毫秒后运行
    }
  }

  public show() {
    let tabs = document.querySelectorAll('.tabbar');
    let footer = document.querySelectorAll('.footer');
    let scrollContent = document.querySelectorAll('.scroll-content');
    if (tabs !== null) {
      Object.keys(tabs).map((key) => {
        tabs[key].style.display = 'flex'; //显示tabs
      });
    }
    // fix for removing the margin if you got scorllable content
    setTimeout(() => {
      Object.keys(scrollContent).map((key) => {
        scrollContent[key].style.marginBottom = '43px';//根据定义的tabs高度来定 (我有在app.scss自定义tabs的高度)
      });
      Object.keys(footer).map((key) => {
        footer[key].style.bottom = '43px';//根据定义的tabs高度来定 (我有在app.scss自定义tabs的高度，未定义的可以浏览器查看)
      });
    }, 10)
  }

}
