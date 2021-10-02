import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service'

@Component({
  selector: 'app-coursesheet',
  templateUrl: './coursesheet.component.html',
  styleUrls: ['./coursesheet.component.css']
})
export class CoursesheetComponent implements OnInit {

  constructor(private fb:FormBuilder, private service:ServiceService) { }
  courseForm = this.fb.group({
    courseName:['',Validators.required],
    courseCode:['',Validators.required],
    courseUnit:['',Validators.required]
  })
  ngOnInit(): void {
  }
  submitForm(){
    let values = this.courseForm.value;
    this.service.postCourses(values).subscribe(res=>{
      console.log(res);
      
    })
  }
}
