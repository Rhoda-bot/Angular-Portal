import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsheetComponent } from './departmentsheet.component';

describe('DepartmentsheetComponent', () => {
  let component: DepartmentsheetComponent;
  let fixture: ComponentFixture<DepartmentsheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartmentsheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
