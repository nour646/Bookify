import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  email: string = '';
  password: string = '';

  constructor(private router: Router, private authService: AuthService){}

  closeLoginForm(): void {
    this.router.navigate(['/']);
  }

  login(){

    this.authService.login(this.email, this.password).subscribe(
      (response) => {
        // If login is successful, you can store the token in localStorage or a service
        // and navigate to the desired componen
        console.log(response); // You might want to handle the response appropriately
        // Example of navigating to a component:
        // this.router.navigate(['/dashboard']);
      },
      (error) => {
        // Handle authentication error (e.g., show an error message)
        console.error(error);
      }
    );

  }
}
