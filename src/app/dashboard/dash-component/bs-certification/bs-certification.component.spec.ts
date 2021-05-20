import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCertificationComponent } from './bs-certification.component';

describe('BsCertificationComponent', () => {
  let component: BsCertificationComponent;
  let fixture: ComponentFixture<BsCertificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsCertificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsCertificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
