import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';

import { UserCardComponent } from './moduals/admin/component/user-card/user-card.component';
import { FoodcardComponent } from './moduals/admin/component/foodcard/foodcard.component';
import { environment } from 'src/enviroments/environment';


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
 
    RegisterComponent,
   
    UserCardComponent,

     
       RegisterComponent,
       FoodcardComponent,
  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    FormsModule,
    provideFirebaseApp(() => initializeApp(  environment.firebaseConfig )),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
