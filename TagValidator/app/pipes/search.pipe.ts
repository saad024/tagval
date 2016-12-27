import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';


@Pipe({name: 'exponentialStrength'})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}


// @Pipe({ 
//     name: 'searchPipe'
//  })

// export class SearchPipe implements PipeTransform {

//   transform(value:any,args?:any):any { 

//      console.log(value);
//      console.log(args);

     
//      let resultArray: any[] = [] ;

//      for (let item of value){
//        if(item.match('^.*' + args[0] + '.*$')){
//          resultArray.push(item);
//        }
//      }
      
//      return resultArray;
//   }
  
// }
