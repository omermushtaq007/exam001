import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsUserComponent } from './bs-user.component';

describe('BsUserComponent', () => {
  let component: BsUserComponent;
  let fixture: ComponentFixture<BsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
