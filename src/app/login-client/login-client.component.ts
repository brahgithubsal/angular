import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientauthentificationserviceService } from '../clientauthentificationservice.service';

@Component({
  selector: 'app-login-client',
  templateUrl: './login-client.component.html',
  styleUrls: ['./login-client.component.css']
})
export class LoginClientComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: ClientauthentificationserviceService) {}

  onSubmit(): void {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password)
        .subscribe(
          (response) => {
            // Check the response for success or failure
            if (response === 'Client logged in successfully') {
              // Navigate to the home page or any other route upon successful login
              this.router.navigate(['/home']); // Adjust the route as needed
            } else {
              // Set error message for invalid credentials
              this.errorMessage = 'Invalid email or password';
            }
          },
          (error) => {
            // Handle error from the backend or network error
            console.error('Error logging in:', error);
            this.errorMessage = 'An error occurred while logging in';
          }
        );
    } else {
      // Set error message if email or password is empty
      this.errorMessage = 'Please enter both email and password';
    }
  }
}
