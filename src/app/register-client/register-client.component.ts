import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClientauthentificationserviceService } from '../clientauthentificationservice.service';

@Component({
  selector: 'app-register-client',
  templateUrl: './register-client.component.html',
  styleUrls: ['./register-client.component.css']
})
export class RegisterClientComponent {
  email: string = '';
  password: string = '';
  name: string = '';
  errorMessage: string = '';

  constructor(private authService: ClientauthentificationserviceService, private router: Router) {}

  onSubmit(): void {
    if (this.email && this.password && this.name) {
      this.authService.register(this.email, this.password, this.name).subscribe(
        (response) => {
          // Check the response for success or failure
          if (response === 'Client registered successfully') {
            // Registration successful, navigate to the home page
            this.router.navigate(['/home']); // Adjust this route according to your application
          } else {
            // Set error message for registration failure
            this.errorMessage = 'Registration failed';
          }
        },
        (error) => {
          // Handle error from the backend or network error
          console.error('Error registering client:', error);
          this.errorMessage = 'An error occurred while registering';
        }
      );
    } else {
      // Set error message if any field is empty
      this.errorMessage = 'Please fill in all fields';
    }
  }
}
