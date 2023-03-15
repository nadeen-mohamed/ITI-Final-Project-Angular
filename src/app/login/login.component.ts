import { Component } from '@angular/core';

@Component({
  selector: 'login-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  handleFormSubmit(login: any) {
    console.log(login);
    if(login.valid){
      // CALL API TO SUBMIT DATA
      console.log(login.value)
    }
  }
}
