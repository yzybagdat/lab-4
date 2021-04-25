import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditorialComponent} from '../../components/editorial/editorial.component';
import {EditorialDetailsComponent} from '../../components/editorial/editorial-details/editorial-details.component';
import {EditorialCreateComponent} from '../../components/editorial/editorial-create/editorial-create.component';
import {EditorialEditGuard} from '../../guards/editorial-edit.guard';
import {LoginPageGuard} from '../../guards/login-page.guard';
import {EditorialCreateV2Component} from '../../components/editorial/editorial-create-v2/editorial-create-v2.component';
import {AuthService} from '../../services/auth.service';
import {AuthStatusGuard} from '../../guards/auth-status.guard';

const routes: Routes = [
  {
    path: '',
    component: EditorialComponent
  },
  {
    path: ':id',
    component: EditorialDetailsComponent
  },
  {
    path: ':id/edit',
    component: EditorialCreateComponent,
    // canActivate: [EditorialEditGuard]
  },
  {
    path: ':id/create',
    component: EditorialCreateV2Component,
    canActivate: [AuthStatusGuard]
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
export class EditorialRoutingModule { }
