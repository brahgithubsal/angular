import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanddetailsComponent } from './commanddetails.component';

describe('CommanddetailsComponent', () => {
  let component: CommanddetailsComponent;
  let fixture: ComponentFixture<CommanddetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommanddetailsComponent]
    });
    fixture = TestBed.createComponent(CommanddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
