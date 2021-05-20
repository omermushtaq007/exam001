import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsSideNavComponent } from './bs-side-nav.component';

describe('BsSideNavComponent', () => {
  let component: BsSideNavComponent;
  let fixture: ComponentFixture<BsSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsSideNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
