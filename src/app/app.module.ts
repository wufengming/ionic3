import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler, Config} from 'ionic-angular';
import {MyApp} from './app.component';
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//插件
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AppVersion} from '@ionic-native/app-version';
import {Camera} from '@ionic-native/camera';
import {Toast} from '@ionic-native/toast';
import {File} from '@ionic-native/file';
import {Transfer} from '@ionic-native/transfer';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {ImagePicker} from '@ionic-native/image-picker';
import {Network} from '@ionic-native/network';
import {AppMinimize} from '@ionic-native/app-minimize';

//服务要加这里
import {LoginService} from "../providers/login-service";
import {LoginHttpService} from "../providers/login-http-service";
import {StorageService} from "../providers/storage-service";
import {TabsService} from '../providers/tabs-service';
import {NativeService} from "../providers/NativeService";
import {GlobalData} from "../providers/GlobalData";
import {Utils} from "../providers/Utils";
import {Logger} from "../providers/Logger";
import {ModalFromRightEnter, ModalFromRightLeave, ModalScaleEnter, ModalScaleLeave} from "./modal-transitions";

//指令


//常量
import {ENABLE_FUNDEBUG, IS_DEBUG, FUNDEBUG_API_KEY, APPVERSION} from "../providers/Constants";

//fundebug
//import * as fundebug from "fundebug-javascript";

//安装依赖:cnpm i fundebug-javascript --save
//https://docs.fundebug.com/notifier/javascript/framework/ionic2.html
declare var require: any;
let fundebug: any = require("fundebug-javascript");

fundebug.apikey = FUNDEBUG_API_KEY;
fundebug.appversion = APPVERSION;   //应用版本
fundebug.releasestage = IS_DEBUG ? 'development' : 'production';//应用开发阶段，development:开发;production:生产
fundebug.silent = !ENABLE_FUNDEBUG;//暂时不需要使用Fundebug，可以选择配置安静模式，将silent属性设为true
// 定义FundebugErrorHandler
class FundebugErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    fundebug.notifyError(err);
    console.error(err)
  }
}


/**
 *declarations（声明一下这个模块内部成员）：本模块中拥有的视图类。angular 有三种视图类：Components(组件)、Directives(指令)、Pipes(管道);
 *exports：暴露该模块中的组件，指令以及管道等, 以便提供给其他Angular2模块使用
 *providers：模块内部成员能够访问使用的Service；内部和外部Service都可以放在这里声明，因为Service的权限控制依赖于ng的DI而不是module。
 *imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
 *bootstrap：根组件,此处声明当模块启动加载的时候同时执行启动加载的组件，这些组件会自动添加到entryComponents中。
 *entryCompoenents: 声明在模块定义时进行编译的组件，当模块加载的时候回生成ComponentFactory并保存在ComponentFactoryResolver，使用ComponentFactoryResolver创建组件的时候应该现在此处进行声明。
 declarations: [],   // 用到的组件，指令，管道
 providers: [],      // 依赖注入服务
 imports: [],        // 导入需要的模块
 exports: [],        // 导出的模块，跨模块交流
 entryComponents: [] // 需提前编译好的模块
 bootstrap: []       // 设置根组件
 */

@NgModule({
  declarations: [MyApp],
  imports: [
    BrowserModule,
    //BrowserAnimationsModule,           //..引入animation动画模块 Cannot read property 'prototype' of undefined
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: 'true'         //所有子页面tabs隐藏(一般app都做了)
    }),
    IonicStorageModule.forRoot() //LocalStore
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    AppVersion,
    Camera,
    Toast,
    File,
    Transfer,
    InAppBrowser,
    ImagePicker,
    Network,
    AppMinimize,

<<<<<<< HEAD
=======
    {provide: ErrorHandler, useClass: FundebugErrorHandler},
    //{ provide: ErrorHandler, useClass: IonicErrorHandler },
>>>>>>> 94045aed8b2c7aaf76c7a774b4fb4cf2cc8ac123
    LoginService,
    LoginHttpService,
    StorageService,
    NativeService,
    TabsService,
    GlobalData,
    Utils,
    Logger,
    {provide: ErrorHandler, useClass: FundebugErrorHandler}
    //{ provide: ErrorHandler, useClass: IonicErrorHandler },

  ]
})
export class AppModule {
  constructor(public config: Config) {
    this.setCustomTransitions();
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
    this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    this.config.setTransition('modal-scale-enter', ModalScaleEnter);
    this.config.setTransition('modal-scale-leave', ModalScaleLeave);
  }
}
