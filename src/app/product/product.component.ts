import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../objects/Product';


@Component({
  templateUrl: "product.component.html",
})
export class ProductComponent implements OnInit
{

  products: Product[] | undefined;
  constructor(private productService: ProductService){
  }

  ngOnInit() {

    this.productService.getProducts()
      .subscribe(data => {
        this.products=data;
      })
  }

}
