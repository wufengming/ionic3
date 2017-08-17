import { Component } from '@angular/core';

/**
 * Generated class for the FlashCardComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  flipped:boolean=false;
  text: string;

  constructor() {
    console.log('Hello FlashCardComponent Component');
    this.text = 'Hello World';
  }

  flip(){
    this.flipped=!this.flipped;
  }

}
