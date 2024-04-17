import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CookieService } from 'ngx-cookie';

@Injectable({
  providedIn: 'root'
})
export class ClientauthentificationserviceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private cookieService: CookieService) {}


  login(email: string, password: string): Observable<any> {
    const loginUrl = `${this.baseUrl}/clients/login`;
    return this.http.post(loginUrl, { email, password }, { responseType: 'text', withCredentials: true });
  }
  

  register(email: string, password: string, name: string): Observable<any> {
    const registerUrl = `${this.baseUrl}/clients/register`;
    return this.http.post(registerUrl, { email, password, name }, { responseType: 'text', withCredentials: true });
  }

  isAuthenticated(): boolean {
    // Check if client ID exists in cookies
    return this.getClientIdFromCookie() !== null;
  }

  getCurrentClientIds(): { clientId: string | null, sessionId: string | null } {
    // Retrieve client ID and session ID from cookies
    const clientId = this.cookieService.get('clientId');
    const sessionId = this.cookieService.get('JSESSIONID');
    return { clientId: clientId !== undefined ? clientId : null, sessionId: sessionId !== undefined ? sessionId : null };
  }

  private getClientIdFromCookie(): string | null {
    // Use ngx-cookie-service to get the client ID
    const clientId = this.cookieService.get('clientId');
    return clientId !== undefined ? clientId : null;
  }

  setCurrentClientId(clientId: string): void {
    // Use ngx-cookie-service to set the client ID
    this.cookieService.put('clientId', clientId);
  }

  clearCurrentClientId(): void {
    // Use ngx-cookie-service to remove the client ID
    this.cookieService.remove('clientId');
  }
}
