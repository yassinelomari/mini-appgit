import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'MultiplicationPipe'})
export class MultiplicationPipe implements PipeTransform {
  transform(value: any, multiple: string): any {
    const val = parseFloat(multiple);
    return value * ((isNaN(val)) ? 1 : val);
  }

}

@Pipe({name: 'PuissancePipe'})
export class PuissancePipe implements PipeTransform {
  transform(value: any, multiple: string): any {
    const val = parseFloat(multiple);
    const puis = ((isNaN(val)) ? 1 : val);
    const valu = ((isNaN(value)) ? 1 : value);
    return Math.pow(valu, puis);
  }

}

