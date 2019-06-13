import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffersComponent } from './components/offers/offers.component';
import { DetailsOrdenComponent } from './components/details-orden/details-orden.component';
import { ListOrdenComponent } from './components/list-orden/list-orden.component';
import { LoginComponent } from './components/users/login/login.Component';
import { RegisterComponent } from './components/users/register/register.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
const routes = [
    { path: '**', component: Page404Component },
    { path: '', component: HomeComponent },
    { path: 'offers', component: OffersComponent },
    { path: 'orden:/id', component: DetailsOrdenComponent },
    { path: 'admin/list-orden', component: ListOrdenComponent },
    { path: 'user/login', component: LoginComponent },
    { path: 'user/register', component: RegisterComponent },
    { path: 'user/profile', component: ProfileComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map