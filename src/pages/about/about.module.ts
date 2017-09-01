import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
//import {ViewerPicPage} from "../viewer-pic/viewer-pic";

@NgModule({
  declarations: [
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(AboutPage)
  ],
  exports: [
    AboutPage
  ]
})
export class AboutModule { }
