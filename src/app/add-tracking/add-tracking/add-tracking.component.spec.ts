import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrackingComponent } from '@src/app/add-tracking/add-tracking/add-tracking.component';

describe('AddTrackingComponent', () => {
  let component: AddTrackingComponent;
  let fixture: ComponentFixture<AddTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
