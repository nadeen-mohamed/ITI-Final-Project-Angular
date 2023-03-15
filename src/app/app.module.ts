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


@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    CookerCardComponent,
    UserCardComponent,

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
