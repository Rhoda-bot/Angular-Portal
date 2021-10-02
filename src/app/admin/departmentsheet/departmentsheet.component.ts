import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-departmentsheet',
  templateUrl: './departmentsheet.component.html',
  styleUrls: ['./departmentsheet.component.css']
})
export class DepartmentsheetComponent implements OnInit {
  departmentForm  = this.fb.group({
    department:['', Validators.required]
  })
  constructor(private fb:FormBuilder, private service:ServiceService) { }

  ngOnInit(): void {
  }
  submit(){
    let values = this.departmentForm.value;
    this.service.postDeptment(values).subscribe(res=>{
      console.log(res);
    })
    
  }
}
