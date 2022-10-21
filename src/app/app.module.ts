import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { provideAuth,getAuth } from '@angular/fire/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component'
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component';
import { MainHomeComponent } from './components/main-home/main-home.component';
import { NavCartComponent } from './components/nav-cart/nav-cart.component';
import { BackgroundHoverDirective } from './directives/background-hover.directive';
import { SelectComponent } from './components/commons/select/select.component';
import { RemoveButtonComponent } from './components/commons/remove-button/remove-button.component';
import { HomeCartComponent } from './pages/home-cart/home-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    CartComponent,
    FiltersComponent,
    MainHomeComponent,
    NavCartComponent,
    BackgroundHoverDirective,
    SelectComponent,
    RemoveButtonComponent,
    HomeCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    provideAuth(() => getAuth()),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
