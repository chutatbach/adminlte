import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './error/page404/page404.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { AddProductComponent } from './pages/product/add-product/add-product.component';
import { ListProductComponent } from './pages/product/list-product/list-product.component';
import { PutProductComponent } from './pages/product/put-product/put-product.component';
import { AddUserComponent } from './pages/user/add-user/add-user.component';
import { ListUserComponent } from './pages/user/list-user/list-user.component';
import { PutUserComponent } from './pages/user/put-user/put-user.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ListProductComponent
      },
      {
        path: 'addproduct',
        component: AddProductComponent
      },
      {
        path: 'putproduct',
        component: PutProductComponent
      },
      {
        path: 'users',
        component: ListUserComponent
      },
      {
        path: 'adduser',
        component: AddUserComponent
      },
      {
        path: 'putuser',
        component: PutUserComponent
      },
      {
        path: '404',
        component: Page404Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
