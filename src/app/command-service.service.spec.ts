import { TestBed } from '@angular/core/testing';

import { CommandService } from './command-service.service';

describe('CommandServiceService', () => {
  let service: CommandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
