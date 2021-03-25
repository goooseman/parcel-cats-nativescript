import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingsListComponent } from '@src/app/trackings/trackings-list/trackings-list.component';

describe('TrackingsListComponent', () => {
  let component: TrackingsListComponent;
  let fixture: ComponentFixture<TrackingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
