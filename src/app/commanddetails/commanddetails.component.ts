import { Component, OnInit } from '@angular/core';
import { ServiceModel } from '../service';
import { ServiceService } from '../service.service';
import { CommandService } from '../command-service.service';
import { PlaceOrderRequest } from '../PlaceOrderRequest ';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientauthentificationserviceService } from '../clientauthentificationservice.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-commanddetails',
  templateUrl: './commanddetails.component.html',
  styleUrls: ['./commanddetails.component.css']
})
export class CommanddetailsComponent implements OnInit {

  addedService: ServiceModel | undefined;
  services: ServiceModel[] = [];
  errorMessage: string = '';

  id: any;

  constructor(
    private serviceService: ServiceService,
    private commandService: CommandService,
    private router: Router,
    private route: ActivatedRoute,
    private authService: ClientauthentificationserviceService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.goToCommandDetails(this.id); // Call the method to fetch service details
      this.addedService = history.state.service;

    });
  }

  goToCommandDetails(id: number): void {
    this.serviceService.getServiceById(id).subscribe(
      (data: ServiceModel) => {
        this.services = [data]; // Store the data in an array to match the type of 'services'
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  placeOrder(serviceId: number): void {
    const clientIds = this.authService.getCurrentClientIds();
    
    if (clientIds && clientIds.clientId) {
      const request: PlaceOrderRequest = {
        serviceId,
        clientId: parseInt(clientIds.clientId, 10), // Parse client ID to a number
         // Assuming user ID 2 is hardcoded for now
      };
  
      this.commandService.placeOrder(request).subscribe(
        (response) => {
          console.log('Order placed successfully:', response);
          this.router.navigate(['/ThankYou']);
        },
        (error) => {
          console.error('Error placing order:', error);
          // Handle error
        }
      );
    } else {
      console.log('Client not login .');
      // Handle the case where the client ID is not available
    }
  }
  isAuthenticated(): boolean {
    // Check if the user is authenticated
    return this.authService.isAuthenticated();
  }

  logout(): void {
    // Perform logout operation
    this.authService.logout().subscribe(() => {
      // Clear current user data
      this.authService.clearCurrentUser();
      // Redirect to home page
      this.router.navigate(['/loginClient']);
    });
  }



}