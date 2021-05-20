import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BsDownloadStatusComponent } from './bs-download-status.component';

describe('BsDownloadStatusComponent', () => {
  let component: BsDownloadStatusComponent;
  let fixture: ComponentFixture<BsDownloadStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BsDownloadStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BsDownloadStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
