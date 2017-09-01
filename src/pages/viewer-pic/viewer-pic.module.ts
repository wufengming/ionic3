import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewerPicPage } from './viewer-pic';

@NgModule({
  declarations: [
    ViewerPicPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewerPicPage),
  ],
  exports: [
    ViewerPicPage
  ]
})
export class ViewerPicPageModule {}
