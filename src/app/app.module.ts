import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { RegisterComponent } from './components/users/register/register.component';
import { Page404Component } from './components/page404/page404.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsMesaComponent } from './components/details-mesa/details-mesa.component';
import { DetailsOrdenComponent } from './components/details-orden/details-orden.component';
import { ListOrdenComponent } from './components/list-orden/list-orden.component';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    ModalComponent,
    ProfileComponent,
    RegisterComponent,
    Page404Component,
    HeroComponent,
    HomeComponent,
    OffersComponent,
    DetailsMesaComponent,
    DetailsOrdenComponent,
    ListOrdenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
