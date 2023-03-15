import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CookerCardComponent } from './cooker-card/cooker-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { FoodcardComponent } from './foodcard/foodcard.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import {environment} from '../enviroments/environment'
import { OrdersCardComponent } from './orders-card/orders-card.component';
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CookerCardComponent,
    UserCardComponent,
    NavbarComponent,
    RegisterComponent,
    FoodcardComponent,
    OrdersCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(  environment.firebaseConfig )),
    provideFirestore(() => getFirestore()),

    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
