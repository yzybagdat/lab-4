import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from '../../components/shop/shop.component';
import {ShopGenreComponent} from '../../components/shop/shop-genre/shop-genre.component';

const routes: Routes = [
  {
    path: '',
    component: ShopComponent
  },
  {
    path: 'genre/:genre',
    component: ShopGenreComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
