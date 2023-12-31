import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkersComponent } from './markers.component';

describe('MarkersComponent', () => {
  let component: MarkersComponent;
  let fixture: ComponentFixture<MarkersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MarkersComponent]
    });
    fixture = TestBed.createComponent(MarkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
