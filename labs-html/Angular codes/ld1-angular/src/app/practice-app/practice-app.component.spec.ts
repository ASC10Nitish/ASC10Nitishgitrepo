import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeAppComponent } from './practice-app.component';

describe('PracticeAppComponent', () => {
  let component: PracticeAppComponent;
  let fixture: ComponentFixture<PracticeAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PracticeAppComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
