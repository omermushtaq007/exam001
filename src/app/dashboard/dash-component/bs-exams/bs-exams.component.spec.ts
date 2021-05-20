import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsExamsComponent } from './bs-exams.component';

describe('BsExamsComponent', () => {
  let component: BsExamsComponent;
  let fixture: ComponentFixture<BsExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
