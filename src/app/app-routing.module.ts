import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { CatalogpageComponent } from './catalogpage/catalogpage.component';
import { NewspageComponent } from './newspage/newspage.component';
import { ProductComponent} from './product/product.component'
import { AuthGuardService } from './route-guards/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register.component';
import { DeactivateGuard } from './decativate.guard';

const routes: Routes = [
 { path: '', component: HomepageComponent },
    { path: 'login', component:LoginComponent},
    { path: 'catalogpage', component: CatalogpageComponent },
    { path: 'newspage', component: NewspageComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent, canDeactivate:[DeactivateGuard] },
    { path: 'product', component: ProductComponent, canActivate : [AuthGuardService] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
