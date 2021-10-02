import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesheetComponent } from './coursesheet.component';

describe('CoursesheetComponent', () => {
  let component: CoursesheetComponent;
  let fixture: ComponentFixture<CoursesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
