import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
const routes: Routes = [

  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'Register',
    component:RegisterComponent,
  },
   {
    path: 'Navbar',
    component:NavbarComponent,
  },
  {
    path: 'Foodcard',
    component:FoodcardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
