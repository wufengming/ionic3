import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
//页面
//import { MapPageModule } from '../map-page/map-page.module';
//import { FileUploadPageModule } from '../file-upload/file-upload.module';

//指令
import { MyPipe } from "../../pipes/my/my";
import { AutoFitLayout } from "../../components/auto-fit-layout/auto-fit-layout";
//组件
import { FlashCardComponent } from '../../components/flash-card/flash-card';
import { IonProductsComponent } from '../../components/ion-products/ion-products';

//服务
//import { BrowserServiceProvider } from '../../providers/browser-service/browser-service';


@NgModule({
  declarations: [
    HomePage,
    MyPipe,
    AutoFitLayout,
    FlashCardComponent,
    IonProductsComponent
  ],
  imports: [
    IonicPageModule.forChild(HomePage)
    //MapPageModule,
    //FileUploadPageModule
  ],
  exports: [
    HomePage
  ],
  providers:[

  ]
})
export class HomeModule { }
