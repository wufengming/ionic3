import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SliderTabPage } from './slider-tab';

@NgModule({
  declarations: [
    SliderTabPage,
  ],
  imports: [
    IonicPageModule.forChild(SliderTabPage),
  ],
  exports: [
    SliderTabPage
  ]
})
export class SliderTabPageModule {}
