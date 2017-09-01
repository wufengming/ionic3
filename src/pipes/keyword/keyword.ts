import {Pipe, PipeTransform} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

/**
 * Generated class for the KeywordPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'keyword',
})
export class KeywordPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, keyword: string): any {
    let Reg = new RegExp(keyword, 'i');
    if (value) {
      let res = value.replace(Reg, `<span style="color: :#338ec3;">${keyword ? keyword : ''}</span>`);

      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}
