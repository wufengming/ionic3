import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutDetailPage } from './about-detail';

@NgModule({
  declarations: [
    AboutDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutDetailPage),
  ],
  exports: [
    AboutDetailPage
  ]
})
export class AboutDetailPageModule {}
