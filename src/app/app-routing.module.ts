import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookerCardComponent } from './moduals/admin/component/cooker-card/cooker-card.component';
import { LoginComponent } from './login/login.component';

 import { RegisterComponent } from './register/register.component';
 //import { UserCardComponent } from './user-card/user-card.component';

//import { FoodcardComponent } from './foodcard/foodcard.component';
import { AuthGuard } from './guards/auth.guard';
//import { FoodcardComponent } from './foodcard/foodcard.component';
import { OrdersCardComponent } from './moduals/admin/component/orders-card/orders-card.component';
import { NavbarComponent } from './moduals/admin/component/navbar/navbar.component';
import { UserCardComponent } from './moduals/admin/component/user-card/user-card.component';
import { FoodcardComponent } from './moduals/admin/component/foodcard/foodcard.component';
const routes: Routes = [
  {
      path: 'admin',
      canActivate:[AuthGuard],
      loadChildren: () =>
      import('./moduals/admin/admin.module').then((m) => m.AdminModule),
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

   {
    path: 'Navbar',
    component:NavbarComponent,
  },
  {
    path: 'Foodcard',
    component:FoodcardComponent,
  },
  {
    path: 'Ordercard',
    component:OrdersCardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
