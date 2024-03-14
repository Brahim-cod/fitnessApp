import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
} from '@angular/router';

import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'mg-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  
})
export class LoginComponent {


  constructor(private authService: AuthService, private router: Router) {}

  async login(email: string, password: string){
    console.log('Log in with ', email, password)


    const user = await this.authService.login(email, password)
    if(user){
      this.router.navigate([''])
    }
  }
}
