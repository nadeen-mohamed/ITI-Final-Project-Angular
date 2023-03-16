import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserCardComponent } from './component/user-card/user-card.component';
import { CookerCardComponent } from './component/cooker-card/cooker-card.component';
import { OrdersComponent } from './component/orders/orders.component';
import { FoodcardComponent } from './component/foodcard/foodcard.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    NavbarComponent,
    UserCardComponent,
    CookerCardComponent,
    OrdersComponent,
    FoodcardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
