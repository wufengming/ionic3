import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPickerPage } from './multi-picker';

//插件
import {MultiPickerModule} from "ion-multi-picker";
import {CityPickerModule} from "ionic2-city-picker";
import {CityServiceProvider} from "../../providers/city-service/city-service";


@NgModule({
  declarations: [
    MultiPickerPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiPickerPage),
    MultiPickerModule,                 //Import MultiPickerModule
    CityPickerModule
  ],
  exports: [
    MultiPickerPage
  ],
  providers:[
    CityServiceProvider
  ]
})
export class MultiPickerPageModule {}
