import { TestBed } from '@angular/core/testing';

import { ClientauthentificationserviceService } from './clientauthentificationservice.service';

describe('ClientauthentificationserviceService', () => {
  let service: ClientauthentificationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientauthentificationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
