import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//上传图片插件
import { FileUploader } from 'ng2-file-upload';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgZone } from 'angular2/core';

import { Camera, CameraOptions } from '@ionic-native/camera'

import { Transfer } from '@ionic-native/transfer';

/**
 * Generated class for the FileUploadPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 *  IonicPage 没有设置name 默认的是 class名称
 *  
 */
@IonicPage()
@Component({
  selector: 'page-file-upload',
  templateUrl: 'file-upload.html',
})
export class FileUploadPage {

  /**
 * allowedMimeType	Array<string>	    可选值	
  allowedFileType	  Array<string>	    可选值	允许上传的文件类型
  autoUpload	      boolean	          可选值	是否自动上传
  isHTML5	          boolean	          可选值	是否是HTML5
  filters	          Array<FilterFunction>	可选值	
  headers	          Array<Headers>	  可选值	上传文件的请求头参数
  method	          string	          可选值	上传文件的方式
  authToken		      string	          可选值	auth验证的token
  maxFileSize	      number	          可选值	最大可上传文件的大小
  queueLimit	      number	          可选值	
  removeAfterUpload	boolean	          可选值	是否在上传完成后从队列中移除
  url	              string	          可选值	上传地址
  disableMultipart	boolean	          可选值	
  itemAlias	        string	          可选值	文件标记／别名
  authTokenHeader	  string	          可选值	auth验证token的请求头
  additionalParameter {   //自定义参数
     [key:string]:any;
  }
 */
  public uploader: FileUploader = new FileUploader({
    url: "http://www.download.com:80/uploadFile",
    method: "POST",
    itemAlias: "uploadedfile"      //文件别名

  });


  //loginForm: FormGroup;
  public path;
  /*profilePicture: any = "https://www.gravatar.com/avatar/";*/
  //给image设置默认的图片
  profilePicture: any = "assets/img/thumbnail-duckling-4.jpg";

  fileTransfer: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    public camera: Camera,
    public transfer:Transfer) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FileUploadPage');
  }

  /**
 * 表达提交的方法名和html总标签中写得要一样，通过value，可以得表达里面输入的值
 * @param value
 */
  login(value) {
    //const fileTransfer = new Transfer();

    var reqUri = "http://10.28.0.210:8080/uploadCenter.jsp";
    //第一个参数是文件的路径，第二个参数是服务器的url，第二个参数也可以是encodeURI(reqUri)
    // fileTransfer.upload(this.path, reqUri, options).then((data) => {
    //   alert("正在上传");
    // }, (err) => {
    //   alert("出错啦");
    // });
  }

  /**
   * 拍照
   */
  takePhoto() {
    var options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum: true,
      sourceType: this.camera.PictureSourceType.CAMERA,//拍照时，此参数必须有，否则拍照之后报错，照片不能保存
      correctOrientation: true
    }
    /**
     * imageData就是照片的路径，关于这个imageData还有一些细微的用法，可以参考官方的文档。
     */
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = imageData;
      this.path = base64Image;//给全局的文件路径赋值。
      this.profilePicture = base64Image;//给image设置source。
      alert(this.path);

      /*  this.zone.run(() => this.image = base64Image);*/
    }, (err) => {
      // Handle error，出错后，在此打印出错的信息。
      alert(err.toString());
    });
  }
  /**
   * 相册
   */
  choosePhoto() {

    var options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: 0,//0对应的值为PHOTOLIBRARY ，即打开相册
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = imageData;
      this.path = base64Image;
      this.profilePicture = base64Image;
      alert(base64Image);
    }, (err) => {
      // Handle error
      alert(err.toString());
    });

  }
  /**
   * 视频
   */
  chooseVideo() {
    var options = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: 0,
      mediaType: 1,//为1时允许选择视频文件
      allowEdit: true,
      correctOrientation: true
    }
    this.camera.getPicture(options).then((imageData) => {
      let base64Image = imageData;
      this.path = base64Image;
      this.profilePicture = "assets/img/8.jpg";//选择视频后，image另外显示一张图片，目前还无法获取视频的第一帧图片。
      alert(this.path);
    }, (err) => {
      // Handle error
      alert(err.toString());
    });

  }

  //选择文件
  selectedFileOnChanged(event: any) {
    // 打印文件选择名称
    console.log(event.target.value);
  }

  //上传文件
  uploadFile() {
    // 上传
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      // 上传文件成功
      if (status == 200) {
        // 上传文件后获取服务器返回的数据
        let tempRes = JSON.parse(response);
      } else {
        // 上传文件后获取服务器返回的数据错误
        alert("");
      }
    };
    this.uploader.queue[0].upload(); // 开始上传
  }
}
