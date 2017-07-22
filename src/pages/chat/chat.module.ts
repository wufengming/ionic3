import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatPage } from './chat';
import { ListDetailsModule } from '../list-details/list-details.module';

@NgModule({
  declarations: [
    ChatPage,
  ],
  entryComponents:[
    ChatPage,
  ],
  imports: [
    IonicPageModule.forChild(ChatPage),
    ListDetailsModule
  ],
  exports: [
    ChatPage
  ]
})
export class ChatModule {}
