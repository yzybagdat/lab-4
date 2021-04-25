import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converternumber'
})
export class ConverternumberPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1000) {
      return String(value);
    } else if (value < 1000000) {
      return (value / 1000).toFixed(1) + 'K';
    } else {
      return (value / 1000000).toFixed(1) + 'M';
    }
  }

}
