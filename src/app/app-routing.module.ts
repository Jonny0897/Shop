import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SigninComponent } from './components/signin/signin.component';
import { LoginComponent } from './components/login/login.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { FiltersComponent } from './components/filters/filters.component';
import { CartComponent } from './components/cart/cart.component';
import { NavCartComponent } from './components/nav-cart/nav-cart.component';


const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'login', component: LoginComponent },
  { path: '', component: NavbarComponent}, 
  { path: 'home', component: HomeComponent },
  { path: '', component: MainHomeComponent},
  { path: '', component: FiltersComponent},
  { path: 'cart', component: NavCartComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
