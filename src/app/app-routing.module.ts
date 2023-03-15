import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookerCardComponent } from './cooker-card/cooker-card.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { UserCardComponent } from './user-card/user-card.component';
const routes: Routes = [
  {
      path: 'Navbar',
       component:NavbarComponent,
   },

  {
    path: 'login',
    component:LoginComponent,
  },
  {
    path: 'Register',
    component:RegisterComponent,
  },
  {
    path: 'CookerCard',
    component:CookerCardComponent,
  },
  {
    path: 'UserCard',
    component:UserCardComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
