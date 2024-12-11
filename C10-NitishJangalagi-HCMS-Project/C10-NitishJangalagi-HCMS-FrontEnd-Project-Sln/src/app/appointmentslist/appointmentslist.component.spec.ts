import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentslistComponent } from './appointmentslist.component';

describe('AppointmentslistComponent', () => {
  let component: AppointmentslistComponent;
  let fixture: ComponentFixture<AppointmentslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppointmentslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
