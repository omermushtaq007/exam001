import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsCustomersComponent } from './bs-customers.component';

describe('BsCustomersComponent', () => {
  let component: BsCustomersComponent;
  let fixture: ComponentFixture<BsCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
