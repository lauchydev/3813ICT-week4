import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  // Inject router
  private router = inject(Router);

  // Default user/password for the form
  email = '';
  password = '';

  // Error message
  errorMessage = '';

  users = [
    {
      email: 'user1@com.au',
      password: '123',
    },
    {
      email: 'user2@com.au',
      password: '456',
    },
    {
      email: 'user3@com.au',
      password: '12345',
    },
  ];

  validateUser(form: NgForm) {
    // Clear error message
    this.errorMessage = '';

    // User find() method to check if user is valid from input
    const validUser = this.users.find(
      (user) =>
        form.value.email == user.email && form.value.password == user.password
    );

    if (validUser) {
      // User was valid, send them to profile page
      this.router.navigate(['/profile']);
    } else {
      // User was invalid, display error
      this.errorMessage = 'Invalid email or password';
    }
  }
}
