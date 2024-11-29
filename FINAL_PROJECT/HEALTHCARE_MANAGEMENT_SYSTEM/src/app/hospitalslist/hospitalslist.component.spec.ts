import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospitalslistComponent } from './hospitalslist.component';

describe('HospitalslistComponent', () => {
  let component: HospitalslistComponent;
  let fixture: ComponentFixture<HospitalslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HospitalslistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HospitalslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
