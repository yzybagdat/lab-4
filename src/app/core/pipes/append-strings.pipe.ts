import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appendStrings'
})
export class AppendStringsPipe implements PipeTransform {

  transform(value: string[], symbol: string): string {
    let res = '';

    for (let i = 0; i < value.length; i++) {
      res += value[i];
      if (i < value.length - 1) {
        res += symbol + ' ';
      }
    }

    return res;
  }

}
