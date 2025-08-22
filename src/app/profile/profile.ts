import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  imports: [FormsModule],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile implements OnInit {
  // If we made it here the Auth Guard check has already succeeded

  // Create template for user object
  username: string = '';
  birthdate?: Date;
  age?: number;
  email: string = '';
  loggedIn: boolean = false;

  ngOnInit(): void {
    // retrieve the stored local storage data for current user
    let userData = localStorage.getItem('user');
    const user = JSON.parse(userData!);
    this.username = user.username;
    this.birthdate = user.birthdate;
    this.age = user.age;
    this.email = user.email;
    this.loggedIn = user.valid;
  }

  saveProfile() {
    const updatedUser = {
      username: this.username,
      birthdate: this.birthdate,
      age: this.age,
      email: this.email,
      valid: true,
    };

    localStorage.setItem('user', JSON.stringify(updatedUser));

    alert('Profile saved successfully!');
  }
}
