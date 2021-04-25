import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileRoutingModule} from './profile-routing.module';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatChipsModule
  ]
})
export class ProfileModule { }
