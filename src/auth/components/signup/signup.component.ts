import { Component, Inject } from '@angular/core';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  constructor(private authService: AuthService) {}

  signup(email: string, password: string){
    console.log("Sign Up with ", email, password);
    this.authService.signup(email, password);
  }
}
