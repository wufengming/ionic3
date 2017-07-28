import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StartPage } from './start';
//import { TabsModule } from '../tabs/tabs.module';

@NgModule({
  declarations: [
    StartPage,
  ],
  imports: [
    IonicPageModule.forChild(StartPage)
  ],
  exports: [
    StartPage
  ]
})
export class StartModule { }
