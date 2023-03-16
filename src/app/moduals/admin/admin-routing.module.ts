import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookerCardComponent } from 'src/app/moduals/admin/component/cooker-card/cooker-card.component';
import { OrdersComponent } from './component/orders/orders.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { FoodcardComponent } from './component/foodcard/foodcard.component';
import { UserCardComponent } from './component/user-card/user-card.component';

const routes: Routes = [{path:"",component:AdminDashboardComponent, children: [
  { path: 'cookercard', component: CookerCardComponent },
  {path:'usercard', component:UserCardComponent},
  {path:'foodcard', component:FoodcardComponent},
  {path:'order', component:OrdersComponent},
 
 
  { path: '', redirectTo: '/admin/cookercard', pathMatch: 'full' },
],}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
