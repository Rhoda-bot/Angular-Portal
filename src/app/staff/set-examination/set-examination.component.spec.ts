import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetExaminationComponent } from './set-examination.component';

describe('SetExaminationComponent', () => {
  let component: SetExaminationComponent;
  let fixture: ComponentFixture<SetExaminationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetExaminationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetExaminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
