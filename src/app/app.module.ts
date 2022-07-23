import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { Page404Component } from './error/page404/page404.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { PutUserComponent } from './pages/user/put-user/put-user.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { PutProductComponent } from './pages/product/put-product/put-product.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LayoutComponent,
    FooterComponent,
    Page404Component,
    ListUserComponent,
    AddUserComponent,
    PutUserComponent,
    ListProductComponent,
    AddProductComponent,
    PutProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
