import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the MyPipe pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'my',
})
export class MyPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, args:any[]) {
    value =value + '';

    return value.toUpperCase()+ " word";
  }
}
