import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IonProductsComponent } from './ion-products';

@NgModule({
  declarations: [
    IonProductsComponent,
  ],
  imports: [
    IonicPageModule.forChild(IonProductsComponent),
  ],
  exports: [
    IonProductsComponent
  ]
})
export class IonProductsComponentModule {}
