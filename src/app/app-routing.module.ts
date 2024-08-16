import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ProductComponent } from './product/product.component';
import { StocksComponent } from './stocks/stocks.component';
import { EmployeeComponent } from './employee/employee.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"forgetpassword",component:ForgetpasswordComponent},
  {path:"product",component:ProductComponent},
  {path:"stocks",component:StocksComponent},
  {path:"employee",component:EmployeeComponent},
  {path:"user",component:UserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
