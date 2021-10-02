import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-set-examination',
  templateUrl: './set-examination.component.html',
  styleUrls: ['./set-examination.component.css']
})
export class SetExaminationComponent implements OnInit {

  constructor(private _fb:FormBuilder, private service:ServiceService) { }
  allQuestions =[]
  questionForm = this._fb.group({
    question:['',Validators.required],
    option1:['',Validators.required],
    option2:['',Validators.required],
    option3:['',Validators.required],
    option4:['',Validators.required],
    rightAns:['',Validators.required],
    approved:[false]
  })
  ngOnInit(): void {
  
  }

  submitQuestions(){
    let values = this.questionForm.value;
    console.log(values);
    
      // this.service.setQuestions(values).subscribe(res=>{
      //  res 
      // })
  }
}
