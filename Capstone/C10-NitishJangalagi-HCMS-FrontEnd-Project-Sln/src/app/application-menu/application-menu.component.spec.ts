import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationMenuComponent } from './application-menu.component';

describe('ApplicationMenuComponent', () => {
  let component: ApplicationMenuComponent;
  let fixture: ComponentFixture<ApplicationMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplicationMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
