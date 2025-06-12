import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,

  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  onSubmit() {
    console.log('Login form submitted');
    // Add form handling logic here
  }
}
