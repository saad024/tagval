import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';

@Pipe({
  name: 'searchFilter'
})

export class SearchFilterPipe implements PipeTransform {

  transform(value: any, args?: string): any {

    let resultArray: any[] = [];

    if (!args) {
      return value;
    }

    for (let item of value) {
      if (item.match('^.*' + args + '.*$')) {
        resultArray.push(item);
      }
    }

    return resultArray;
  }

}
