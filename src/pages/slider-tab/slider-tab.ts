import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the SliderTabPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name:'sliderTab'
})
@Component({
  selector: 'page-slider-tab',
  templateUrl: 'slider-tab.html',
})
export class SliderTabPage {

  @ViewChild('mySlider') slider: Slides;

  private selected_segment = 0;
  top_segment='top_0';
  segment = 'sites';
  data_group: Array<{id:number, title: string, details: any, icon: string, showDetails: boolean}> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    for(let i = 0; i < 10; i++ ){
      this.data_group.push({
        id: i,
        title: 'Title '+i,
        details: [{"a":"Lorem"}, {"a":"ipsum"}, {"a":"dolor"},{"a":"sit"},{"a":"amet"}],
        icon: 'ios-add-circle-outline',
        showDetails: false
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SliderTabPage');
  }

  select(index){
    if (index === 2){
      this.top_segment = 'top_2';
    }
    if (index === 1){
      this.top_segment = 'top_1';
    }
    if (index === 0){
      this.top_segment = 'top_0';
    }
    this.slider.slideTo(index, 500);
  }

  select_segment(index) {
    this.selected_segment = index;
    console.log("this.selected_segment: " + this.selected_segment);
  }

  panEvent(evn){
    let currentIndex = this.slider.getActiveIndex();
    if (currentIndex === 0){
      this.top_segment = 'top_0';
    }
    if (currentIndex === 1){
      this.top_segment = 'top_1';
    }
    if (currentIndex === 2){
      this.top_segment = 'top_2';
    }
  }

  onSlideChanged($event) {
    if (((($event.touches.startX - $event.touches.currentX) <= 100) || (($event.touches.startX - $event.touches.currentX) > 0)) && (this.slider.isBeginning() || this.slider.isEnd()))
    {
      console.log("interdit Direction");
    }
    else
    {
      console.log("OK Direction");
    }
  }

  toggleDetails(data) {
    if (data.showDetails) {
      data.showDetails = false;
      data.icon = 'ios-add-circle-outline';
    } else {
      data.showDetails = true;
      data.icon = 'ios-remove-circle-outline';
    }
  }
}
