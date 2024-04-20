import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.apiBaseUrl}/auth/login`;
    return this.http.post(loginUrl, { email, password }, { responseType: 'text', withCredentials: true });
  }

  register(email: string, password: string, name: string): Observable<any> {
    const registerUrl = `${this.apiBaseUrl}/auth/register`;
    return this.http.post(registerUrl, { email, password, name }, { responseType: 'text', withCredentials: true });
  }

  logout(): Observable<any> {
    const logoutUrl = `${this.apiBaseUrl}/auth/logout`;
    return this.http.post(logoutUrl, null, { responseType: 'text', withCredentials: true });
  }

  isAuthenticated(): boolean {
    // Check if a session exists
    return sessionStorage.getItem('currentUser') !== null;
  }

  getCurrentUser(): any {
    // Retrieve current user from session
    const user = sessionStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }

  setCurrentUser(user: any): void {
    // Set current user in session
    sessionStorage.setItem('currentUser', JSON.stringify(user));
  }

  clearCurrentUser(): void {
    // Clear current user from session
    sessionStorage.removeItem('currentUser');
  }

  // Logout and clear session
  logoutAndClearSession(): Observable<any> {
    return new Observable((observer) => {
      this.logout().subscribe(
        () => {
          this.clearCurrentUser();
          observer.next();
          observer.complete();
        },
        (error) => {
          observer.error(error);
        }
      );
    });
  }
}
