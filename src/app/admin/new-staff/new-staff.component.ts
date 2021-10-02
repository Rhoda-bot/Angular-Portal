import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.css']
})
export class NewStaffComponent implements OnInit {

  constructor(private _formBuilder: FormBuilder,private services:ServiceService) { }
//Getting all courses from the backend
  allCourse: any =[];
  //Getting all the departments from the backend
  departments:any =[]
  //this is the formGroup
  staffRegInfosForms =this._formBuilder.group({
    fname: ['',Validators.required],
    lname:['',Validators.required],
    email:['',Validators.required],
    phone:['',Validators.required],
    department:this._formBuilder.array([], [Validators.required]),
    courselist: this._formBuilder.array([], [Validators.required])

  })
  data:any
  ngOnInit(): void {
    let departments = this.services.getDepartment().subscribe(res=>{
      this.departments.push(res);
    })
    
   let courses= this.services.getCourses().subscribe(res=>{
        this.allCourse.push(res);   
    })
  }
  handlechecked(e){
    const department :FormArray = this.staffRegInfosForms.get('department') as FormArray;
    if (e.target.checked) {
      department.push(new FormControl(e.target.value));
    }else{
      const index = department.controls.findIndex(x => x.value === e.target.value);
      department.removeAt(index);
      console.log(department.value);
      
    }
    
  }
  handleCourses(e){
    const courselist :FormArray = this.staffRegInfosForms.get('courselist') as FormArray;
    if (e.target.checked) {
      courselist.push(new FormControl(e.target.value));
    }else{
      const index = courselist.controls.findIndex(x=> x.value === e.target.value);
      courselist.removeAt(index);
    }
  }
  createStaff(){
    let values = this.staffRegInfosForms.value;
    this.services.postStaffs(values).subscribe(res=>{
      console.log(res);
      
    })
    
  }

  addCourses(){
    console.log("hello")
  }
}
