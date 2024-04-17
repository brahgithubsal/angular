import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Command } from './Command';
import { PlaceOrderRequest } from './PlaceOrderRequest ';
import { ClientauthentificationserviceService } from './clientauthentificationservice.service';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient, private authService: ClientauthentificationserviceService) { }

  placeOrder(request: PlaceOrderRequest): Observable<Command> {
    const url = `${this.baseUrl}/commands/place-order`;

    // Retrieve the client ID and session ID from the authentication service
    const { clientId, sessionId } = this.authService.getCurrentClientIds();

    // Set credentials option to include cookies in the request
    const options = {
      withCredentials: true
    };

    return this.http.post<Command>(url, request, options);
  }
  
  
    getUserCommands(): Observable<Command[]> {
      const url = `${this.baseUrl}/commands/user-commands`;
    
      // Set credentials option to include cookies in the request
      const options = {
        withCredentials: true
      };
    
      return this.http.get<Command[]>(url, options);
    }
  }
  
