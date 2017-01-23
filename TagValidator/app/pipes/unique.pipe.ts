import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';

@Pipe({
  name: 'unique',
  pure: false
})

export class Unique implements PipeTransform {

  transform(value: any, args?: string): any {

    let uniqueValues: any[] = [];
    for (let val of value) {
      if (uniqueValues.length > 0) {
        let isThere = false;
        for (let unique of uniqueValues) {
          if (val == unique) {
            isThere = true;
            break;
          }
        }
        if (!isThere) {
          uniqueValues.push(val);
        }
      } else {
        uniqueValues.push(val);
      }
    }
      return uniqueValues;

  }

}
