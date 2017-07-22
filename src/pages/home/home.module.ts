import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { MapPageModule } from '../map-page/map-page.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    MapPageModule
  ],
  exports: [
    HomePage
  ]
})
export class HomeModule { }
