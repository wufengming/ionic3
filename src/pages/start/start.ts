import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../tabs/tabs';
import { Slide } from "./../../model/IslideModel";
/**
 * Generated class for the Start page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'start'
})
@Component({
  selector: 'page-start',
  templateUrl: 'start.html',
})
export class StartPage {
  @ViewChild('ionSlides') ionSlides;
  slides: Slide[];
  showSkip = true;
  local:Storage;

  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public storage: Storage) {
    this.slides = [
      {
        title: 'Welcome to <b>ICA</b>',
        description: 'The <b>Ionic Conference App</b> is a practical preview of the Ionic Framework in action, and a demonstration of proper code use.',
        image: 'assets/img/ica-slidebox-img-1.png',
      },
      {
        title: 'What is Ionic?',
        description: '<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.',
        image: 'assets/img/ica-slidebox-img-2.png',
      },
      {
        title: 'What is Ionic Platform?',
        description: 'The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.',
        image: 'assets/img/ica-slidebox-img-3.png',
      }
    ];

    
  }

  startApp() {
    this.navCtrl.push(TabsPage);

    // this.local.set('isStart',true);

    // this.local.get('isStart').then((result)=>{
    //   console.log('isStart:', result);
    // });

      this.storage.ready().then(() => {
        this.storage.set('isStart', true);
        this.storage.get('isStart').then((val) => {
          console.log('isStart:', val);
        })
     });

  }

  onSlideChanged($slider) {
    console.log($slider);
    this.showSkip = !$slider.isEnd;
  }

  onSlideMove($slider){

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Start');
  }
  // autoPlay() {
  //   this.ionSlides.startAutoplay();
  // }

  // //页面进入时启动自动播放  
  // ionViewDidEnter() {
  //   this.ionSlides.startAutoplay();
  // }


  // //页面离开时停止自动播放  
  // ionViewDidLeave() {
  //   this.ionSlides.stopAutoplay();
  // }

}