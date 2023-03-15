import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookerCardComponent } from './moduals/admin/component/cooker-card/cooker-card.component';
import { UserCardComponent } from './moduals/admin/component/user-card/user-card.component';
import { FoodcardComponent } from './moduals/admin/component/foodcard/foodcard.component';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
 
    RegisterComponent,
    CookerCardComponent,
    UserCardComponent,

     
       RegisterComponent,
       FoodcardComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
