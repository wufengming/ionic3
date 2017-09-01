import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactsPage } from './contacts';
import {KeywordPipe} from "../../pipes/keyword/keyword";

@NgModule({
  declarations: [
    ContactsPage,
    KeywordPipe
  ],
  imports: [
    IonicPageModule.forChild(ContactsPage),
  ],
  exports: [
    ContactsPage
  ]
})
export class ContactsPageModule {}
