import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPopupPage } from './my-popup';

@NgModule({
  declarations: [
    MyPopupPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPopupPage),
  ],
  exports: [
    MyPopupPage
  ]
})
export class MyPopupPageModule {}
