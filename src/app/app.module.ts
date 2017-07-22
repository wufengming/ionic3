import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

//页面要加这里
//import { AboutModule } from '../pages/about/about.module';
//import { ContactModule } from '../pages/contact/contact.module';
//import { HomeModule } from '../pages/home/home.module';
import { TabsModule } from '../pages/tabs/tabs.module';
//import { StartModule } from '../pages/start/start.module';
//import { ChatModule } from '../pages/chat/chat.module';
//import { ListDetailsModule } from '../pages/list-details/list-details.module';
//import { LoginModule } from '../pages/login/login.module';
//import { MapPageModule } from '../pages/map-page/map-page.module';

//服务要加这里
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginService } from "../providers/login-service";
import { HttpService } from "../providers/http-service";
import { StorageService } from "../providers/storage-service";

//指令
import { AutoFitLayout } from "../components/auto-fit-layout/auto-fit-layout";

/**
 *declarations（声明一下这个模块内部成员）：本模块中拥有的视图类。angular 有三种视图类：Components(组件)、Directives(指令)、Pipes(管道);
 *exports：暴露该模块中的组件，指令以及管道等, 以便提供给其他Angular2模块使用
 *providers：模块内部成员能够访问使用的Service；内部和外部Service都可以放在这里声明，因为Service的权限控制依赖于ng的DI而不是module。
 *imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
 *bootstrap：根组件,此处声明当模块启动加载的时候同时执行启动加载的组件，这些组件会自动添加到entryComponents中。
 *entryCompoenents: 声明在模块定义时进行编译的组件，当模块加载的时候回生成ComponentFactory并保存在ComponentFactoryResolver，使用ComponentFactoryResolver创建组件的时候应该现在此处进行声明。
*/


/**
 * 
 * imports：导入其他module，其它module暴露的出的Components、Directives、Pipes等可以在本module的组件中被使用。
 * declarations：模块内部Components/Directives/Pipes的列表，声明一下这个模块内部成员
 * exports：用来控制将哪些内部成员暴露给外部使用。
 * providers：服务提供者，主要用来定义服务。指定应用程序的根级别需要使用的service。
 * bootstrap：通常是app启动的根组件，一般只有一个component
 * entryCompoenents: 不会再模板中被引用到的组件
*/
@NgModule({
  declarations: [
    MyApp,
    AutoFitLayout
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TabsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      tabsPlacement: 'bottom',
      pageTransition: 'ios-transition',
      tabsHideOnSubPages: 'true'         //隐藏全部子页面tabs
    }),
    IonicStorageModule.forRoot() //LocalStore
  ],
  bootstrap: [IonicApp],
  entryComponents: [ MyApp],
  providers: [
    StatusBar,
    SplashScreen,
    LoginService,
    HttpService,
    StorageService,
    Storage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
