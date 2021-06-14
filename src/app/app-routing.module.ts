import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';
import { userCreateComponent } from './user-create/user-create.component';
import { userEditComponent } from './user-edit/user-edit.component';
import { userViewComponent } from './user-view/user-view.component';
import { userComponent} from './user/user.component';

const routes: Routes = [
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "",
    component : DashboardComponent
  },
  {
    path : "login",
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "productView",
    component : ProductViewComponent
  },
  {
    path : "productCreate",
    component : ProductCreateComponent
  },
  {
    path : "productEdit",
    component : ProductEditComponent
  },
  {
    path : "productEdit/:id",
    component : ProductEditComponent
  },
  {
    path : "productView/:id",
    component : ProductViewComponent
  },
  {
    path : "product",
    component : ProductComponent
  },
  {
    path : "user",
    component : userComponent
  },
  {
    path : "userCreate",
    component : userCreateComponent
  },
  {
    path : "userEdit",
    component : userEditComponent
  },
  {
    path : "userEdit/:id",
    component : userEditComponent
  },
  {
    path : "userView/:id",
    component : userViewComponent
  },
  {
    path : "userView",
    component : userViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
