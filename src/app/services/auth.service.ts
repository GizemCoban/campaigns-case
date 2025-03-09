import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly MOCK_USER_INFORMATION = {
    username: 'admin',
    password: '123456',
  };

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login(username: string, password: string): boolean {
    if (
      username === this.MOCK_USER_INFORMATION.username &&
      password === this.MOCK_USER_INFORMATION.password
    ) {
      localStorage.setItem('isLoggedIn', 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
