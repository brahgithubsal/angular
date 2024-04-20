import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcommanduserComponent } from './getcommanduser.component';

describe('GetcommanduserComponent', () => {
  let component: GetcommanduserComponent;
  let fixture: ComponentFixture<GetcommanduserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetcommanduserComponent]
    });
    fixture = TestBed.createComponent(GetcommanduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
