import { Component, inject, signal } from '@angular/core';
import { RouterOutlet, RouterLink, Router } from '@angular/router';
import { Auth } from './services/auth';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('week4-workshop');
  private router = inject(Router);
  private authService = inject(Auth);

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }
  logout(): void {
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
}
