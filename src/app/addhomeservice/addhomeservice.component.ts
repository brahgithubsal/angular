import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceModel } from '../service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addhomeservice',
  templateUrl: './addhomeservice.component.html',
  styleUrls: ['./addhomeservice.component.css']
})
export class AddhomeserviceComponent implements OnInit {
  addedService: ServiceModel | undefined;
  services: ServiceModel[] = [];
  editService: ServiceModel | null = null;
  deleteService: ServiceModel | null = null;

  constructor(
    private router: Router,
    private serviceService: ServiceService
  ) {}

  ngOnInit(): void {
    this.addedService = history.state.service;
    this.getServices();
  }

  getServices(): void {
    this.serviceService.getServicesPerUser().subscribe(
      (data: ServiceModel[]) => {
        this.services = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onUpdateService(service: ServiceModel): void {
    this.serviceService.updateService(service).subscribe(
      (updatedService: ServiceModel) => {
        const index = this.services.findIndex((s) => s.id === updatedService.id);
        if (index !== -1) {
          this.services[index] = updatedService;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onDeleteService(serviceId: number): void {
    this.serviceService.deleteService(serviceId).subscribe(
      () => {
        const index = this.services.findIndex((s) => s.id === serviceId);
        if (index !== -1) {
          this.services.splice(index, 1);
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  onOpenModal(service: ServiceModel | null, action: string): void {
    const container = document.getElementById('main-container');
    if (container) {
      const button = document.createElement('button');
      button.type = 'button';
      button.style.display = 'none';
      button.setAttribute('data-toggle', 'modal');

      if (action === 'add') {
        button.setAttribute('data-target', '#addServiceModal');
      } else if (action === 'edit' && service) {
        this.editService = { ...service }; // Create a copy of the service to avoid modifying the original
        if (this.editService) {
          button.setAttribute('data-target', '#updateServiceModal');
        }
      } else if (action === 'delete' && service) {
        this.deleteService = service;
        button.setAttribute('data-target', '#deleteServiceModal');
      }

      container.appendChild(button);
      button.click();
    }
  }
}
