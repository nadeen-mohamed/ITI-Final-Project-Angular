import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookerCardComponent } from './moduals/admin/component/cooker-card/cooker-card.component';
import { LoginComponent } from './login/login.component';

// import { RegisterComponent } from './register/register.component';
// import { UserCardComponent } from './user-card/user-card.component';

// import { FoodcardComponent } from './foodcard/foodcard.component';
import { AuthGuard } from './guards/auth.guard';
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
  // {
  //   path: 'Register',
  //   component:RegisterComponent,
  // },
  // {
  //   path: 'CookerCard',
  //   component:CookerCardComponent,
  // },
  // {
  //   path: 'UserCard',
  //   component:UserCardComponent,
  // },

 
  // {
  //   path: 'Foodcard',
  //   component:FoodcardComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
