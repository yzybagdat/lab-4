import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discountvalue'
})
export class DiscountvaluePipe implements PipeTransform {

  transform(value: number, discount: number): number {
    const newPrice = +(value * (100 - discount) / 100);
    return newPrice;
  }

}
