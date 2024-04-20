import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandetousComponent } from './commandetous.component';

describe('CommandetousComponent', () => {
  let component: CommandetousComponent;
  let fixture: ComponentFixture<CommandetousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandetousComponent]
    });
    fixture = TestBed.createComponent(CommandetousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
