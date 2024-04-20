import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ServiceModel } from '../service';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { ClientauthentificationserviceService } from '../clientauthentificationservice.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  addedService: ServiceModel | undefined;
  services: ServiceModel[] = [];
  errorMessage: string = '';

  constructor(
    private serviceService: ServiceService,
    private router: Router,
    private authService: ClientauthentificationserviceService
  ) { }

  ngOnInit(): void {
    this.addedService = history.state.service;
    this.getServices();
  }
  ngAfterViewInit(): void {
    const categorySwiper = new Swiper(".categorySwiper", {
      spaceBetween: 32,
      autoplay: {
        delay: 1000,
      },
      breakpoints: {
        450: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        992: { slidesPerView: 4 },
        1400: { slidesPerView: 6 },
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    const bannerSwiper = new Swiper('.banner-slider', {
      effect: "cards",
      grabCursor: true,
      slidesPerView: 1,
      autoplay: {
        delay: 2000,
      },
    });
  }

  getServices(): void {
    this.serviceService.getAllServices().subscribe(
      (data: ServiceModel[]) => {
        this.services = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  goToCommandDetails(id:number): void {
    this.router.navigate(['/commanddetails', id]);
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
