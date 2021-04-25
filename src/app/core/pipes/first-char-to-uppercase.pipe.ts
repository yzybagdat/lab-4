import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstCharToUppercase'
})
export class FirstCharToUppercasePipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1);
  }

}
