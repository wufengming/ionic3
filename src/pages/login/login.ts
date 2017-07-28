import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import 'rxjs/add/operator/toPromise';
import { LoginService } from "../../providers/login-service";
import { StorageService } from "../../providers/storage-service";
import { UserInfoData } from "../../model/UserInfoData";


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [LoginService]  // 注入服务
})
export class LoginPage {
  local: Storage;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,  //FormBuilder是一个工厂对象，用于编程创建ControlGroup和Control。
    public toastCtrl: ToastController,
    private loginSer: LoginService,
    private storageSer: StorageService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController) {

    this.navCtrl = navCtrl;
  }


  loginForm = this.formBuilder.group({
    'LoginID': ['admin@163.com', [Validators.required, Validators.pattern('^([a-zA-Z0-9_.]*)((@[a-zA-Z0-9_.]*)\.([a-zA-Z]{2}|[a-zA-Z]{3}))$')]],// 第一个参数是默认值
    'LoginPwd': ['123456', [Validators.required, Validators.minLength(4)]]
  });

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  };

  login(user, _event) {
    _event.preventDefault();//该方法将通知 Web 浏览器不要执行与事件关联的默认动作

    this.loadDefault();

    // this.loginSer.login(user).then(data => {

    //   //alert(JSON.stringify(data));
    //   if (data.Result.ID > 0)//登录成功
    //   {
    //     this.storageSer.write('UserData', data.Result);

    //     //测试写缓存
    //     let ss = this.storageSer.read<UserInfoData>('UserData');
    //     console.log(ss);

    //     alert("登陆成功!");
    //   }
    //   else {
    //     let toast = this.toastCtrl.create({
    //       message: '用户名或密码错误.',
    //       duration: 3000,
    //       position: 'middle',
    //       showCloseButton: true,
    //       closeButtonText: '关闭'
    //     });
    //     toast.present();
    //   }
    // });

  }

  signup(_event) {
    //阻止提交表单
    _event.preventDefault();

  }

  btnClick() {
    this.loadDefault();
    // this.loadText();
    // this.loadCustom();
  }

  loadDefault() {
    let loading = this.loadingCtrl.create({
      content: "loading...",//loading框显示的内容
      dismissOnPageChange: true, // 是否在切换页面之后关闭loading框
      showBackdrop: false //是否显示遮罩层
    });
    loading.present();// 弹出load框
    let item = 0;
    setInterval(() => {
      item+=10;
      loading.data.content = item;
    }, 100)

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  

    // 上面这段代码先是在按下按钮1000毫秒之后挑战页面，再在3000毫秒之后关闭loading框
    // 但是因为设置了切换页面之后关闭loading框，因此在切换页面后则关闭loading框
  }

  loadText() {
    let loading = this.loadingCtrl.create({
      spinner: "hide",
      content: "loading",
      duration: 3000
    });
    loading.present();

  }

  loadCustom() {
    let loading = this.loadingCtrl.create({
      spinner: "dots",// apinner既是loading框上的图标
      // content:`<div class="custom-spinner-container">
      // <div class="custom-spinner-box"></div>
      // </div>`,
      duration: 5000 // loading框持续的时间，默认在触发DidDismiss之后关闭，除非设置了该属性
    });
    loading.onDidDismiss(() => {
      console.log("Dismissed loading");
    });
    loading.present();
  }

}
