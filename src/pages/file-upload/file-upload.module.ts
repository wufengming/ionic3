import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileUploadPage } from './file-upload';

//上传图片插件
import { CommonModule }     from '@angular/common';
import { FileUploadModule } from 'ng2-file-upload';

//cordova 插件
import { Camera } from '@ionic-native/camera'
import { Transfer } from '@ionic-native/transfer';

@NgModule({
  declarations: [
    FileUploadPage,
  ],
  imports: [
    IonicPageModule.forChild(FileUploadPage),
    FileUploadModule,
    CommonModule
  ],
  exports: [
    FileUploadPage
  ],
  providers:[
    Camera,
    Transfer
  ]
})
export class FileUploadPageModule {}
